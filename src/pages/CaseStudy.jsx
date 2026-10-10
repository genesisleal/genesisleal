import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Play } from 'lucide-react'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { caseStudies, getCaseStudy } from '../data/caseStudies'
import styles from './CaseStudy.module.css'

const SITE_URL = 'https://genesisleal.com'
const PUBLISHED_DATE = '2026-10-10'

function absoluteAssetUrl(asset) {
  return asset.startsWith('http') ? asset : `${SITE_URL}${asset}`
}

export default function CaseStudy() {
  const { slug } = useParams()
  const item = getCaseStudy(slug)

  if (!item) return <NotFound />

  const path = `/casos/${item.slug}`
  const currentIndex = caseStudies.findIndex((entry) => entry.slug === item.slug)
  const related = [
    caseStudies[(currentIndex + 1) % caseStudies.length],
    caseStudies[(currentIndex + 2) % caseStudies.length]
  ]
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: item.title,
      description: item.metaDescription,
      image: [absoluteAssetUrl(item.cover)],
      datePublished: PUBLISHED_DATE,
      dateModified: PUBLISHED_DATE,
      mainEntityOfPage: `${SITE_URL}${path}/`,
      author: {
        '@type': 'Person',
        name: 'Genesis Leal',
        url: `${SITE_URL}/sobre-mi/`,
        jobTitle: 'Community Manager y Social Media Strategist'
      },
      publisher: {
        '@type': 'Person',
        name: 'Genesis Leal',
        url: SITE_URL
      },
      about: item.serviceLabel
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Portafolio', item: `${SITE_URL}/portafolio/` },
        { '@type': 'ListItem', position: 3, name: item.shortTitle, item: `${SITE_URL}${path}/` }
      ]
    }
  ]

  return (
    <>
      <SEO
        title={item.title}
        description={item.metaDescription}
        path={path}
        image={item.cover}
        type="article"
        structuredData={structuredData}
      />

      <article className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan">
              <Link to="/portafolio">Portafolio</Link>
              <span aria-hidden>›</span>
              <span>{item.client}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>{item.kicker}</span>
                <h1>{item.title}</h1>
                <p className={styles.lead}>{item.intro}</p>

                <dl className={styles.projectMeta}>
                  <div>
                    <dt>Cliente</dt>
                    <dd>{item.client}</dd>
                  </div>
                  <div>
                    <dt>Mercado</dt>
                    <dd>{item.location}</dd>
                  </div>
                  {item.period && (
                    <div>
                      <dt>Período</dt>
                      <dd>{item.period}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Servicio</dt>
                    <dd><Link to={item.servicePath}>{item.serviceLabel}</Link></dd>
                  </div>
                </dl>
              </div>

              <figure className={styles.heroMedia}>
                <img src={item.cover} alt={item.coverAlt} width={item.coverWidth} height={item.coverHeight} data-critical-image />
              </figure>
            </div>
          </div>
        </header>

        <section className={styles.results} aria-labelledby="resultados">
          <div className={styles.narrow}>
            <span className={styles.sectionLabel}>Resultado documentado</span>
            <h2 id="resultados">Qué registró la plataforma</h2>
            <div className={styles.metrics}>
              {item.metrics.map((metric) => (
                <div className={styles.metric} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.resultText}>{item.result}</p>
            <p className={styles.source}>{item.source}</p>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.narrow}>
            <div className={styles.storyBlock}>
              <span className={styles.step}>01</span>
              <div>
                <span className={styles.sectionLabel}>El punto de partida</span>
                <h2>El desafío</h2>
                <p>{item.challenge}</p>
              </div>
            </div>

            <div className={styles.storyBlock}>
              <span className={styles.step}>02</span>
              <div>
                <span className={styles.sectionLabel}>La decisión</span>
                <h2>La estrategia</h2>
                <ul className={styles.checkList}>
                  {item.strategy.map((point) => (
                    <li key={point}><Check size={18} aria-hidden />{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.storyBlock}>
              <span className={styles.step}>03</span>
              <div>
                <span className={styles.sectionLabel}>La ejecución</span>
                <h2>Qué hice</h2>
                <ul className={styles.workGrid}>
                  {item.work.map((point, index) => (
                    <li key={point}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.evidence} aria-labelledby="evidencia">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Material del proyecto</span>
              <h2 id="evidencia">Proceso y evidencia</h2>
              <p>Las piezas y capturas que respaldan el trabajo presentado en este caso.</p>
            </div>

            <div className={styles.mediaGrid}>
              {item.video && (
                <figure className={`${styles.mediaCard} ${styles.videoCard}`}>
                  <div className={styles.videoFrame}>
                    <span className={styles.videoBadge}><Play size={14} fill="currentColor" /> Pieza final</span>
                    <video src={item.video} poster={item.poster} controls preload="metadata" playsInline />
                  </div>
                  <figcaption>{item.videoLabel}</figcaption>
                </figure>
              )}

              <figure className={styles.mediaCard}>
                <img src={item.cover} alt={item.coverAlt} width={item.coverWidth} height={item.coverHeight} loading="lazy" />
                <figcaption>{item.source}</figcaption>
              </figure>

              {item.gallery?.map((media) => (
                <figure className={styles.mediaCard} key={media.src}>
                  <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" />
                  <figcaption>{media.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.takeaways}>
          <div className={styles.narrow}>
            <span className={styles.sectionLabel}>Lectura del caso</span>
            <h2>Qué demuestra este trabajo</h2>
            <div className={styles.takeawayGrid}>
              {item.takeaways.map((point, index) => (
                <div className={styles.takeaway} key={point}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.questions} aria-labelledby="preguntas">
          <div className={styles.narrow}>
            <span className={styles.sectionLabel}>En pocas palabras</span>
            <h2 id="preguntas">Preguntas sobre el caso</h2>
            <div className={styles.questionList}>
              {item.questions.map(({ question, answer }) => (
                <div className={styles.question} key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.narrow}>
            <div className={styles.ctaCard}>
              <span className={styles.sectionLabel}>Tu proyecto</span>
              <h2>¿Necesitás trabajar {item.serviceLabel.toLowerCase()} para tu marca?</h2>
              <p>Contame qué querés conseguir y preparo la conversación con la información necesaria.</p>
              <div className={styles.ctaActions}>
                <Link to="/servicios#consulta" className={styles.primaryButton}>
                  Contame sobre tu marca <ArrowRight size={18} />
                </Link>
                <Link to={item.servicePath} className={styles.secondaryButton}>
                  Ver el servicio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.related}>
          <div className={styles.container}>
            <div className={styles.relatedHeader}>
              <div>
                <span className={styles.sectionLabel}>Más evidencia</span>
                <h2>Otros casos</h2>
              </div>
              <Link to="/portafolio" className={styles.allCases}>
                Ver todo el portafolio <ArrowRight size={17} />
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((entry) => (
                <Link className={styles.relatedCard} to={`/casos/${entry.slug}`} key={entry.slug}>
                  <img src={entry.cover} alt="" loading="lazy" />
                  <div>
                    <span>{entry.client}</span>
                    <h3>{entry.shortTitle}</h3>
                    <span className={styles.readMore}>Leer el caso <ArrowRight size={16} /></span>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/portafolio" className={styles.backLink}>
              <ArrowLeft size={17} /> Volver al portafolio
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
