import { Link } from 'react-router-dom'
import { ArrowRight, Scissors, Video, CalendarDays, Target } from 'lucide-react'
import SectorLinks from '../components/SectorLinks'
import SEO from '../components/SEO'
import styles from './SalonServices.module.css'
import campaignImage from '../assets/images/optimized/resultado-metaads-hernandez-960.jpg'
import reelImage from '../assets/images/optimized/reel-viral-poster-480.jpg'

const path = '/servicios/redes-sociales-peluquerias-barberias'
const description = 'Gestión de redes sociales y publicidad en Meta para peluquerías y barberías. Casos documentados, planes desde USD 350 por mes y atención online.'
const questions = [
  ['¿Quién graba los videos?', 'Vos o tu equipo aportan las fotos y videos del negocio. Edito los reels con ese material y organizamos qué contenido necesitamos para el calendario.'],
  ['¿Qué incluyen los planes?', 'Pro incluye 6 posteos y 8 secuencias de stories al mes; Premium, 10 posteos y 12 secuencias. Ambos incluyen planificación, textos, programación, dos rondas de cambios y gestión de Meta Ads. El total de posteos se comparte entre plataformas.'],
  ['¿La inversión en anuncios está incluida?', 'Se paga aparte. La calculamos según los servicios que querés promocionar, los objetivos, la ubicación y el mercado de tu negocio. Las 4 piezas publicitarias de Pro y las 6 de Premium se adaptan de los posteos incluidos.'],
  ['¿Quién responde las consultas y confirma los turnos?', 'Tu negocio se ocupa de responder y confirmar los turnos. La gestión de mensajes y comentarios se cotiza aparte. Premium incluye la configuración de respuesta automática inicial.'],
  ['¿Cuándo podemos empezar?', 'Necesitamos al menos 15 días de preparación y acordamos la fecha de lanzamiento. Recomendamos trabajar durante tres meses para observar el rendimiento y ajustar el plan.'],
  ['¿Trabajás solo en Buenos Aires?', 'Trabajo desde Buenos Aires con atención online. Podemos coordinar el contenido y la publicidad a distancia, como en los casos publicados de Temuco, Chile.'],
]
const structuredData = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Service', name: 'Gestión de redes sociales para peluquerías y barberías', description, url: `https://genesisleal.com${path}/`, provider: { '@id': 'https://genesisleal.com/#person' }, serviceType: 'Gestión de redes sociales y Meta Ads' },
  { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://genesisleal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://genesisleal.com/servicios/' },
    { '@type': 'ListItem', position: 3, name: 'Peluquerías y barberías', item: `https://genesisleal.com${path}/` },
  ] },
] }

export default function SalonServices() {
  return <>
    <SEO title="Redes sociales para peluquerías y barberías" description={description} path={path} structuredData={structuredData} />
    <article className={styles.page}>
      <header className={styles.hero}>
        <Link to="/servicios" className={styles.back}>Servicios de Genesis Leal</Link>
        <span className={styles.badge}><Scissors size={16} aria-hidden="true" /> Peluquerías y barberías</span>
        <h1>Redes sociales para<br /><span>peluquerías y barberías.</span></h1>
        <p className={styles.lead}>Gestión de redes sociales y publicidad para peluquerías y barberías. Mostrá tus servicios, compartí el trabajo de tu equipo y facilitá las consultas con contenido y anuncios en Meta.</p>
        <p className={styles.location}>Desde Buenos Aires, con atención online.</p>
        <Link className={styles.button} to="/servicios#consulta">Contame sobre tu negocio <ArrowRight size={18} aria-hidden="true" /></Link>
      </header>
      <section className={styles.section}>
        <p className={styles.eyebrow}>Contenido con dirección</p><h2>Qué podemos trabajar para tu negocio</h2>
        <div className={styles.workGrid}>{[
          { icon: Video, title: 'Mostrar lo que hacés', text: 'Reels, carruseles e historias con cortes, cambios de look, servicios y el trabajo del equipo. Editamos el material que aporta tu negocio.' },
          { icon: CalendarDays, title: 'Ordenar la comunicación', text: 'Un calendario aprobado antes de publicar, textos claros y contenido distribuido entre tus canales.' },
          { icon: Target, title: 'Promocionar tus servicios', text: 'Campañas en Instagram y Facebook con un objetivo definido y seguimiento de las conversaciones registradas por Meta.' },
        ].map(({icon: Icon, title, text}) => <div className={styles.workCard} key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>Experiencia documentada</p><h2>Trabajo real en peluquerías y barberías</h2>
        <div className={styles.cases}>
          <Link className={styles.case} to="/casos/meta-ads-temuco-1412-conversaciones"><img src={campaignImage} width="960" height="477" loading="lazy" alt="Captura de resultados de Meta Ads para Peluquería Hernández" /><div><p className={styles.eyebrow}>Peluquería Hernández · Temuco, Chile</p><h3>1.412 conversaciones iniciadas</h3><p>Reel de posicionamiento y campaña de mensajes. Resultado registrado por Meta entre el 11 de junio y el 15 de agosto de 2025.</p><span>Ver campaña y evidencia <ArrowRight size={16} aria-hidden="true" /></span></div></Link>
          <Link className={styles.case} to="/casos/reel-viral-barberia-crecimiento-organico"><img className={styles.reelImage} src={reelImage} width="480" height="853" loading="lazy" alt="Reel creado para una barbería" /><div><p className={styles.eyebrow}>Contenido para barbería</p><h3>89.465 visualizaciones en un reel</h3><p>Guion, dirección, edición y análisis de una pieza que sumó 1.802 seguidores nuevos, según las estadísticas publicadas en el caso.</p><span>Ver proceso y estadísticas <ArrowRight size={16} aria-hidden="true" /></span></div></Link>
          <Link className={styles.case} to="/casos/carrusel-instagram-victorino-stylo"><div><p className={styles.eyebrow}>Victorino Stylo · Puerto Rico</p><h3>Un carrusel con más de 178 mil visualizaciones</h3><p>Contenido de posicionamiento para servicios de alto ticket. El caso reúne el diseño, las estadísticas de Instagram y el trabajo realizado.</p><span>Ver el carrusel y sus estadísticas <ArrowRight size={16} aria-hidden="true" /></span></div></Link>
        </div>
        <p className={styles.caption}>Son resultados de proyectos concretos. Las conversaciones registradas no equivalen a turnos o ventas confirmadas.</p>
        <Link className={styles.textLink} to="/casos/meta-ads-reservas-peluqueria-temuco">Ver otra campaña con 268 conversaciones sobre reservas <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>
      <section className={styles.plans}>
        <div><p className={styles.eyebrow}>Planes por una marca</p><h2>Elegí tu punto de partida</h2><p>Contenido y gestión de anuncios en Meta. La inversión publicitaria se calcula para tu negocio y se paga aparte.</p><Link className={styles.textLink} to="/planes">Comparar todos los entregables y condiciones <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className={styles.prices}><div><h3>Pro</h3><p><strong>USD 350</strong> / mes</p><span>6 posteos · 8 secuencias de stories</span></div><div><h3>Premium</h3><p><strong>USD 500</strong> / mes</p><span>10 posteos · 12 secuencias de stories</span></div></div>
      </section>
      <section className={styles.section}><p className={styles.eyebrow}>Antes de empezar</p><h2>Preguntas frecuentes</h2><div className={styles.faq}>{questions.map(([question,answer])=><div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</div></section>
      <section className={styles.cta}><h2>Contame sobre tu peluquería o barbería</h2><p>Qué servicios ofrecés, dónde estás y qué querés mejorar. Con eso revisamos qué plan se adapta al trabajo que necesitás.</p><Link className={styles.button} to="/servicios#consulta">Pedir una propuesta <ArrowRight size={18} aria-hidden="true" /></Link></section>
    </article>
    <SectorLinks />
  </>
}
