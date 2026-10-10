import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicePages } from '../data/services'
import styles from './ServiceLinks.module.css'

export const hiringGuidePath = '/guias/contratar-community-manager-presupuesto'

export default function ServiceLinks({ heading = 'Qué podemos trabajar para tu marca' }) {
  return (
    <section className={styles.section} aria-label={heading}>
      <div className="container">
        <h2>{heading}</h2>
        <p className={styles.intro}>Trabajo desde Buenos Aires con atención online. Elegí el servicio para conocer el alcance y ver ejemplos de mi trabajo.</p>
        <div className={styles.grid}>
          {servicePages.map(service => (
            <Link key={service.key} to={service.path} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <span>Ver el servicio <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
        <Link className={styles.guide} to={hiringGuidePath}>¿Qué servicio necesitás y cómo se prepara el presupuesto? <ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
