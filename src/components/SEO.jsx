import { useEffect } from 'react'

const DEFAULT_TITLE = 'Genesis Leal | Community Manager Buenos Aires'
const DEFAULT_DESCRIPTION = 'Soy Genesis Leal, Community Manager con más de 5 años de experiencia en estrategias digitales, Meta Ads y contenido visual de alto impacto para marcas B2C en Buenos Aires.'
const SITE_URL = 'https://genesisleal.com'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = '/og-image.png',
  type = 'website'
}) {
  const fullTitle = title ? `${title} | Genesis Leal` : DEFAULT_TITLE
  const fullUrl = `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  useEffect(() => {
    document.title = fullTitle

    const updateMeta = (property, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attr}="${property}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attr, property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    updateMeta('description', description)
    updateMeta('og:title', fullTitle, true)
    updateMeta('og:description', description, true)
    updateMeta('og:url', fullUrl, true)
    updateMeta('og:image', fullImage, true)
    updateMeta('og:type', type, true)
    updateMeta('twitter:title', fullTitle)
    updateMeta('twitter:description', description)
    updateMeta('twitter:url', fullUrl)
    updateMeta('twitter:image', fullImage)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', fullUrl)
    }

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [fullTitle, description, fullUrl, fullImage, type])

  return null
}
