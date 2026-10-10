import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { hiringGuidePath } from '../components/ServiceLinks'
import styles from './HiringGuide.module.css'

const title = 'Cómo contratar una community manager y pedir presupuesto'
const description = 'Qué incluye la gestión de redes sociales, cómo elegir entre contenido, Meta Ads y automatización, y qué información preparar para pedir una propuesta.'
const url = `https://genesisleal.com${hiringGuidePath}/`
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: title, description, url, mainEntityOfPage: url,
      author: { '@id': 'https://genesisleal.com/#person' },
      publisher: { '@id': 'https://genesisleal.com/#person' },
      datePublished: '2026-10-10', dateModified: '2026-10-10', inLanguage: 'es-AR' },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://genesisleal.com/' },
      { '@type': 'ListItem', position: 2, name: 'Contratación y presupuesto', item: url },
    ] },
  ],
}
const choices = [
  { need: 'Quiero ordenar mis redes y publicar con una estrategia', service: 'Gestión de redes sociales', path: '/servicios/gestion-redes-sociales', text: 'Para definir temas, formatos, planificación y seguimiento. El alcance de la gestión y los entregables se acuerdan en la propuesta.' },
  { need: 'Tengo una estrategia, pero necesito producir las piezas', service: 'Creación de contenido', path: '/servicios/creacion-de-contenido', text: 'Para trabajar conceptos, guiones, reels, historias o carruseles. Conviene definir quién aporta el material y qué formatos hay que producir.' },
  { need: 'Quiero promocionar una oferta en Instagram o Facebook', service: 'Meta Ads', path: '/servicios/meta-ads', text: 'Para planificar, configurar y seguir campañas. La inversión en anuncios se define por separado de los honorarios de gestión.' },
  { need: 'Recibo consultas repetidas y quiero organizar las respuestas', service: 'Automatización y chatbots', path: '/servicios/automatizacion-chatbots', text: 'Para diseñar flujos de respuesta y orientar a cada persona al siguiente paso. Primero revisamos los canales, las preguntas y qué debe atender una persona.' },
]

export default function HiringGuide() {
  return (
    <>
      <SEO title={title} description={description} path={hiringGuidePath} type="article" structuredData={structuredData} />
      <article className={styles.page}>
        <header className={styles.hero}>
          <Link to="/servicios" className={styles.link}>Servicios de Genesis Leal</Link>
          <p className={styles.eyebrow}>Guía para marcas</p>
          <h1>{title}</h1>
          <p className={styles.lead}>Una propuesta útil empieza por lo que tu marca necesita. Antes de comparar precios, conviene definir qué trabajo querés delegar, en qué canales y con qué objetivo.</p>
          <p className={styles.byline}>Por <Link to="/sobre-mi">Genesis Leal</Link> · <time dateTime="2026-10-10">10 de octubre de 2026</time></p>
        </header>
        <nav className={styles.contents} aria-label="Contenido de la guía">
          <a href="#servicio">Elegir el servicio</a><a href="#alcance">Definir el alcance</a><a href="#presupuesto">Preparar el presupuesto</a><a href="#brief">Qué contarme</a><a href="#resultados">Evaluar el trabajo</a>
        </nav>
        <section id="servicio" className={styles.section}>
          <h2>¿Necesitás gestión de redes, contenido o publicidad?</h2>
          <p>Estos trabajos pueden combinarse, pero resuelven necesidades distintas. Este punto de partida te ayuda a elegir.</p>
          <div className={styles.choices}>{choices.map(choice => (
            <div className={styles.choice} key={choice.path}>
              <h3>{choice.need}</h3><p>{choice.text}</p>
              <Link to={choice.path}>{choice.service} <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          ))}</div>
        </section>
        <section id="alcance" className={styles.section}>
          <h2>¿Qué incluye una community manager?</h2>
          <p>En mi servicio de gestión de redes trabajo la estrategia, la planificación editorial, el mensaje de cada pieza y el seguimiento del rendimiento. Para tu marca definimos las redes, la frecuencia y los formatos antes de empezar.</p>
          <p>Al comparar propuestas, comprobá cómo se resuelven la producción de fotos y videos, la publicación, la atención de mensajes, las revisiones y los informes. Cada tarea necesita un alcance concreto; no alcanza con una cantidad de posteos.</p>
          <Link className={styles.link} to="/servicios/gestion-redes-sociales">Conocer mi servicio de gestión de redes sociales</Link>
        </section>
        <section id="presupuesto" className={styles.section}>
          <h2>¿Cuánto cuesta y qué cambia el presupuesto?</h2>
          <p>Preparo la propuesta según el trabajo que necesita tu marca. Para cotizar revisamos:</p>
          <ul><li>Las redes y cuentas que hay que gestionar.</li><li>La cantidad y el tipo de piezas: historias, carruseles, reels o anuncios.</li><li>El material disponible y la producción que hace falta.</li><li>El alcance de publicación, coordinación, revisiones y seguimiento.</li><li>Las campañas o automatizaciones que querés sumar.</li></ul>
          <p>Para Meta Ads, separá dos conceptos: los honorarios por gestionar la campaña y la inversión publicitaria que se paga a la plataforma. Si el proyecto necesita herramientas o suscripciones, conviene dejar sus costos y responsables claros en la propuesta.</p>
          <p>Con esa información podemos comparar opciones con el mismo alcance y decidir por dónde empezar.</p>
        </section>
        <section id="brief" className={styles.section}>
          <h2>Qué información preparar para pedir una propuesta</h2>
          <ol><li>Qué vende tu marca y a quién.</li><li>Los enlaces a sus redes y su sitio, si tiene.</li><li>Qué querés mejorar: presencia, consultas, contenido o atención.</li><li>Qué material tenés y quién puede grabar o aportar información.</li><li>Qué tareas querés delegar y cuándo necesitás empezar.</li><li>Si querés publicidad, el presupuesto de pauta que tenés previsto y quién atenderá las consultas.</li></ol>
          <p>No hace falta tener todo resuelto. Si todavía no sabés qué servicio elegir, contame el objetivo y el punto de partida.</p>
        </section>
        <section id="resultados" className={styles.section}>
          <h2>Cómo evaluar el trabajo</h2>
          <p>Definí qué acción importa para tu negocio. Para contenido podemos revisar visualizaciones e interacciones; para campañas de mensajes, conversaciones y costo por conversación. Después contrastamos esas señales con las consultas que recibís y cómo las atendés.</p>
          <p>Podés ver ejemplos documentados de mi trabajo:</p>
          <ul><li><Link to="/casos/meta-ads-temuco-1412-conversaciones">Una campaña de Meta Ads con 1.412 conversaciones iniciadas</Link></li><li><Link to="/casos/carrusel-instagram-victorino-stylo">Un carrusel de Instagram con más de 178 mil visualizaciones</Link></li></ul>
        </section>
        <section className={styles.cta}>
          <h2>Contame qué necesita tu marca</h2><p>Trabajo desde Buenos Aires con atención online. Podemos empezar por tus objetivos y definir una propuesta con entregables claros.</p>
          <Link to="/servicios#consulta">Pedir una propuesta <ArrowRight size={18} aria-hidden="true" /></Link>
        </section>
      </article>
    </>
  )
}
