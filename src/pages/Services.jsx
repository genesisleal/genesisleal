import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Share2, Target, Video } from 'lucide-react'
import styles from './Services.module.css'
import SEO from '../components/SEO'
import ContactCards from '../components/ContactCards'

const serviceOptions = [
  'Redes sociales',
  'Publicidad digital',
  'Creación de contenido',
  'Todavía no estoy segura',
]

const services = [
  {
    icon: Share2,
    title: 'Gestión de redes sociales',
    description: 'Estrategia, planificación y seguimiento para construir una presencia constante y relevante.',
  },
  {
    icon: Target,
    title: 'Publicidad digital',
    description: 'Campañas en Meta Ads orientadas a tus objetivos, con optimización y análisis de resultados.',
  },
  {
    icon: Video,
    title: 'Creación de contenido',
    description: 'Piezas visuales y mensajes que expresan la identidad de tu marca y conectan con su audiencia.',
  },
]

const objectiveOptions = [
  'Conseguir más consultas',
  'Aumentar las ventas',
  'Crecer en redes sociales',
  'Mejorar la presencia de mi marca',
]

export default function Services() {
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
      'Hola Genesis, quiero conversar sobre una propuesta para mi marca.',
      '',
      `Nombre: ${formData.name}`,
      `Marca: ${formData.brand}`,
      `WhatsApp: ${formData.phone}`,
      `Servicio: ${formData.services.join(', ')}`,
      `Objetivo: ${formData.objective}`,
      formData.details ? `Sobre la marca: ${formData.details}` : null,
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
        title="Servicios de redes sociales y publicidad digital"
        description="Gestión de redes sociales, publicidad digital y creación de contenido para marcas. Contame tus objetivos y conversemos sobre una propuesta personalizada."
        path="/servicios"
      />

      <main className={styles.page}>
        <div className={styles.content}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Servicios
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Una estrategia para hacer crecer tu marca
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Trabajo en redes sociales, publicidad digital y contenido con propuestas
            adaptadas a los objetivos de cada marca.
          </motion.p>

          <div className={styles.servicesGrid}>
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>

          <div className={styles.formIntro}>
            <span className={styles.eyebrow}>Propuesta personalizada</span>
            <h2>Empecemos por tus objetivos</h2>
            <p>Contame qué necesitás y te recomendaré por dónde empezar.</p>
          </div>

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
              <span>Contame brevemente sobre tu marca</span>
              <textarea
                name="details"
                value={formData.details}
                onChange={updateField}
                placeholder="¿A qué se dedica tu marca, qué redes usa y qué te gustaría mejorar?"
                rows="4"
              />
            </label>

            <button
              type="submit"
              className={styles.whatsappButton}
            >
              <MessageCircle size={20} />
              Pedir una propuesta por WhatsApp
            </button>

            <p className={styles.privacyNote}>
              No guardamos tus respuestas. Se abrirá WhatsApp con el mensaje listo para enviar.
            </p>
          </motion.form>

          <section className={styles.directContact} aria-labelledby="direct-contact-title">
            <span className={styles.contactEyebrow}>Otras formas de contacto</span>
            <h2 id="direct-contact-title">¿Preferís hablar directamente?</h2>
            <p>También podés escribirme por WhatsApp o email, conectar por LinkedIn o ver dónde estoy.</p>
            <ContactCards />
          </section>

          <Link to="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  )
}
