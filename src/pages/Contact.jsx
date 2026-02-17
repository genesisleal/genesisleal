import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import styles from './Contact.module.css'
import SEO from '../components/SEO'

const contactMethods = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'genesisandrealealvelandia@gmail.com',
    href: 'mailto:genesisandrealealvelandia@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    title: 'WhatsApp',
    value: '+54 11 3885 1664',
    href: 'https://wa.me/5491138851664',
  },
  {
    icon: <Linkedin size={24} />,
    title: 'LinkedIn',
    value: '@genesisleal19',
    href: 'https://linkedin.com/in/genesisleal19',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Ubicación',
    value: 'Belgrano, Buenos Aires',
    href: null,
  },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contacto"
        description="Contactá a Genesis Leal, Community Manager en Buenos Aires. WhatsApp: +54 11 3885 1664. Disponible para proyectos de redes sociales, Meta Ads y marketing digital."
        path="/contacto"
      />
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.preTitle}>Contacto</span>
            <h1 className={styles.heroTitle}>Trabajemos Juntas</h1>
            <p className={styles.heroText}>
              Estoy disponible para ayudarte a llevar tu marca al siguiente nivel.
              Si tenés una idea en mente o querés saber más sobre lo que puedo hacer
              por tu proyecto, escribime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.contactIcon}>{method.icon}</div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactTitle}>{method.title}</span>
                      <span className={styles.contactValue}>{method.value}</span>
                    </div>
                    <ArrowUpRight className={styles.contactArrow} size={20} />
                  </a>
                ) : (
                  <div className={styles.contactLink}>
                    <div className={styles.contactIcon}>{method.icon}</div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactTitle}>{method.title}</span>
                      <span className={styles.contactValue}>{method.value}</span>
                    </div>
                  </div>
                )}
              </motion.div>
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
            <p className={styles.ctaLabel}>Impulsemos tu presencia digital</p>
            <h2 className={styles.ctaTitle}>¡Hagamos algo increíble!</h2>
            <a
              href="mailto:genesisandrealealvelandia@gmail.com"
              className={styles.ctaButton}
            >
              Enviar Email
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
