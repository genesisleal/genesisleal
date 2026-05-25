import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const templateUrl = `file://${resolve(__dirname, 'og-image.html')}`
const outputPath = resolve(__dirname, '../public/og-image.jpg')

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await page.goto(templateUrl, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)

await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 })
await browser.close()

console.log(`OG image generada en ${outputPath}`)
