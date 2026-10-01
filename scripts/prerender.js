import { fileURLToPath } from 'url'
import { dirname, resolve, join } from 'path'
import { mkdir, writeFile } from 'fs/promises'
import { execFileSync } from 'node:child_process'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = join(rootDir, 'dist')

const ROUTES = [
  '/',
  '/experiencia',
  '/portafolio',
  '/sobre-mi',
  '/contacto',
  '/oferta',
  '/servicios',
  '/servicios/gestion-redes-sociales',
  '/servicios/meta-ads',
  '/servicios/creacion-de-contenido',
  '/servicios/automatizacion-chatbots',
  '/planes',
  '/planes/redes',
  '/planes/publicidad'
]

const NOT_FOUND_ROUTE = '/__not-found__'
const BLOCKED_HOSTS = ['googletagmanager.com', 'google-analytics.com', 'clarity.ms']
const SETTLE_MS = 1200
const commit = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { cwd: rootDir, encoding: 'utf8' }).trim()
if (!/^[0-9a-f]{40}$/.test(commit)) throw new Error('Invalid build commit')

async function capture(browser, base, route) {
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    if (BLOCKED_HOSTS.some((host) => req.url().includes(host))) req.abort()
    else req.continue()
  })

  await page.goto(`${base}${route}`, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.waitForSelector('#root > *', { timeout: 30000 })
  await new Promise((done) => setTimeout(done, SETTLE_MS))
  await page.evaluate((sha) => {
    const meta = document.createElement('meta')
    meta.name = 'deployment-sha'
    meta.content = sha
    document.head.appendChild(meta)
  }, commit)

  const html = await page.evaluate(
    () => '<!doctype html>\n' + document.documentElement.outerHTML
  )
  await page.close()
  return html
}

async function run() {
  const server = await preview({ root: rootDir, preview: { host: '127.0.0.1', port: 0 } })
  const base = server.resolvedUrls.local[0].replace(/\/$/, '')
  let browser

  const pages = []
  let notFoundHtml
  try {
    browser = await puppeteer.launch({ headless: true })
    for (const route of ROUTES) {
      pages.push([route, await capture(browser, base, route)])
      console.log(`prerendered ${route}`)
    }
    notFoundHtml = await capture(browser, base, NOT_FOUND_ROUTE)
    console.log('prerendered 404')
  } finally {
    await browser?.close()
    await new Promise((done) => server.httpServer.close(done))
  }

  for (const [route, html] of pages) {
    const dir = route === '/' ? distDir : join(distDir, route)
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html, 'utf8')
  }
  await writeFile(join(distDir, '404.html'), notFoundHtml, 'utf8')
  await writeFile(join(distDir, 'deployment.json'), JSON.stringify({ commit, routes: ROUTES }) + '\n')

  console.log(`prerender completo: ${pages.length} rutas + 404.html`)
}

try {
  await run()
  process.exit(0)
} catch (error) {
  console.error('prerender fallo:', error)
  process.exit(1)
}
