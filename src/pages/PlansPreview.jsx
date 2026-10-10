import { Check, ArrowRight, Sparkles, TrendingUp, Info, Layers, Video, CalendarDays, CreditCard, MessageCircle, CheckCheck } from 'lucide-react'
import LandingOffer from '../components/LandingOffer'
import SEO from '../components/SEO'
import styles from './PlansPreview.module.css'

const plans = [
  { name: 'Pro', price: 350, intro: 'Para darle dirección y constancia a las redes de tu marca.', platforms: 'Instagram, Facebook y TikTok', posts: '6 posteos: 3 placas o carruseles y 3 reels', stories: '8 secuencias de stories mensuales', ads: '4 piezas publicitarias adaptadas de los posteos' },
  { name: 'Premium', price: 500, intro: 'Para trabajar más contenido y sumar presencia en YouTube.', platforms: 'Instagram, Facebook, TikTok y YouTube Shorts', posts: '10 posteos: 4 placas o carruseles y 6 reels', stories: '12 secuencias de stories mensuales', ads: '6 piezas publicitarias adaptadas de los posteos' },
]

export default function PlansPreview() {
  return <>
    <SEO title="Planes de redes sociales y landing pages" path="/planes" description="Planes de gestión de redes sociales y Meta Ads para una marca: Pro USD 350 y Premium USD 500 por mes. Landing de USD 200, pago único, con un año de hosting." />
    <div className={styles.marketplace}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}><Sparkles size={16} aria-hidden="true" /> Redes sociales y publicidad</span>
          <h1 className={styles.title}>Elegí el plan para<br /><span>tu marca</span></h1>
          <p className={styles.subtitle}>Contenido, planificación y anuncios en Meta. Dos opciones para acompañar tu presencia digital.</p>
        </div>
      </header>
      <div className={styles.catalog}>
        <section className={styles.servicesGrid} aria-label="Comparar planes">
          {plans.map((plan, index) => <article className={`${styles.serviceCard} ${index ? styles.gold : styles.purple}`} key={plan.name}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{index ? <Sparkles size={24} aria-hidden="true" /> : <TrendingUp size={24} aria-hidden="true" />}</div>
              <span className={styles.categoryTag}>Redes sociales</span>
            </div>
            <h2 className={styles.serviceName}>Plan {plan.name}</h2>
            <p className={styles.serviceDescription}>{plan.intro}</p>
            <div className={styles.priceSection}>
              <p className={styles.price}><span className={styles.currency}>USD</span><span className={styles.amount}>{plan.price}</span><span className={styles.period}>/mes</span></p>
              <p className={styles.priceNote}>Precio fijo por una marca</p>
            </div>
            <ul className={styles.featureList}>{[plan.platforms, plan.posts, plan.stories, 'Optimización de perfiles', 'Planificación mensual con aprobación previa', 'Dos rondas de cambios', 'Textos y programación de contenido', `Gestión de Meta Ads: ${plan.ads.toLowerCase()}`, 'Reporte mensual de publicidad', ...(index ? ['Respuesta automática inicial de regalo'] : [])].map(item => <li className={styles.featureItem} key={item}><Check size={16} className={styles.checkIcon} aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <a className={styles.ctaButton} href={`https://wa.me/5491125490503?text=${encodeURIComponent(`Hola Genesis, quiero consultar por el Plan ${plan.name} de USD ${plan.price} mensuales para mi marca.`)}`} target="_blank" rel="noopener noreferrer">Consultar por {plan.name} <ArrowRight size={18} aria-hidden="true" /></a>
          </article>)}
        </section>
        <p className={styles.adsNote}><Info size={17} aria-hidden="true" /><span>La inversión en anuncios se paga aparte. La calculamos según el nicho, los objetivos y el mercado de tu marca.</span></p>
        <section className={styles.conditions} aria-labelledby="working-title">
          <header className={styles.workingHeader}><span>Antes de empezar</span><h2 id="working-title">Cómo trabajamos en redes sociales</h2><p>Todo claro desde el primer día.</p></header>
          <div className={styles.workingGrid}>
            {[
              { icon: Layers, title: 'Un contenido, varios canales', text: 'Los 6 o 10 posteos son el total mensual compartido entre plataformas. Los anuncios se adaptan de esos mismos contenidos.' },
              { icon: Video, title: 'Vos aportás el material', text: 'Editamos tus videos. En Premium, los mismos reels se publican como Shorts, sin preparación aparte ni videos largos.' },
              { icon: CheckCheck, title: 'Lo revisamos juntos', text: 'El calendario se aprueba antes de publicar e incluye dos rondas de cambios. Cada secuencia cuenta como una story.' },
              { icon: CalendarDays, title: 'Un inicio planificado', text: 'Preparación mínima de 15 días y fecha de lanzamiento acordada. Recomendamos trabajar al menos tres meses.' },
              { icon: CreditCard, title: 'Pagos en dos pasos', text: 'Primer mes: 50% al iniciar y 50% al finalizar. Luego, al inicio de cada mes, del 1 al 8.' },
              { icon: MessageCircle, title: 'Atención a tu medida', text: 'Responder mensajes y comentarios se cotiza aparte. Premium incluye de regalo la respuesta automática inicial.' },
            ].map(({ icon: Icon, title, text }) => <div className={styles.workingItem} key={title}><div className={styles.workingIcon}><Icon size={21} aria-hidden="true" /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </section>
        <LandingOffer />
      </div>
    </div>
  </>
}
