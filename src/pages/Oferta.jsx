import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Check, ArrowRight, Star } from 'lucide-react'
import SEO from '../components/SEO'
import styles from './Oferta.module.css'

import genesisProfile from '../assets/images/hero/genesis-profile.png'

import logoLegourmet from '../assets/logos/clients/legourmet.png'
import logoDulcemente from '../assets/logos/clients/dulcemente-carol.png'
import logoIndexa from '../assets/logos/clients/indexa.png'
import logoBlueberry from '../assets/logos/clients/blueberry.png'
import logoChickenGuys from '../assets/logos/clients/chicken-guys.png'
import logoEnigma from '../assets/logos/clients/enigma.png'

const WA_MESSAGE = 'Hola Genesis 👋 Vi la oferta del plan Profesional de gestión de redes y quiero más info.'
const WA_URL = `https://wa.me/5491138851664?text=${encodeURIComponent(WA_MESSAGE)}`

const clientLogos = [
  { src: logoLegourmet, alt: 'Le Gourmet' },
  { src: logoChickenGuys, alt: 'Chicken Guys' },
  { src: logoDulcemente, alt: 'Dulcemente Carol' },
  { src: logoBlueberry, alt: 'Blueberry' },
  { src: logoIndexa, alt: 'Indexa' },
  { src: logoEnigma, alt: 'Enigma Developers' }
]

const stats = [
  { value: '+5', label: 'años gestionando marcas B2C' },
  { value: '+150', label: 'historias producidas al mes' },
  { value: 'USD 1K–3K', label: 'ventas high-ticket desde Instagram' }
]

const planFeatures = [
  '3 redes sociales: Instagram + Facebook + 1 más',
  '10 publicaciones/mes: 3 reels + 4 carruseles + 3 posts',
  '10 historias/mes diseñadas e interactivas',
  'El cliente provee el material de imágenes y videos a editar',
  '2 campañas de Meta Ads al mes con configuración avanzada',
  'Calendario editorial y copywriting estratégico',
  'Programación y publicación automática',
  'Automatización de DMs y comentarios en Meta Business',
  'Reporte mensual de métricas y análisis'
]

const testimonials = [
  {
    text: 'Logramos ventas de programas high ticket entre USD 1.000 y USD 3.000 únicamente desde Instagram. Su dominio de Meta Ads nos posicionó en el mercado mexicano.',
    company: 'Rise Job Hunting',
    location: 'México'
  },
  {
    text: 'Gestionó nuestras 6 cuentas de Instagram en 5 ciudades de Chile, con +150 historias y 24 campañas mensuales. Transformó nuestra presencia digital.',
    company: 'Sociedad Peluquería Hernández',
    location: 'Chile'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

function StatCounter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const parsed = value.match(/^(\D*)(\d+)(\D*)$/)
  const numeric = parsed ? Number(parsed[2]) : null
  const prefix = parsed ? parsed[1] : ''
  const suffix = parsed ? parsed[3] : ''
  const [display, setDisplay] = useState(parsed ? `${prefix}0${suffix}` : value)

  useEffect(() => {
    if (!inView || numeric === null) return
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${prefix}${Math.round(latest)}${suffix}`)
    })
    return () => controls.stop()
  }, [inView, numeric, prefix, suffix])

  return (
    <span ref={ref} className={styles.statValue}>
      {display}
    </span>
  )
}

function CtaButton({ children, block = false }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.cta} ${block ? styles.ctaBlock : ''}`}
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.4} className={styles.ctaArrow} />
    </a>
  )
}

export default function Oferta() {
  return (
    <>
      <SEO
        title="Gestión de Redes que vende | Genesis Leal"
        description="Plan Profesional de gestión de redes sociales: estrategia, contenido y Meta Ads para que tu Instagram te traiga clientes reales. Precio de lanzamiento."
        path="/oferta"
        noindex
      />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden />

          <motion.div
            className={styles.heroInner}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <div className={styles.heroCopy}>
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                Community Manager · Buenos Aires
              </motion.span>

              <motion.h1 className={styles.headline} variants={fadeUp}>
                Que tu Instagram <em>venda</em>, no que solo sume likes.
              </motion.h1>

              <motion.p className={styles.lede} variants={fadeUp}>
                Estrategia, contenido y Meta Ads para que tus redes te traigan
                clientes reales, sin que tengas que estar encima todos los días.
              </motion.p>

              <motion.div className={styles.heroCta} variants={fadeUp}>
                <CtaButton>Hablemos por WhatsApp</CtaButton>
                <span className={styles.heroNote}>
                  Respuesta el mismo día · Sin compromiso
                </span>
              </motion.div>

              <motion.ul className={styles.trust} variants={fadeUp}>
                <li>Marcas en Argentina, Chile, México y Perú</li>
                <li>Casos reales de venta high-ticket</li>
              </motion.ul>
            </div>

            <motion.div className={styles.heroMedia} variants={fadeUp}>
              <img src={genesisProfile} alt="Genesis Leal, Community Manager" />
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className={styles.proof}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.stats}>
            {stats.map((stat) => (
              <motion.div key={stat.label} className={styles.stat} variants={fadeUp}>
                <StatCounter value={stat.value} />
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.logos} variants={fadeUp}>
            {clientLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.problem}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>
            Postear por postear no genera ventas. Lo que vende es una
            <em> estrategia constante</em>: contenido con intención, anuncios
            bien configurados y una marca que se ve tan profesional como el
            servicio que das.
          </p>
        </motion.section>

        <motion.section
          className={styles.offer}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className={styles.sectionLabel} variants={fadeUp}>
            La oferta
          </motion.span>

          <motion.article className={styles.planCard} variants={fadeUp}>
            <span className={styles.popularBadge}>
              <Star size={13} strokeWidth={0} fill="currentColor" />
              El plan más elegido
            </span>

            <header className={styles.planHead}>
              <h2 className={styles.planName}>Plan Profesional</h2>
              <p className={styles.planSubtitle}>Para negocios en crecimiento</p>
            </header>

            <div className={styles.priceRow}>
              <span className={styles.priceOriginal}>$650.000</span>
              <div className={styles.priceMain}>
                <span className={styles.priceCurrency}>$</span>
                <span className={styles.priceAmount}>500.000</span>
                <span className={styles.pricePeriod}>ARS / mes</span>
              </div>
              <span className={styles.priceUsd}>~ USD 350 / mes</span>
              <span className={styles.launchBadge}>23% OFF · Precio de lanzamiento</span>
            </div>

            <div className={styles.planDivider} aria-hidden />

            <ul className={styles.planFeatures}>
              {planFeatures.map((feature) => (
                <li key={feature}>
                  <span className={styles.checkIcon}>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className={styles.bonus}>
              <strong>De regalo:</strong> paleta de colores + tipografías +
              optimización del perfil.
            </p>

            <CtaButton block>Quiero este plan</CtaButton>

            <p className={styles.finePrint}>
              Compromiso mínimo de 3 meses para ver resultados. La inversión
              publicitaria de Meta se paga aparte, directo a Meta. Precio de
              lanzamiento vigente sobre el valor regular de $650.000 ARS.
            </p>

            <p className={styles.finePrintAlert}>
              Si las redes sociales o la cuenta publicitaria todavía no están
              creadas, su creación y configuración se cobran aparte.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className={styles.voices}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((item) => (
            <motion.blockquote key={item.company} className={styles.quote} variants={fadeUp}>
              <p>“{item.text}”</p>
              <footer>
                <strong>{item.company}</strong>
                <span>{item.location}</span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.section>

        <motion.section
          className={styles.close}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className={styles.closeTitle} variants={fadeUp}>
            Tu próximo cliente está mirando tus redes <em>ahora mismo</em>.
          </motion.h2>
          <motion.p className={styles.closeText} variants={fadeUp}>
            Escribime y te digo en minutos cómo arrancamos. El precio de
            lanzamiento sigue vigente.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CtaButton>Escribirme por WhatsApp</CtaButton>
          </motion.div>
        </motion.section>

        <div className={styles.stickyBar}>
          <div className={styles.stickyInfo}>
            <strong>Plan Profesional</strong>
            <span>$500.000 ARS/mes · 23% OFF</span>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stickyCta}
          >
            <MessageCircle size={18} strokeWidth={2} />
            Lo quiero
          </a>
        </div>
      </div>
    </>
  )
}
