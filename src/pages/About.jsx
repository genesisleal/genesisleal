import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'
import { useRef, useState } from 'react'
import styles from './About.module.css'
import SEO from '../components/SEO'

import genesisProfile from '../assets/images/hero/genesis-profile.png'

const experience = [
  {
    company: 'Sociedad Profesionales de Peluquería Hernández',
    role: 'Social Media Manager & Digital Marketing Specialist',
    period: 'Abril 2025 - Enero 2026',
    location: 'Chile (Remoto)',
    highlights: [
      'Lideré estrategia de marketing digital para cadena de barberías con 6 cuentas de Instagram en 5 ciudades de Chile.',
      'Produje +150 historias y +35 reels mensuales con ROI significativo.',
      'Gestioné 24 campañas publicitarias mensuales en Meta Ads optimizando ROAS.',
      'Implementé chatbots con IA en ManyChat para atención automatizada 24/7.',
    ],
  },
  {
    company: 'Rise Job Hunting México',
    role: 'Community Manager',
    period: 'Marzo 2024 - Abril 2025',
    location: 'México (Remoto)',
    highlights: [
      'Implementé campañas Meta Ads logrando ventas high ticket de USD 1.000 a USD 3.000 desde Instagram.',
      'Produje testimonios de clientes y contenido con IA de alto valor.',
      'Gestioné clientes de publicidad digital optimizando tasa de conversión.',
    ],
  },
  {
    company: 'Enigma Developers SAC',
    role: 'Diseñadora Gráfica & Community Manager',
    period: 'Octubre 2020 - Enero 2024',
    location: 'Perú (Remoto)',
    highlights: [
      'Lideré proyectos de marketing digital, branding y materiales promocionales.',
      'Alcancé meta de ventas de todos los departamentos del edificio Chabrier Golf con Meta Ads.',
      'Administré sitios web en WordPress optimizando experiencia de usuario.',
    ],
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
        title="Sobre Mí"
        description="Conocé a Genesis Leal: Community Manager venezolana en Buenos Aires con experiencia en Chile, México y Argentina. Especialista en Meta Ads y estrategias digitales."
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
              <h1 className={styles.heroTitle}>Genesis Leal</h1>
              <p className={styles.heroText}>
                Community Manager y Social Media Strategist con más de 5 años de experiencia
                gestionando redes sociales, creando estrategias digitales y produciendo
                contenido visual de alto impacto.
              </p>
              <p className={styles.heroText}>
                Especializada en Meta Ads de respuesta directa para marcas B2C, con historial
                comprobado en campañas que generaron ventas de alto ticket y resultados
                medibles en conversión.
              </p>
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
                <img src={genesisProfile} alt="Genesis Leal" />
                <div className={styles.imageShine} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Trayectoria</span>
            <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
          </div>

          <div className={styles.timeline}>
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.timelineMarker}>
                  <span className={styles.timelineNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.period}>
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className={styles.location}>
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                  <h3 className={styles.timelineRole}>{job.role}</h3>
                  <span className={styles.timelineCompany}>{job.company}</span>
                  <ul className={styles.timelineHighlights}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
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
    </>
  )
}
