import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Bot, MessageCircle, Share2, Target, Video } from 'lucide-react'
import styles from './Services.module.css'
import SEO from '../components/SEO'
import { hiringGuidePath } from '../components/ServiceLinks'
import ContactCards from '../components/ContactCards'
import { servicePages } from '../data/services'
import { trackContact } from '../utils/measurement'

const serviceOptions = [
  'Redes sociales',
  'Publicidad digital',
  'Creación de contenido',
  'Automatización y chatbots',
  'Todavía no estoy segura',
]

const serviceIcons = {
  social: Share2,
  ads: Target,
  content: Video,
  automation: Bot,
}

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@graph': servicePages.map(({ title, shortDescription, path }) => ({
    '@type': 'Service',
    '@id': `https://genesisleal.com${path}/#service`,
    name: title,
    description: shortDescription,
    provider: { '@id': 'https://genesisleal.com/#person' },
    url: `https://genesisleal.com${path}/`,
    areaServed: { '@type': 'Country', name: 'Argentina' },
  })),
}

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
    services: [],
    objective: '',
    details: '',
  })
  const [serviceError, setServiceError] = useState(false)
  const [draftUrl, setDraftUrl] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    event.target.setCustomValidity('')
    setDraftUrl('')
    setFormData(current => ({ ...current, [name]: value }))
  }

  const toggleService = (service) => {
    setServiceError(false)
    setDraftUrl('')
    setFormData(current => {
      const unsure = 'Todavía no estoy segura'
      const services = current.services.includes(service)
        ? current.services.filter(item => item !== service)
        : service === unsure
          ? [unsure]
          : [...current.services.filter(item => item !== unsure), service]
      return { ...current, services }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    for (const field of ['name', 'brand']) {
      if (!formData[field].trim()) {
        const input = event.currentTarget.elements.namedItem(field)
        input.setCustomValidity(field === 'name' ? 'Escribí tu nombre.' : 'Escribí el nombre de tu marca.')
        input.reportValidity()
        return
      }
    }

    if (formData.services.length === 0) {
      setServiceError(true)
      event.currentTarget.querySelector('#service-options button').focus()
      return
    }

    const message = [
      'Hola Genesis, quiero conversar sobre una propuesta para mi marca.',
      '',
      `Nombre: ${formData.name.trim()}`,
      `Marca: ${formData.brand.trim()}`,
      `Servicio: ${formData.services.join(', ')}`,
      `Objetivo: ${formData.objective}`,
      formData.details.trim() ? `Sobre la marca: ${formData.details.trim()}` : null,
    ].filter(line => line !== null).join('\n')

    const url = `https://wa.me/5491125490503?text=${encodeURIComponent(message)}`
    setDraftUrl(url)
    trackContact('consultation_form_valid', { source: 'consultation_form', serviceCount: formData.services.length })
    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    )
    trackContact('whatsapp_draft_open', { source: 'consultation_form', serviceCount: formData.services.length })
  }

  return (
    <>
      <SEO
        title="Servicios de community manager y Meta Ads"
        description="Gestión de redes sociales, Meta Ads, creación de contenido y automatización para marcas B2C. Conocé cada servicio y pedí una propuesta personalizada."
        path="/servicios"
        structuredData={servicesStructuredData}
      />

      <div className={styles.page}>
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

          <Link to="/planes" className={styles.plansLink}>Ver planes y precios <ArrowRight size={18} aria-hidden="true" /></Link>

          <div className={styles.servicesGrid}>
            {servicePages.map((service, index) => {
              const Icon = serviceIcons[service.key]
              return (
              <motion.article
                key={service.key}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                <h2>{service.title}</h2>
                <p>{service.shortDescription}</p>
                <Link to={service.path} className={styles.serviceLink}>
                  Conocer el servicio
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </motion.article>
              )
            })}
          </div>

          <div className={styles.formIntro} id="consulta">
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
                  maxLength={100}
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
                  maxLength={120}
                  required
                />
              </label>
            </div>

            <fieldset className={styles.fieldset} aria-describedby={serviceError ? 'service-hint service-error' : 'service-hint'}>
              <legend>¿Qué necesitás?</legend>
              <p id="service-hint">Podés elegir varios servicios. Si aún no lo sabés, te ayudo a definirlo.</p>
              <div className={styles.optionGrid} id="service-options">
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
                <span id="service-error" role="alert" className={styles.error}>Elegí al menos una opción.</span>
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
              <span>Contame brevemente sobre tu marca (opcional)</span>
              <textarea
                name="details"
                value={formData.details}
                onChange={updateField}
                placeholder="¿A qué se dedica tu marca, qué redes usa y qué te gustaría mejorar?"
                rows="4"
                maxLength={1500}
              />
            </label>

            <button
              type="submit"
              className={styles.whatsappButton}
            >
              <MessageCircle size={20} />
              Pedir una propuesta por WhatsApp
            </button>

            {draftUrl && (
              <div className={styles.draftHelp} role="status">
                <p>Tu mensaje está preparado. Revisalo en WhatsApp antes de enviarlo.</p>
                <a href={draftUrl} target="_blank" rel="noopener noreferrer">
                  Si WhatsApp no se abrió, abrí tu mensaje aquí
                </a>
              </div>
            )}

            <p className={styles.privacyNote}>
              No guardamos tus respuestas. Abrir WhatsApp no envía el mensaje; vos decidís cuándo enviarlo.
            </p>
          </motion.form>

          <p><Link to={hiringGuidePath}>Qué incluye cada servicio y cómo se prepara el presupuesto</Link></p>

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
      </div>
    </>
  )
}
