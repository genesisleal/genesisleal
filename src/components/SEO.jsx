import { useEffect } from 'react'

const DEFAULT_TITLE = 'Genesis Leal | Community Manager Buenos Aires'
const DEFAULT_DESCRIPTION = 'Soy Genesis Leal, Community Manager con más de 5 años de experiencia en estrategias digitales, Meta Ads y contenido visual de alto impacto para marcas B2C en Buenos Aires.'
const SITE_URL = 'https://genesisleal.com'
const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const NOINDEX_ROBOTS = 'noindex, follow'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = '/og-image.jpg',
  type = 'website',
  noindex = false
}) {
  const fullTitle = title
    ? (title.includes('Genesis Leal') ? title : `${title} | Genesis Leal`)
    : DEFAULT_TITLE
  const normalizedPath = path && path !== '/' ? `${path.replace(/\/$/, '')}/` : '/'
  const fullUrl = `${SITE_URL}${normalizedPath}`
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
    updateMeta('robots', noindex ? NOINDEX_ROBOTS : DEFAULT_ROBOTS)
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
  }, [fullTitle, description, fullUrl, fullImage, type, noindex])

  return null
}
