import { fileURLToPath } from 'url'
import { dirname, resolve, join } from 'path'
import { mkdir, writeFile } from 'fs/promises'
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
  '/precios/publicidad',
  '/oferta',
  '/planes',
  '/planes/redes',
  '/planes/publicidad',
  '/planes/proximamente'
]

const NOT_FOUND_ROUTE = '/__not-found__'
const BLOCKED_HOSTS = ['googletagmanager.com', 'google-analytics.com', 'clarity.ms']
const SETTLE_MS = 1200

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

  const html = await page.evaluate(
    () => '<!doctype html>\n' + document.documentElement.outerHTML
  )
  await page.close()
  return html
}

async function run() {
  const server = await preview({ root: rootDir, preview: { port: 4183, strictPort: false } })
  const base = server.resolvedUrls.local[0].replace(/\/$/, '')
  const browser = await puppeteer.launch()

  const pages = []
  for (const route of ROUTES) {
    pages.push([route, await capture(browser, base, route)])
    console.log(`prerendered ${route}`)
  }
  const notFoundHtml = await capture(browser, base, NOT_FOUND_ROUTE)
  console.log('prerendered 404')

  await browser.close()
  server.httpServer.close()

  for (const [route, html] of pages) {
    const dir = route === '/' ? distDir : join(distDir, route)
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html, 'utf8')
  }
  await writeFile(join(distDir, '404.html'), notFoundHtml, 'utf8')

  console.log(`prerender completo: ${pages.length} rutas + 404.html`)
}

try {
  await run()
  process.exit(0)
} catch (error) {
  console.error('prerender fallo:', error)
  process.exit(1)
}
