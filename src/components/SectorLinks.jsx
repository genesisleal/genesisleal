import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sectorCards } from '../data/sectors'
import sectorStyles from './SectorLinks.module.css'
import styles from './ServiceLinks.module.css'

export default function SectorLinks() {
  return <section className={styles.section} aria-labelledby="sectors-heading"><div className="container">
    <h2 id="sectors-heading">Experiencia para distintos tipos de negocio</h2>
    <p className={styles.intro}>Elegí tu sector para ver qué podemos trabajar y los proyectos relacionados.</p>
    <div className={`${styles.grid} ${sectorStyles.grid}`}>{sectorCards.map(sector => <Link key={sector.path} to={sector.path} className={styles.card}><h3>{sector.label}</h3><p>{sector.description}</p><span>Explorar el apartado <ArrowRight size={17} aria-hidden="true" /></span></Link>)}</div>
    <Link className={styles.guide} to="/sectores">Ver todos los sectores y la experiencia relacionada <ArrowRight size={17} aria-hidden="true" /></Link>
  </div></section>
}
