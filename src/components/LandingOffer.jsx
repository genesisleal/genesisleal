import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Check } from 'lucide-react'
import styles from './LandingOffer.module.css'

export default function LandingOffer() {
  return <section className={styles.offer} aria-labelledby="landing-offer-title">
    <div className={styles.copy}><span className={styles.badge}><Globe size={16} aria-hidden="true" /> Diseño web</span><h2 id="landing-offer-title">Tu oferta, en una landing page.</h2><p>Una sola página para presentar tu negocio y facilitar el contacto, con un año de hosting incluido.</p><Link to="/servicios/diseno-web" className={styles.details}>Conocer el servicio de diseño web <ArrowRight size={16} aria-hidden="true" /></Link></div>
    <div className={styles.priceCard}><p className={styles.price}><span>USD</span> <strong>200</strong></p><p className={styles.payment}>Pago único por una landing de una página</p><p className={styles.included}><Check size={18} aria-hidden="true" /> Un año de hosting incluido</p><p className={styles.terms}>El dominio se paga aparte. La renovación del hosting después del primer año también se paga aparte.</p><a className={styles.button} href={`https://wa.me/5491125490503?text=${encodeURIComponent('Hola Genesis, quiero consultar por la landing page de USD 200, pago único, con un año de hosting incluido.')}`} target="_blank" rel="noopener noreferrer">Consultar por mi landing <ArrowRight size={18} aria-hidden="true" /></a></div>
  </section>
}
