import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import {
  BarChart3,
  PenTool,
  Image,
  Palette,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Eye,
  Layers,
  Lock,
  Unlock
} from 'lucide-react'
import styles from './Portfolio1.module.css'
import SEO from '../components/SEO'

import project1 from '../assets/images/portfolio/project-1.png'
import project2 from '../assets/images/portfolio/project-2.png'
import project3 from '../assets/images/portfolio/project-3.png'
import project4 from '../assets/images/portfolio/project-4.png'
import project5 from '../assets/images/portfolio/project-5.jpg'
import project6 from '../assets/images/portfolio/project-6.jpg'
import project7 from '../assets/images/portfolio/project-7.jpg'
import carousel1 from '../assets/images/portfolio/carousel-1.png'
import carouselIG from '../assets/images/portfolio/carousel-instagram.png'
import carouselLI from '../assets/images/portfolio/carousel-linkedin.png'
import theBagels from '../assets/images/portfolio/the-bagels.webp'
import shopperApp from '../assets/images/portfolio/shopper-app.webp'
import billboard from '../assets/images/portfolio/billboard.webp'
import bookMockup from '../assets/images/portfolio/book-mockup.webp'
import seacargo from '../assets/images/portfolio/seacargo.webp'

const filters = [
  { id: 'all', name: 'Todo', icon: Layers },
  { id: 'metricas', name: 'Métricas', icon: BarChart3 },
  { id: 'guiones', name: 'Guiones', icon: PenTool },
  { id: 'publicaciones', name: 'Publicaciones', icon: Image },
  { id: 'diseno', name: 'Diseño', icon: Palette },
]

const works = [
  {
    id: 1,
    title: 'Campaña Instagram — Peluquería Hernández',
    category: 'publicaciones',
    image: project1,
    tags: ['Instagram', 'Content', 'Branding'],
    description: 'Estrategia de contenido visual para cadena de barberías con presencia en 5 ciudades de Chile.',
  },
  {
    id: 2,
    title: 'Estrategia de Contenido — Rise Job Hunting',
    category: 'metricas',
    image: project2,
    tags: ['Meta Ads', 'Analytics', 'ROI'],
    description: 'Resultados de campaña de alto ticket con ventas generadas exclusivamente desde Instagram.',
  },
  {
    id: 3,
    title: 'Branding Digital — Enigma Developers',
    category: 'diseno',
    image: project3,
    tags: ['Branding', 'Logo', 'Visual Identity'],
    description: 'Identidad visual completa para empresa de desarrollo tecnológico.',
  },
  {
    id: 4,
    title: 'Guion de Reel — Lanzamiento de Producto',
    category: 'guiones',
    image: project4,
    tags: ['Reel', 'Script', 'Storytelling'],
    description: 'Guión creativo para reel de lanzamiento con hook optimizado y CTA estratégico.',
  },
  {
    id: 5,
    title: 'Fotografía de Producto — Lifestyle',
    category: 'diseno',
    image: project5,
    tags: ['Photography', 'Product', 'Styling'],
    description: 'Sesión de fotos de producto con estilo lifestyle para feed de Instagram.',
  },
  {
    id: 6,
    title: 'Carrusel Educativo — Tips de Marketing',
    category: 'publicaciones',
    image: carouselIG,
    tags: ['Carousel', 'Education', 'Engagement'],
    description: 'Carrusel de 10 slides con tips de marketing digital que generó alto engagement.',
  },
  {
    id: 7,
    title: 'Diseño Editorial — Catálogo Digital',
    category: 'diseno',
    image: bookMockup,
    tags: ['Editorial', 'Layout', 'Print'],
    description: 'Diseño de catálogo digital interactivo para marca de productos.',
  },
  {
    id: 8,
    title: 'Dashboard de Métricas — Reporte Mensual',
    category: 'metricas',
    image: project6,
    tags: ['Analytics', 'Report', 'KPIs'],
    description: 'Reporte visual de métricas mensuales con análisis de crecimiento y engagement.',
  },
  {
    id: 9,
    title: 'Billboard — Campaña OOH',
    category: 'diseno',
    image: billboard,
    tags: ['OOH', 'Advertising', 'Large Format'],
    description: 'Diseño de billboard para campaña de publicidad exterior.',
  },
  {
    id: 10,
    title: 'Contenido LinkedIn — Thought Leadership',
    category: 'publicaciones',
    image: carouselLI,
    tags: ['LinkedIn', 'B2B', 'Authority'],
    description: 'Estrategia de contenido para posicionamiento profesional en LinkedIn.',
  },
  {
    id: 11,
    title: 'Guion de Video — Testimonio de Cliente',
    category: 'guiones',
    image: project7,
    tags: ['Video', 'Testimonial', 'Script'],
    description: 'Guión estructurado para video testimonial con arco narrativo emocional.',
  },
  {
    id: 12,
    title: 'The Bagels — Branding Gastronómico',
    category: 'diseno',
    image: theBagels,
    tags: ['Food', 'Branding', 'Packaging'],
    description: 'Identidad visual para marca gastronómica con enfoque en fotografía de producto.',
  },
  {
    id: 13,
    title: 'Shopper App — UI Design',
    category: 'diseno',
    image: shopperApp,
    tags: ['UI/UX', 'App', 'Mobile'],
    description: 'Diseño de interfaz para aplicación móvil de compras.',
  },
  {
    id: 14,
    title: 'SeaCargo — Logística Marítima',
    category: 'diseno',
    image: seacargo,
    tags: ['Web', 'Corporate', 'B2B'],
    description: 'Diseño web corporativo para empresa de logística y comercio exterior.',
  },
  {
    id: 15,
    title: 'Feed Planning — Grid Visual',
    category: 'publicaciones',
    image: carousel1,
    tags: ['Feed', 'Grid', 'Visual Planning'],
    description: 'Planificación visual de feed con coherencia cromática y narrativa.',
  },
]

const processSteps = [
  { number: '01', title: 'Investigación', description: 'Análisis de marca, audiencia y competencia' },
  { number: '02', title: 'Guionización', description: 'Creación de guiones, hooks y CTAs estratégicos' },
  { number: '03', title: 'Diseño & Producción', description: 'Diseño visual, edición de video y fotografía' },
  { number: '04', title: 'Publicación', description: 'Programación, publicación y gestión de comunidad' },
  { number: '05', title: 'Métricas', description: 'Análisis de resultados y optimización continua' },
]

function TiltCard({ work, onClick, index }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  function handleMouse(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={() => onClick(work)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      layout
    >
      <div className={styles.cardImageWrapper}>
        <img src={work.image} alt={work.title} className={styles.cardImage} loading="lazy" />
        <div className={styles.cardOverlay}>
          <Eye size={28} />
          <span>Ver proyecto</span>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{work.title}</h3>
        <div className={styles.cardTags}>
          {work.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className={styles.cardTag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ work, onClose, onPrev, onNext }) {
  return (
    <motion.div
      className={styles.lightboxBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.lightbox}
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.lightboxClose} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.lightboxContent}>
          <div className={styles.lightboxImageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={work.id}
                src={work.image}
                alt={work.title}
                className={styles.lightboxImage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            <button className={`${styles.lightboxNav} ${styles.navPrev}`} onClick={onPrev}>
              <ChevronLeft size={24} />
            </button>
            <button className={`${styles.lightboxNav} ${styles.navNext}`} onClick={onNext}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.lightboxDetails}>
            <div className={styles.lightboxTags}>
              {work.tags.map((tag, i) => (
                <span key={i} className={styles.lightboxTag}>{tag}</span>
              ))}
            </div>
            <h2 className={styles.lightboxTitle}>{work.title}</h2>
            <p className={styles.lightboxDescription}>{work.description}</p>
            <div className={styles.lightboxCategory}>
              {filters.find(f => f.id === work.category)?.name}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio1() {
  const [unlocked, setUnlocked] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedWork, setSelectedWork] = useState(null)

  const filtered = activeFilter === 'all'
    ? works
    : works.filter(w => w.category === activeFilter)

  const selectedIndex = selectedWork ? filtered.findIndex(w => w.id === selectedWork.id) : -1

  function handlePrev() {
    if (selectedIndex > 0) setSelectedWork(filtered[selectedIndex - 1])
    else setSelectedWork(filtered[filtered.length - 1])
  }

  function handleNext() {
    if (selectedIndex < filtered.length - 1) setSelectedWork(filtered[selectedIndex + 1])
    else setSelectedWork(filtered[0])
  }

  return (
    <>
      <SEO
        title="Portafolio — Genesis Leal"
        description="Explorá mis trabajos: métricas, guiones, publicaciones y diseño. Cada proyecto cuenta una historia de resultados."
        path="/portafolio1"
      />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.section
            key="locked"
            className={styles.lockedScreen}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.lockedPreview}>
              <div className={styles.previewRow}>
                {works.slice(0, 4).map((w, i) => (
                  <motion.div
                    key={w.id}
                    className={styles.previewCard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <img src={w.image} alt="" className={styles.previewImage} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.lockedOverlay} />

            <motion.div
              className={styles.lockedContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                className={styles.lockIcon}
                animate={{ rotate: [0, -8, 8, -5, 5, 0] }}
                transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Lock size={32} />
              </motion.div>
              <h2 className={styles.lockedTitle}>Mi portafolio está oculto</h2>
              <p className={styles.lockedText}>
                Hay más de 50 proyectos esperándote del otro lado.
              </p>
              <motion.button
                className={styles.unlockButton}
                onClick={() => setUnlocked(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Unlock size={18} />
                Desbloquear mi máximo potencial
              </motion.button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <section className={styles.hero}>
              <div className={styles.heroGlow} />
              <div className="container">
                <motion.div
                  className={styles.heroContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className={styles.heroBadge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Sparkles size={14} />
                    Portafolio
                  </motion.span>

                  <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Del concepto
                    <br />
                    <span className={styles.heroAccent}>al resultado</span>
                  </motion.h1>

                  <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    Cada proyecto tiene un proceso: investigación, guión, diseño, publicación y métricas.
                    Acá podés explorar cada etapa.
                  </motion.p>

                  <motion.div
                    className={styles.heroStats}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>50+</span>
                      <span className={styles.statLabel}>Proyectos</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5+</span>
                      <span className={styles.statLabel}>Años</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>3</span>
                      <span className={styles.statLabel}>Países</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            <section className={styles.processSection}>
              <div className="container">
                <div className={styles.processTrack}>
                  {processSteps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className={styles.processStep}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.processNumber}>{step.number}</span>
                      <span className={styles.processTitle}>{step.title}</span>
                      <span className={styles.processDesc}>{step.description}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.gallery}>
              <div className="container">
                <motion.div
                  className={styles.filterBar}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {filters.map(f => {
                    const Icon = f.icon
                    return (
                      <button
                        key={f.id}
                        className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterActive : ''}`}
                        onClick={() => setActiveFilter(f.id)}
                      >
                        <Icon size={16} />
                        {f.name}
                        {activeFilter === f.id && (
                          <motion.span
                            className={styles.filterCount}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            {f.id === 'all' ? works.length : works.filter(w => w.category === f.id).length}
                          </motion.span>
                        )}
                      </button>
                    )
                  })}
                </motion.div>

                <motion.div className={styles.grid} layout>
                  <AnimatePresence mode="popLayout">
                    {filtered.map((work, index) => (
                      <TiltCard
                        key={work.id}
                        work={work}
                        index={index}
                        onClick={setSelectedWork}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className="container">
                <motion.div
                  className={styles.ctaCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className={styles.ctaTitle}>
                    ¿Querés ver algo así para tu marca?
                  </h2>
                  <p className={styles.ctaText}>
                    Cada proyecto empieza con una conversación. Contame qué necesitás.
                  </p>
                  <a
                    href="https://wa.me/5491138851664?text=Hola! Vi tu portafolio y me gustaría trabajar juntos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    Hablemos
                    <ArrowUpRight size={18} />
                  </a>
                </motion.div>
              </div>
            </section>

            <AnimatePresence>
              {selectedWork && (
                <Lightbox
                  work={selectedWork}
                  onClose={() => setSelectedWork(null)}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
