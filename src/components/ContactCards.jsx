import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import styles from './ContactCards.module.css'

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
    value: '+54 11 2549 0503',
    href: 'https://wa.me/5491125490503',
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

export default function ContactCards() {
  return (
    <div className={styles.contactGrid}>
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
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
  )
}
