import assert from 'node:assert/strict'
import { readFile, mkdir, writeFile } from 'node:fs/promises'

const host = 'genesisleal.com'
const origin = `https://${host}`
const key = (await readFile('public/indexnow-key.txt', 'utf8')).trim()
assert(/^[a-f0-9]{32}$/.test(key), 'Invalid IndexNow verification key')
const keyLocation = `${origin}/indexnow-key.txt`
const keyResponse = await fetch(keyLocation, { redirect: 'error', signal: AbortSignal.timeout(30000) })
assert.equal(keyResponse.status, 200, 'Public key unavailable')
assert.equal((await keyResponse.text()).trim(), key, 'Public key differs from local key')
const sitemapResponse = await fetch(`${origin}/sitemap.xml`, { redirect: 'error', signal: AbortSignal.timeout(30000) })
assert.equal(sitemapResponse.status, 200, 'Public sitemap unavailable')
const sitemap = await sitemapResponse.text()
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
const urlList = [...new Set(process.argv.length > 2 ? process.argv.slice(2) : sitemapUrls)]
assert(urlList.length > 0 && urlList.length <= 100, 'Refusing empty or excessive submission')
for (const value of urlList) {
  const url = new URL(value)
  assert.equal(url.origin, origin, 'Only Genesis production URLs are allowed')
  assert(sitemapUrls.includes(value), 'Only public sitemap URLs are allowed')
}
const pages = await Promise.all(urlList.map(async url => {
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30000) })
  assert.equal(response.status, 200, `Page unavailable: ${url}`)
  const html = await response.text()
  assert(html.includes(`rel="canonical" href="${url}"`), `Canonical mismatch: ${url}`)
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), `Noindex: ${url}`)
  return url
}))
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList: pages }),
  signal: AbortSignal.timeout(30000)
})
const report = { at: new Date().toISOString(), endpoint: 'https://api.indexnow.org/indexnow', status: response.status,
  result: response.status === 200 ? 'received' : response.status === 202 ? 'received_pending_key_validation' : 'rejected',
  urlList: pages }
await mkdir('.artifacts/indexnow', { recursive: true })
await writeFile('.artifacts/indexnow/submission.json', JSON.stringify(report, null, 2) + '\n')
assert([200, 202].includes(response.status), `IndexNow rejected submission: ${response.status}`)
console.log(`IndexNow: ${response.status}, ${pages.length} URLs received${response.status === 202 ? ', key validation pending' : ''}. This is not confirmation of indexing.`)
