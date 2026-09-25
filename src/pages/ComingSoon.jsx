import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, Rocket, MessageCircle } from 'lucide-react'
import styles from './ComingSoon.module.css'
import SEO from '../components/SEO'

const serviceOptions = [
  'Redes sociales',
  'Publicidad digital',
  'Creación de contenido',
  'Todavía no estoy segura',
]

const objectiveOptions = [
  'Conseguir más consultas',
  'Aumentar las ventas',
  'Crecer en redes sociales',
  'Mejorar la presencia de mi marca',
]

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 4,
}))

export default function ComingSoon() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    phone: '',
    services: [],
    objective: '',
    details: '',
  })
  const [serviceError, setServiceError] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData(current => ({ ...current, [name]: value }))
  }

  const toggleService = (service) => {
    setServiceError(false)
    setFormData(current => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter(item => item !== service)
        : [...current.services, service],
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.services.length === 0) {
      setServiceError(true)
      return
    }

    const message = [
      'Hola Genesis, quiero recibir una recomendación para mi marca.',
      '',
      `Nombre: ${formData.name}`,
      `Marca: ${formData.brand}`,
      `WhatsApp: ${formData.phone}`,
      `Servicio: ${formData.services.join(', ')}`,
      `Objetivo: ${formData.objective}`,
      formData.details ? `Proyecto: ${formData.details}` : null,
    ].filter(line => line !== null).join('\n')

    window.open(
      `https://wa.me/5491125490503?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      <SEO
        title="Planes — Próximamente"
        description="Estamos trabajando en nuestros planes y servicios. Mientras tanto, consultanos directamente por WhatsApp."
        path="/planes"
        noindex
      />

      <main className={styles.page}>
        <div className={styles.particlesContainer}>
          {particles.map(p => (
            <motion.div
              key={p.id}
              className={styles.particle}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className={styles.content}>
          <motion.div
            className={styles.iconGroup}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={styles.clockWrapper}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Clock size={48} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className={styles.rocketWrapper}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket size={28} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contame sobre tu proyecto
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Respondé estas preguntas y te recomiendo la opción más adecuada para
            tu marca. Al finalizar, vas a enviarme todo directamente por WhatsApp.
          </motion.p>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span>Tu nombre</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  placeholder="¿Cómo te llamás?"
                  autoComplete="name"
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Nombre de tu marca</span>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={updateField}
                  placeholder="Tu marca o negocio"
                  autoComplete="organization"
                  required
                />
              </label>
            </div>

            <label className={styles.field}>
              <span>Número de WhatsApp</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={updateField}
                placeholder="Ejemplo: +54 11 1234 5678"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </label>

            <fieldset className={styles.fieldset}>
              <legend>¿Qué necesitás?</legend>
              <p>Podés elegir más de una opción.</p>
              <div className={styles.optionGrid}>
                {serviceOptions.map(service => {
                  const selected = formData.services.includes(service)
                  return (
                    <button
                      key={service}
                      type="button"
                      className={`${styles.optionCard} ${selected ? styles.selected : ''}`}
                      aria-pressed={selected}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </button>
                  )
                })}
              </div>
              {serviceError && (
                <span className={styles.error}>Elegí al menos una opción.</span>
              )}
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>¿Cuál es tu principal objetivo?</legend>
              <div className={styles.optionGrid}>
                {objectiveOptions.map(objective => (
                  <label
                    key={objective}
                    className={`${styles.optionCard} ${formData.objective === objective ? styles.selected : ''}`}
                  >
                    <input
                      className={styles.srOnly}
                      type="radio"
                      name="objective"
                      value={objective}
                      checked={formData.objective === objective}
                      onChange={updateField}
                      required
                    />
                    {objective}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={styles.field}>
              <span>Contame brevemente sobre tu proyecto</span>
              <textarea
                name="details"
                value={formData.details}
                onChange={updateField}
                placeholder="¿Qué hacés, qué redes usás y qué te gustaría mejorar?"
                rows="4"
              />
            </label>

            <button
              type="submit"
              className={styles.whatsappButton}
            >
              <MessageCircle size={20} />
              Recibir recomendación por WhatsApp
            </button>

            <p className={styles.privacyNote}>
              No guardamos tus respuestas. Se envían únicamente cuando abras WhatsApp.
            </p>
          </motion.form>

          <Link to="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  )
}
