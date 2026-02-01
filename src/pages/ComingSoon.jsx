import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, Rocket } from 'lucide-react'
import styles from './ComingSoon.module.css'
import SEO from '../components/SEO'

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 4,
}))

export default function ComingSoon() {
  return (
    <>
      <SEO
        title="Próximamente"
        description="Estamos trabajando en nuevos planes y servicios. Próximamente estará disponible."
        path="/planes/proximamente"
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
            Estamos trabajando en esto
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Próximamente vas a poder ver todos los detalles de este plan.
            Mientras tanto, podés consultarnos por WhatsApp.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/planes" className={styles.backButton}>
              <ArrowLeft size={18} />
              Volver a planes
            </Link>
            <a
              href="https://wa.me/5491125490503?text=Hola! Quiero consultar sobre los planes"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </main>
    </>
  )
}
