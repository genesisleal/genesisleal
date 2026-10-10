const productionHosts = new Set(['genesisleal.com', 'www.genesisleal.com'])
const contactEvents = new Set(['whatsapp_click', 'email_click', 'consultation_form_valid', 'whatsapp_draft_open'])
let enabled = false

export function trackContact(eventName, { source = 'page', serviceCount } = {}) {
  if (!enabled || !contactEvents.has(eventName)) return
  const params = { contact_source: source === 'consultation_form' ? source : 'page' }
  if (Number.isInteger(serviceCount) && serviceCount >= 1 && serviceCount <= 5) {
    params.service_count = serviceCount
  }
  window.gtag('event', eventName, params)
  window.clarity('event', eventName)
}

export function initializeMeasurement({ production = false } = {}) {
  if (enabled || !production || !productionHosts.has(window.location.hostname)) return
  enabled = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', 'G-PHYD3VS6T5')
  window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments) }

  let loaded = false
  const loadMeasurement = () => {
    if (loaded) return
    loaded = true
    for (const src of ['https://www.googletagmanager.com/gtag/js?id=G-PHYD3VS6T5', 'https://www.clarity.ms/tag/s422uew20w']) {
      const script = document.createElement('script')
      script.async = true
      script.src = src
      document.head.appendChild(script)
    }
  }
  for (const event of ['pointerdown', 'keydown', 'touchstart']) {
    window.addEventListener(event, loadMeasurement, { once: true, passive: true })
  }
  // Run after React is ready, without waiting six seconds and losing short visits.
  window.setTimeout(loadMeasurement, 1500)
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null
    if (!link) return
    const url = new URL(link.href, window.location.href)
    if (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) trackContact('whatsapp_click')
    if (url.protocol === 'mailto:') trackContact('email_click')
  }, { capture: true })
}
