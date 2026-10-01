import { Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import SEO from '../components/SEO'
import { getServiceByKey, servicePages } from '../data/services'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail({ serviceKey }) {
  const service = getServiceByKey(serviceKey)

  if (!service) return <Navigate to="/servicios" replace />

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://genesisleal.com${service.path}/#service`,
        name: service.title,
        description: service.metaDescription,
        url: `https://genesisleal.com${service.path}/`,
        provider: { '@id': 'https://genesisleal.com/#person' },
        areaServed: { '@type': 'Country', name: 'Argentina' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Servicios',
            item: 'https://genesisleal.com/servicios/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.title,
            item: `https://genesisleal.com${service.path}/`,
          },
        ],
      },
    ],
  }

  const otherServices = servicePages.filter(item => item.key !== service.key)

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={service.path}
        structuredData={serviceStructuredData}
      />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Navegación secundaria">
              <Link to="/servicios">Servicios</Link>
              <span aria-hidden="true">/</span>
              <span>{service.title}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>
                  {service.eyebrow}
                </span>
                <h1>
                  {service.heading}
                </h1>
              </div>

              <div className={styles.heroAside}>
                <p className={styles.lead}>{service.intro}</p>
                <div className={styles.heroActions}>
                  <Link to="/servicios#consulta" className={styles.primaryButton}>
                    {service.ctaLabel}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link to="/portafolio" className={styles.secondaryButton}>
                    Ver trabajos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.caseSection}`} aria-labelledby={`case-${service.key}-title`}>
          <div className={styles.container}>
            <article
              className={`${styles.caseCard} ${service.featuredCase.image ? '' : styles.caseCardWithoutImage}`}
            >
              {service.featuredCase.image ? (
                <div className={styles.caseMedia}>
                  <picture>
                    {service.featuredCase.imageAvif && (
                      <source srcSet={service.featuredCase.imageAvif} type="image/avif" />
                    )}
                    <img
                      src={service.featuredCase.image}
                      width={service.featuredCase.imageWidth}
                      height={service.featuredCase.imageHeight}
                      alt={service.featuredCase.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
              ) : (
                <div className={styles.casePlaceholder} aria-hidden="true">
                  <strong>{service.featuredCase.stats[0].value}</strong>
                  <span>{service.featuredCase.stats[0].label}</span>
                </div>
              )}

              <div className={styles.caseContent}>
                <span className={styles.eyebrow}>{service.featuredCase.label}</span>
                <p className={styles.caseClient}>{service.featuredCase.client}</p>
                <h2 id={`case-${service.key}-title`}>{service.featuredCase.title}</h2>
                <p className={styles.caseDescription}>{service.featuredCase.description}</p>
                <div className={styles.caseStats}>
                  {service.featuredCase.stats.map(stat => (
                    <div key={stat.label} className={styles.caseStat}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.featuredCase.link} className={styles.caseLink}>
                  {service.featuredCase.linkLabel}
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="included-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Qué podemos trabajar</span>
              <h2 id="included-title">Un servicio adaptado a tu marca</h2>
            </div>
            <div className={styles.includedGrid}>
              {service.included.map(item => (
                <article key={item} className={styles.includedCard}>
                  <Check size={21} aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`} aria-labelledby="process-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Cómo trabajo</span>
              <h2 id="process-title">Un proceso claro de principio a fin</h2>
            </div>
            <ol className={styles.processGrid}>
              {service.process.map((step, index) => (
                <li key={step.title} className={styles.processCard}>
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.fitSection} aria-labelledby="fit-title">
          <div className={styles.container}>
            <div className={styles.fitCard}>
              <span className={styles.eyebrow}>Para quién es</span>
              <h2 id="fit-title">¿Este servicio es para tu marca?</h2>
              <p>{service.idealFor}</p>
              <Link to="/servicios#consulta" className={styles.primaryButton}>
                Contarme sobre mi marca
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.otherSection} aria-labelledby="other-services-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>También podemos trabajar</span>
              <h2 id="other-services-title">Otros servicios</h2>
            </div>
            <div className={styles.otherGrid}>
              {otherServices.map(item => (
                <Link key={item.key} to={item.path} className={styles.otherCard}>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <span>
                    Conocer el servicio
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <Link to="/servicios" className={styles.backLink}>
              <ArrowLeft size={18} aria-hidden="true" />
              Volver a todos los servicios
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
