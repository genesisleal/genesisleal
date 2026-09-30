import { Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
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
                <motion.span
                  className={styles.eyebrow}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {service.eyebrow}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  {service.heading}
                </motion.h1>
              </div>

              <motion.div
                className={styles.heroAside}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
              >
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
              </motion.div>
            </div>
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
