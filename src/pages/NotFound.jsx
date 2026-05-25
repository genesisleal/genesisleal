import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion
} from 'framer-motion'
import { Home, MessageCircle, Heart, Send, Star, Hash, Bookmark, ImageIcon } from 'lucide-react'
import SEO from '../components/SEO'
import styles from './NotFound.module.css'

const floatIcons = [Heart, MessageCircle, Send, Star, Hash, Bookmark, ImageIcon]

const floaters = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  Icon: floatIcons[i % floatIcons.length],
  x: Math.random() * 96 + 2,
  y: Math.random() * 90 + 5,
  size: Math.round(Math.random() * 16 + 20),
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 6,
  drift: Math.round((Math.random() - 0.5) * 36)
}))

const digitVariant = {
  hidden: { opacity: 0, y: 70, scale: 0.5 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 13, delay: 0.1 + i * 0.13 }
  })
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.55 + i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function NotFound() {
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 20 })
  const sy = useSpring(my, { stiffness: 50, damping: 20 })
  const groupX = useTransform(sx, (v) => v * 26)
  const groupY = useTransform(sy, (v) => v * 26)
  const iconsX = useTransform(sx, (v) => v * -18)
  const iconsY = useTransform(sy, (v) => v * -18)

  const handleMouse = (e) => {
    if (reduce) return
    mx.set(e.clientX / window.innerWidth - 0.5)
    my.set(e.clientY / window.innerHeight - 0.5)
  }

  const digits = ['4', '0', '4']

  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que buscás no existe o se movió de lugar."
        path="/404"
        noindex
      />

      <main className={styles.page} onMouseMove={handleMouse}>
        <div className={styles.glow} aria-hidden />

        <motion.div
          className={styles.floaters}
          style={{ x: iconsX, y: iconsY }}
          aria-hidden
        >
          {floaters.map(({ id, Icon, x, y, size, delay, duration, drift }) => (
            <motion.span
              key={id}
              className={styles.floater}
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={
                reduce
                  ? { opacity: 0.18 }
                  : {
                      y: [0, -26, 0],
                      x: [0, drift, 0],
                      rotate: [0, drift, 0],
                      opacity: [0.1, 0.26, 0.1]
                    }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration, delay, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <Icon size={size} strokeWidth={1.5} />
            </motion.span>
          ))}
        </motion.div>

        <div className={styles.content}>
          <motion.div className={styles.code} style={{ x: groupX, y: groupY }}>
            {digits.map((d, i) => (
              <span key={i} className={d === '0' ? styles.zeroWrap : styles.digit}>
                <motion.span
                  className={styles.digitInner}
                  variants={digitVariant}
                  custom={i}
                  initial="hidden"
                  animate="show"
                >
                  <motion.span
                    className={styles.digitFloat}
                    animate={reduce ? {} : { y: [0, -12, 0] }}
                    transition={
                      reduce
                        ? {}
                        : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }
                    }
                  >
                    {d}
                  </motion.span>
                </motion.span>

                {d === '0' && (
                  <motion.span
                    className={styles.orbit}
                    aria-hidden
                    animate={reduce ? {} : { rotate: 360 }}
                    transition={reduce ? {} : { duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    <span className={styles.orbitDot} />
                  </motion.span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            Te perdiste en el feed
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            El enlace que seguiste no existe o se movió de lugar.
            Volvamos a un lugar conocido.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            <Link to="/" className={styles.primary}>
              <Home size={18} strokeWidth={2} />
              Volver al inicio
            </Link>
            <Link to="/contacto" className={styles.secondary}>
              <MessageCircle size={18} strokeWidth={2} />
              Hablemos
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}
