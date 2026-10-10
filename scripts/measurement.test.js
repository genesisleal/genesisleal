import test from 'node:test'
import assert from 'node:assert/strict'

let moduleId = 0
async function setup(hostname) {
  const scripts = []
  const listeners = {}
  const timers = []
  globalThis.window = {
    location: { hostname, href: `https://${hostname}/servicios/` },
    addEventListener: (name, callback) => { listeners[name] = callback },
    setTimeout: (callback) => { timers.push(callback) },
  }
  globalThis.document = {
    createElement: () => ({}),
    head: { appendChild: script => scripts.push(script) },
    addEventListener: (name, callback) => { listeners[`document:${name}`] = callback },
  }
  const measurement = await import(`../src/utils/measurement.js?test=${++moduleId}`)
  return { ...measurement, scripts, listeners, timers }
}

test('development, local previews and unrelated hosts never initialize production measurement', async () => {
  for (const [hostname, production] of [['genesisleal.com', false], ['127.0.0.1', true], ['preview.example.com', true]]) {
    const context = await setup(hostname)
    context.initializeMeasurement({ production })
    context.trackContact('consultation_form_valid', { serviceCount: 1 })
    assert.equal(window.gtag, undefined)
    assert.equal(window.clarity, undefined)
    assert.equal(context.scripts.length, 0)
    assert.equal(context.timers.length, 0)
  }
})

test('valid form events queue before tag loading and never include submitted personal data', async () => {
  const context = await setup('genesisleal.com')
  context.initializeMeasurement({ production: true })
  context.trackContact('consultation_form_valid', {
    source: 'consultation_form', serviceCount: 2,
    name: 'Private name', phone: '1100000000', details: 'Private message',
  })
  const event = [...window.dataLayer.at(-1)]
  assert.deepEqual(event, ['event', 'consultation_form_valid', { contact_source: 'consultation_form', service_count: 2 }])
  assert.deepEqual([...window.clarity.q.at(-1)], ['event', 'consultation_form_valid'])
  assert.equal(context.scripts.length, 0)
})

test('multiple interactions and initialization do not load duplicate tags', async () => {
  const context = await setup('www.genesisleal.com')
  context.initializeMeasurement({ production: true })
  context.initializeMeasurement({ production: true })
  context.listeners.pointerdown()
  context.listeners.keydown()
  context.timers[0]()
  assert.deepEqual(context.scripts.map(script => script.src), [
    'https://www.googletagmanager.com/gtag/js?id=G-PHYD3VS6T5',
    'https://www.clarity.ms/tag/s422uew20w',
  ])
  assert.equal(window.dataLayer.length, 2)
})

test('unknown events and untrusted event parameters are not forwarded', async () => {
  const context = await setup('genesisleal.com')
  context.initializeMeasurement({ production: true })
  context.trackContact('private_message', { source: 'Private name' })
  assert.equal(window.dataLayer.length, 2)
  context.trackContact('whatsapp_click', { source: 'Private name', serviceCount: 100 })
  assert.deepEqual([...window.dataLayer.at(-1)], ['event', 'whatsapp_click', { contact_source: 'page' }])
})
