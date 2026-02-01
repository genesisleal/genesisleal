import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './Home.module.css'
import SEO from '../components/SEO'

import genesisProfile from '../assets/images/hero/genesis-profile.png'

import logoLegourmet from '../assets/logos/clients/legourmet.png'
import logoDulcemente from '../assets/logos/clients/dulcemente-carol.png'
import logoIndexa from '../assets/logos/clients/indexa.png'
import logoBlueberry from '../assets/logos/clients/blueberry.png'
import logoChickenGuys from '../assets/logos/clients/chicken-guys.png'
import logoEnigma from '../assets/logos/clients/enigma.png'

const clientLogos = [
  { src: logoLegourmet, alt: 'Le Gourmet' },
  { src: logoDulcemente, alt: 'Dulcemente Carol' },
  { src: logoIndexa, alt: 'Indexa' },
  { src: logoBlueberry, alt: 'Blueberry' },
  { src: logoChickenGuys, alt: 'Chicken Guys' },
  { src: logoEnigma, alt: 'Enigma Developers' },
]

const services = [
  {
    number: '01',
    title: 'Gestión de Redes Sociales',
    description: 'Administro y hago crecer tu presencia en Instagram, TikTok, Facebook y YouTube con estrategias de contenido multi-plataforma.',
    size: 'large',
  },
  {
    number: '02',
    title: 'Meta Ads',
    description: 'Campañas de respuesta directa optimizadas para ROAS y conversión.',
    size: 'small',
  },
  {
    number: '03',
    title: 'Contenido Visual',
    description: 'Reels, Stories y Carruseles con hooks de 3 segundos que capturan.',
    size: 'small',
  },
  {
    number: '04',
    title: 'Automatización & Chatbots IA',
    description: 'Flujos de ManyChat para respuestas automáticas, cupones y citas. Bots conversacionales con IA para atención 24/7.',
    size: 'large',
  },
]

const stats = [
  { value: '5+', label: 'Años de Experiencia' },
  { value: '150+', label: 'Historias Mensuales' },
  { value: '90%', label: 'Clientes Satisfechos' },
]

const projects = [
  {
    title: 'Sociedad Peluquería Hernández',
    category: 'Social Media',
    description: '6 cuentas de Instagram en 5 ciudades de Chile',
  },
  {
    title: 'Rise Job Hunting',
    category: 'Meta Ads',
    description: 'Ventas high ticket USD 1K-3K desde Instagram',
  },
]

const testimonials = [
  {
    id: 1,
    text: 'Genesis gestionó nuestras 6 cuentas de Instagram en 5 ciudades de Chile. Produjo más de 150 historias mensuales y 24 campañas publicitarias cada mes. La consistencia y calidad del contenido transformó nuestra presencia digital.',
    company: 'Sociedad Peluquería Hernández',
    location: 'Chile',
  },
  {
    id: 2,
    text: 'Gracias a Genesis logramos ventas de programas high ticket entre USD 1,000 y USD 3,000 únicamente desde Instagram. Su dominio de Meta Ads y producción de video con IA nos posicionó en el mercado mexicano.',
    company: 'Rise Job Hunting',
    location: 'México',
  },
  {
    id: 3,
    text: 'Genesis implementó chatbots con ManyChat que atienden consultas 24/7 de forma automática. Respuestas instantáneas, cupones automáticos y agendamiento de citas. Revolucionó nuestra atención al cliente.',
    company: 'Sociedad Peluquería Hernández',
    location: 'Chile',
  },
  {
    id: 4,
    text: 'Durante más de 3 años, Genesis lideró nuestros proyectos de branding y marketing digital. Campañas inmobiliarias que alcanzaron el 100% de las metas de ventas. Diseño, publicidad y estrategia todo en uno.',
    company: 'Enigma Developers',
    location: 'Perú',
  },
]

const titleText = "Génesis Leal"

export default function Home() {
  const imageRef = useRef(null)
  const [imageHover, setImageHover] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)
  const [titleHover, setTitleHover] = useState(false)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <>
      <SEO
        title="Community Manager Buenos Aires"
        description="Soy Genesis Leal, Community Manager con +5 años de experiencia en estrategias digitales, Meta Ads y contenido visual para marcas B2C en Buenos Aires, Argentina."
        path="/"
      />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroName}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setTitleHover(true)}
              onMouseLeave={() => setTitleHover(false)}
              data-cursor-hover
            >
              {titleText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  animate={titleHover ? {
                    y: [0, -8, 0],
                    transition: {
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: "easeInOut"
                    }
                  } : { y: 0 }}
                  style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroLeft}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.heroStats}>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>meta alcanzada</span>
                </div>
                <p className={styles.heroTagline}>
                  En campañas de publicidad digital y contenido B2C.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroCenter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                ref={imageRef}
                className={styles.heroImageWrapper}
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
                <img src={genesisProfile} alt="Genesis Leal" className={styles.heroImage} />
                <div className={styles.imageShine} />
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className={styles.heroDescription}>
                Hola, soy Genesis, Community Manager & Social Media Strategist especializada en marcas B2C.
              </p>
              <Link to="/contacto" className={styles.heroButton}>
                Contactar
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.clients}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className={styles.clientLogo}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLabel}>
              <h2 className={styles.aboutPreTitle}>Sobre Mí</h2>
            </div>
            <div className={styles.aboutContent}>
              <motion.p
                className={styles.aboutText}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Soy Genesis Leal, Community Manager con más de 5 años de experiencia creando estrategias digitales,
                campañas en Meta Ads y contenido visual de alto impacto. He liderado estrategias para cadenas de
                negocios con múltiples sucursales, optimizando ROI publicitario y generando ventas de alto ticket.
              </motion.p>

              <div className={styles.counterGrid}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={styles.counterItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.counterNumber}>{stat.value}</span>
                    <span className={styles.counterLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Servicios</h2>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${styles.serviceItem} ${service.size === 'large' ? styles.serviceLarge : styles.serviceSmall}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ArrowUpRight className={styles.serviceArrow} size={24} />
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Experiencia</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.portfolioLink}>
            <Link to="/portafolio" className={styles.viewAllLink}>
              Ver más experiencia <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Testimonios</h2>

          <div className={styles.testimonialCarousel}>
            <button
              className={styles.carouselButton}
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.testimonialSlider}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className={styles.testimonialCard}
                >
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialText}>
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.authorInfo}>
                        <h4>{testimonials[currentTestimonial].company}</h4>
                        <span className={styles.authorLocation}>{testimonials[currentTestimonial].location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className={styles.carouselButton}
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentTestimonial ? styles.dotActive : ''}`}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1)
                  setCurrentTestimonial(index)
                }}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={styles.ctaLabel}>¿Tenés un proyecto en mente?</p>
            <h2 className={styles.ctaTitle}>
              <Link to="/contacto">Trabajemos juntas</Link>
            </h2>
          </motion.div>
        </div>
      </section>
    </>
  )
}
