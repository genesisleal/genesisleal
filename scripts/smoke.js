import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const output = resolve(process.env.SMOKE_OUTPUT_DIR || join(root, '.artifacts/smoke'))
const deployment = JSON.parse(await readFile(join(dist, 'deployment.json'), 'utf8'))
const expectedSha = process.env.SMOKE_EXPECTED_SHA || deployment.commit
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8')
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
routes.push('/oferta/')
const aliases = ['/si', '/contacto', '/precios/publicidad', '/planes', '/planes/redes', '/planes/publicidad']
const blocked = ['googletagmanager.com', 'google-analytics.com', 'clarity.ms', 'static.cloudflareinsights.com', 'wa.me', 'whatsapp.com']
const report = { commit: expectedSha, base: null, pages: [], interactions: [], assets: [], errors: [] }
await mkdir(output, { recursive: true })
let server, browser, page

async function clickVisible(selector) {
  report.lastControl = selector
  await page.waitForFunction((query) => [...document.querySelectorAll(query)].some((element) => {
    const style = getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0
  }), { timeout: 15000 }, selector)
  for (const element of await page.$$(selector)) {
    if (await element.isVisible()) {
      await element.asLocator().click()
      return
    }
  }
  throw new Error(`No visible control: ${selector}`)
}

async function ready(path) {
  await page.waitForFunction((pathname) => window.location.pathname.replace(/\/$/, '') === pathname.replace(/\/$/, '') &&
    !document.querySelector('.route-loading') && document.querySelector('h1') &&
    document.querySelector('link[rel="canonical"]')?.href === `https://genesisleal.com${pathname === '/' ? '/' : pathname.replace(/\/$/, '') + '/'}`, {}, path)
  await page.waitForFunction(() => document.querySelector('meta[name="description"]')?.content.length > 20)
}

try {
  if (!process.env.SMOKE_BASE_URL) server = await preview({ root, preview: { host: '127.0.0.1', port: 0 } })
  const base = (process.env.SMOKE_BASE_URL || server.resolvedUrls.local[0]).replace(/\/$/, '')
  report.base = base
  const origin = new URL(base).origin
  const isBlocked = (url) => {
    const parsed = new URL(url)
    return blocked.some((host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)) ||
      (parsed.origin === origin && parsed.pathname === '/cdn-cgi/rum')
  }
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
  await page.setCacheEnabled(false)
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    if (isBlocked(req.url())) return req.abort()
    if (!['GET', 'HEAD'].includes(req.method())) {
      report.errors.push(`Blocked outbound ${req.method()}: ${req.url()}`)
      return req.abort()
    }
    return req.continue()
  })
  page.on('pageerror', (error) => report.errors.push(`JS: ${error.message}`))
  page.on('requestfailed', (req) => {
    if (req.url().startsWith(origin) && !isBlocked(req.url()) && req.failure()?.errorText !== 'net::ERR_ABORTED') report.errors.push(`Request: ${req.url()} ${req.failure()?.errorText}`)
  })
  page.on('response', (response) => {
    if (response.url().startsWith(origin) && response.status() >= 400 && !response.url().includes('__smoke-not-found__')) report.errors.push(`HTTP ${response.status()}: ${response.url()}`)
  })
  await page.evaluateOnNewDocument(() => {
    window.__smokeOpened = []
    window.open = (url) => { window.__smokeOpened.push(url); return null }
  })

  for (const [device, viewport] of [['desktop', { width: 1440, height: 1000 }], ['mobile', { width: 390, height: 844 }]]) {
    await page.setViewport(viewport)
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 })
      assert.equal(response.status(), 200, `${device} ${route}`)
      const raw = await response.text()
      assert(raw.includes(`name="deployment-sha" content="${expectedSha}"`), `Stale HTML: ${route}`)
      const staticSEO = await page.evaluate((html) => {
        const document = new DOMParser().parseFromString(html, 'text/html')
        return { canonical: document.querySelector('link[rel="canonical"]')?.href, h1: document.querySelector('h1')?.textContent }
      }, raw)
      assert.equal(staticSEO.canonical, `https://genesisleal.com${route}`, `Prerender canonical: ${route}`)
      assert(staticSEO.h1?.trim(), `Missing prerender heading: ${route}`)
      await ready(route)
      const metadata = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector('h1').innerText,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        robots: document.querySelector('meta[name="robots"]')?.content,
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        json: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent))
      }))
      assert(metadata.h1.trim(), `Empty heading: ${route}`)
      assert(metadata.title.includes('Genesis Leal'), `Missing title: ${route}`)
      assert.equal(metadata.canonical, `https://genesisleal.com${route}`)
      assert(metadata.overflow <= 2, `${device} overflow on ${route}: ${metadata.overflow}`)
      assert.equal(metadata.robots.includes('noindex'), route === '/oferta/')
      report.pages.push({ device, route, status: response.status(), ...metadata })
      if (['/', '/servicios/', '/portafolio/', '/servicios/meta-ads/'].includes(route)) {
        await page.screenshot({ path: join(output, `${device}-${route.replaceAll('/', '_') || 'home'}.png`), fullPage: true })
      }
    }

    await page.goto(base + '/', { waitUntil: 'networkidle0' })
    await ready('/')
    if (device === 'mobile') await clickVisible('header button[aria-label="Abrir menú"]')
    await clickVisible('header a[href="/portafolio"]')
    await ready('/portafolio')
    await clickVisible('button[role="tab"]:nth-child(2)')
    assert.equal(await page.$eval('button[role="tab"]:nth-child(2)', (element) => element.getAttribute('aria-selected')), 'true')
    await clickVisible('button[aria-label="Ver resultados de la campaña"]')
    await page.waitForFunction(() => {
      const modal = document.querySelector('button[aria-label="Cerrar"]')?.parentElement
      return modal?.querySelector('img')?.naturalWidth > 0 && getComputedStyle(modal).opacity === '1'
    })
    await page.screenshot({ path: join(output, `${device}-portfolio-results.png`) })
    await clickVisible('button[aria-label="Cerrar"]')
    await page.waitForFunction(() => !document.querySelector('button[aria-label="Cerrar"]'))
    report.interactions.push(`${device}: portfolio Meta Ads filter and campaign result image`)
    await clickVisible('header a[href="/"]')
    await ready('/')
    await clickVisible('main a[href="/servicios"]')
    await ready('/servicios')
    await clickVisible('main a[href="/servicios/meta-ads"]')
    await ready('/servicios/meta-ads')
    await clickVisible('main a[href="/servicios#consulta"]')
    await ready('/servicios')
    await page.waitForFunction(() => {
      const rect = document.querySelector('#consulta')?.getBoundingClientRect()
      return rect && rect.top < window.innerHeight && rect.bottom > 0
    }, { timeout: 10000 })
    report.interactions.push(`${device}: menu, portfolio, home CTA, service detail, consultation anchor`)

    await page.type('input[name="name"]', 'QA Genesis')
    await page.type('input[name="brand"]', 'Marca de prueba')
    await page.type('input[name="phone"]', '1100000000')
    await clickVisible('label:has(input[name="objective"])')
    await clickVisible('button[type="submit"]')
    await page.waitForFunction(() => document.body.textContent.includes('Elegí al menos una opción.'))
    assert.deepEqual(await page.evaluate(() => window.__smokeOpened), [])
    await clickVisible('form button[type="button"]')
    await clickVisible('button[type="submit"]')
    const opened = await page.evaluate(() => window.__smokeOpened)
    assert.equal(opened.length, 1)
    const message = new URL(opened[0])
    assert.equal(message.origin + message.pathname, 'https://wa.me/5491125490503')
    for (const text of ['Nombre: QA Genesis', 'Marca: Marca de prueba', 'WhatsApp: 1100000000', 'Servicio: Redes sociales', 'Objetivo: Conseguir más consultas']) {
      assert(message.searchParams.get('text').includes(text), `Missing WhatsApp field: ${text}`)
    }
    report.interactions.push(`${device}: validation and WhatsApp draft, external opening intercepted`)
  }

  for (const alias of aliases) {
    await page.goto(base + alias, { waitUntil: 'networkidle0' })
    await ready(alias === '/si' ? '/' : '/servicios')
    report.interactions.push(`${alias} redirects`)
  }
  await page.goto(base + '/__smoke-not-found__', { waitUntil: 'networkidle0' })
  await page.waitForFunction(() => document.title.includes('Página no encontrada'))
  assert((await page.$eval('meta[name="robots"]', (e) => e.content)).includes('noindex'))

  const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
  const assetPaths = (await readdir(join(dist, 'assets'))).map((file) => `assets/${file}`)
  for (const font of await readdir(join(dist, 'fonts'))) assetPaths.push(`fonts/${font}`)
  for (const file of assetPaths) {
    if (file.endsWith('.htaccess')) continue
    const response = await fetch(`${base}/${file}`, { method: /\.(js|css|woff2?)$/.test(file) ? 'GET' : 'HEAD' })
    assert(response.ok, `Missing asset ${file}`)
    assert(!response.headers.get('content-type')?.includes('text/html'), `HTML fallback for asset ${file}`)
    if (!/\.(js|css|woff2?)$/.test(file)) {
      report.assets.push({ file, status: response.status })
      continue
    }
    const actual = hash(Buffer.from(await response.arrayBuffer()))
    assert.equal(actual, hash(await readFile(join(dist, file))), `Different asset ${file}`)
    report.assets.push({ file, sha256: actual })
  }
  assert.deepEqual(report.errors, [], 'Browser errors')
  console.log(`Smoke passed: ${report.pages.length} route/viewport checks, ${report.assets.length} assets (JS/CSS/fonts hashed); no messages sent.`)
} catch (error) {
  report.failedUrl = page?.url()
  report.errors.push(error.stack)
  if (page) await page.screenshot({ path: join(output, 'failure.png'), fullPage: true }).catch(() => {})
  console.error(error)
  process.exitCode = 1
} finally {
  await writeFile(join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n')
  await browser?.close()
  if (server) await new Promise((done) => server.httpServer.close(done))
}
