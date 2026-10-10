import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import SectorLinks from '../components/SectorLinks'
import { sectors } from '../data/sectors'
import { servicePages } from '../data/services'
import styles from './SalonServices.module.css'

export default function SectorPage() {
  const { slug } = useParams()
  const sector = sectors.find(item => item.slug === slug)
  if (!sector) return <Navigate to="/404" replace />
  const path = `/sectores/${slug}`
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: sector.heading, description: sector.metaDescription, url: `https://genesisleal.com${path}/`, provider: { '@id': 'https://genesisleal.com/#person' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Sectores', item: 'https://genesisleal.com/sectores/' }, { '@type': 'ListItem', position: 2, name: sector.label, item: `https://genesisleal.com${path}/` }] },
  ] }
  return <>
    <SEO title={sector.heading} description={sector.metaDescription} path={path} structuredData={structuredData} />
    <article className={styles.page}>
      <header className={styles.hero}>
        <Link to="/sectores" className={styles.back}>Todos los sectores</Link>
        <span className={styles.badge}>{sector.label}</span>
        <h1>{sector.heading}</h1>
        <p className={styles.lead}>{sector.description}</p>
        <p className={styles.location}>Desde Buenos Aires, con atención online.</p>
        <Link to="/servicios#consulta" className={styles.button}>Contame sobre tu proyecto <ArrowRight size={18} aria-hidden="true" /></Link>
      </header>
      <section className={styles.section}><p className={styles.eyebrow}>Un alcance para tu proyecto</p><h2>Qué podemos trabajar</h2>
        <div className={styles.workGrid}>{sector.work.map(([title,text]) => <div className={styles.workCard} key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
      <section className={styles.section}><p className={styles.eyebrow}>Experiencia relacionada</p><h2>Proyectos y trabajo realizado</h2>
        <div className={styles.cases}>{sector.projects.map(project => <Link className={styles.case} key={project.title} to={project.link}>
          {project.image && <img src={project.image} alt={project.title} loading="lazy" decoding="async" />}
          <div><p className={styles.eyebrow}>{project.client}</p><h3>{project.title}</h3><p>{project.text}</p><span>Ver el trabajo <ArrowRight size={16} aria-hidden="true" /></span></div>
        </Link>)}</div>
      </section>
      <section className={styles.section}><p className={styles.eyebrow}>Servicios relacionados</p><h2>Elegí qué necesita tu marca</h2>
        <div className={styles.workGrid}>{servicePages.filter(service => sector.services.includes(service.key)).map(service => <Link to={service.path} className={styles.case} key={service.key}><div><h3>{service.title}</h3><p>{service.shortDescription}</p><span>Conocer el alcance <ArrowRight size={16} aria-hidden="true" /></span></div></Link>)}</div>
      </section>
      <section className={styles.plans}><div><p className={styles.eyebrow}>Presupuesto</p><h2>Una propuesta según el alcance</h2><p>Acordamos los entregables, las etapas y los tiempos antes de empezar. El diseño web y los proyectos puntuales se cotizan según sus necesidades.</p></div><div><p>Si buscás gestión mensual de redes y Meta Ads para una marca, podés consultar Pro de USD 350 y Premium de USD 500. La inversión publicitaria se paga aparte.</p><Link to="/planes" className={styles.textLink}>Ver planes mensuales <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
      <section className={styles.section}><p className={styles.eyebrow}>Antes de empezar</p><h2>Preguntas frecuentes</h2><div className={styles.faq}>{sector.questions.map(([question,answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</div></section>
      <section className={styles.cta}><h2>Conversemos sobre tu proyecto</h2><p>Contame qué ofrecés, qué material tenés y qué necesitás resolver. Con esa información definimos el servicio y preparo una propuesta.</p><Link to="/servicios#consulta" className={styles.button}>Pedir una propuesta <ArrowRight size={18} aria-hidden="true" /></Link></section>
    </article>
    <SectorLinks />
  </>
}
