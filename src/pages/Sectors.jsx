import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SectorLinks from '../components/SectorLinks'
import styles from './SalonServices.module.css'

export default function Sectors() {
  return <>
    <SEO title="Sectores y proyectos de marketing y diseño web" description="Explorá los trabajos de Genesis Leal en peluquerías, software, clínicas dentales, empresas B2B, agencias y marca personal. Servicios según cada proyecto." path="/sectores" />
    <header className={`${styles.page} ${styles.hubHero}`}><Link to="/servicios" className={styles.back}>Servicios de Genesis Leal</Link><span className={styles.badge}>Sectores y proyectos</span><h1>Tu negocio, con un trabajo pensado para su contexto.</h1><p className={styles.lead}>Contenido, publicidad, automatización y diseño web. Cada apartado reúne proyectos de mi portafolio y explica el alcance que podemos trabajar.</p></header>
    <SectorLinks />
    <section className={styles.page}><p className={styles.eyebrow}>Más de mi trayectoria</p><h2>Experiencia en otras áreas</h2><div className={styles.workGrid}>
      <div className={styles.workCard}><h3>Empleabilidad y desarrollo profesional</h3><p>Gestión de comunidad y contenido en Rise Job Hunting México, entre 2024 y 2025. La experiencia está descrita en mi trayectoria.</p><Link to="/experiencia" className={styles.textLink}>Ver experiencia</Link></div>
      <div className={styles.workCard}><h3>Inmobiliarias</h3><p>Participación en proyectos de marketing y campañas inmobiliarias durante mi trabajo en Enigma Developers SAC.</p><Link to="/experiencia" className={styles.textLink}>Ver trayectoria</Link></div>
      <div className={styles.workCard}><h3>Branding y diseño gráfico</h3><p>Experiencia como diseñadora gráfica y community manager en Enigma Developers SAC, de 2020 a 2024.</p><Link to="/experiencia" className={styles.textLink}>Conocer mi trabajo</Link></div>
    </div></section>
  </>
}
