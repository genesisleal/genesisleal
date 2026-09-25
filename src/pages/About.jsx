import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Award, BarChart3, GraduationCap, Lightbulb, MessageCircle, Target } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'
import SEO from '../components/SEO'

import genesisProfile from '../assets/images/hero/genesis-profile.jpg'

const principles = [
  { number: '01', icon: Target, title: 'Estrategia antes que contenido', description: 'Cada acción parte de un objetivo claro y de entender a quién queremos llegar.' },
  { number: '02', icon: Lightbulb, title: 'Creatividad con propósito', description: 'Desarrollo ideas que reflejan la identidad de cada marca y conectan con su audiencia.' },
  { number: '03', icon: BarChart3, title: 'Decisiones basadas en resultados', description: 'Mido el desempeño de contenidos y campañas para ajustar lo que haga falta.' },
]

const strengths = [
  'Más de cinco años trabajando con marcas B2C',
  'Experiencia con equipos de Argentina y Latinoamérica',
  'Redes sociales, Meta Ads, contenido y automatización',
  'Seguimiento cercano en cada etapa del proyecto',
]

const education = [
  {
    degree: 'Licenciada en Publicidad y Mercadeo',
    institution: 'Universidad Católica del Táchira (UCAT) — San Cristóbal, Venezuela',
    period: '2017 - 2022',
  },
  {
    degree: 'Bachiller en Ciencias',
    institution: 'UECLA - U.E. Colegio Los Andes',
    period: '2011 - 2016',
  },
]

const certifications = [
  'Social Media Marketing y Community Management - Platzi',
  'Escuela de Diseño Gráfico y Arte Digital - Platzi',
  'Escuela de Marketing Digital - Platzi',
]

export default function About() {
  const imageRef = useRef(null)
  const [imageHover, setImageHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })
  const scale = useSpring(imageHover ? 1.05 : 1, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setImageHover(false)
  }

  return (
    <>
      <SEO
        title="Sobre Genesis Leal — Community Manager Buenos Aires"
        description="Conocé el enfoque, la formación y la manera de trabajar de Genesis Leal, Community Manager y Social Media Strategist en Buenos Aires."
        path="/sobre-mi"
      />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.preTitle}>Sobre Mí</span>
              <h1 className={styles.heroTitle}>Hola, soy <span>Genesis Leal.</span></h1>
              <p className={styles.heroLead}>
                Ayudo a marcas B2C a crecer con contenido, publicidad digital y estrategias enfocadas en sus objetivos.
              </p>
              <p className={styles.heroText}>
                Soy Community Manager y Social Media Strategist. Me gusta combinar ideas creativas con análisis para que cada acción tenga un sentido dentro del negocio.
              </p>
              <div className={styles.heroActions}>
                <Link to="/experiencia" className={styles.primaryLink}>Ver mi experiencia <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link to="/servicios" className={styles.textLink}>Hablemos de tu marca</Link>
              </div>
            </motion.div>
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                ref={imageRef}
                className={styles.imageWrapper}
                style={{
                  rotateX,
                  rotateY,
                  scale,
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={handleMouseLeave}
                data-cursor-hover
              >
                <img src={genesisProfile} alt="Genesis Leal, Community Manager en Buenos Aires especializada en redes sociales y Meta Ads" />
                <div className={styles.imageShine} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <div className={styles.approachIntro}>
            <div>
              <span className={styles.sectionLabel}>Mi enfoque</span>
              <h2 className={styles.sectionTitle}>Una presencia digital con dirección</h2>
            </div>
            <p>
              Para mí, una buena estrategia empieza por escuchar a la marca, entender a sus clientes y definir qué queremos lograr. Desde ahí construyo contenido y campañas que puedan mejorar con cada aprendizaje.
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map(({ number, icon: Icon, title, description }, index) => (
              <motion.article key={number} className={styles.principleCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className={styles.principleTop}><Icon size={26} strokeWidth={1.8} aria-hidden="true" /><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.strengths}>
        <div className="container">
          <div className={styles.strengthsGrid}>
            <div>
              <span className={styles.sectionLabel}>Lo que aporto</span>
              <h2 className={styles.sectionTitle}>Creatividad y criterio para cada proyecto</h2>
            </div>
            <ul className={styles.strengthsList}>
              {strengths.map(strength => <li key={strength}>{strength}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.education}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Estudios</span>
            <h2 className={styles.sectionTitle}>Formación Académica</h2>
          </div>

          <div className={styles.educationGrid}>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={styles.educationCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GraduationCap size={24} className={styles.educationIcon} />
                <div className={styles.educationInfo}>
                  <h3 className={styles.educationDegree}>{item.degree}</h3>
                  <span className={styles.educationInstitution}>{item.institution}</span>
                  <span className={styles.educationPeriod}>{item.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.certifications}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Formación</span>
            <h2 className={styles.sectionTitle}>Certificaciones</h2>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Award size={24} className={styles.certIcon} />
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextStep}>
        <div className="container">
          <div className={styles.nextStepCard}>
            <span className={styles.sectionLabel}>Sigamos conversando</span>
            <h2>Conocé mi trabajo o contame sobre tu marca</h2>
            <p>Podés explorar las marcas con las que trabajé o escribirme para pensar juntas el siguiente paso.</p>
            <div className={styles.nextStepActions}>
              <Link to="/experiencia" className={styles.primaryLink}>Ver mi experiencia profesional <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href="https://wa.me/5491125490503" target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}><MessageCircle size={18} aria-hidden="true" /> Hablemos por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
