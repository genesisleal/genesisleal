import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Megaphone, Layers, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import styles from './PortfolioWork.module.css'

import resultadoHernandez from '../assets/images/portfolio/resultado-metaads-hernandez.png'
import reelTemucoPoster from '../assets/images/portfolio/reel-temuco-poster.jpg'
import reelTemuco from '../assets/videos/reel-temuco-hernandez.mp4'
import resultadoInnvoice from '../assets/images/portfolio/resultado-metaads-innvoice.png'
import reelInnvoicePoster from '../assets/images/portfolio/reel-innvoice-poster.jpg'
import reelInnvoice from '../assets/videos/reel-innvoice.mp4'

const works = [
  {
    id: 'hernandez-temuco',
    types: ['meta', 'video'],
    kicker: 'Caso · Meta Ads + Reel',
    client: 'Peluquería Hernández · Temuco, Chile',
    title: 'El reel que disparó las conversaciones en Temuco',
    desc: 'Edité este reel de posicionamiento y lo usé como creativo principal de una campaña de Meta Ads optimizada a conversaciones. En 2 meses generó un crecimiento sostenido de contactos, con un costo por conversación muy por debajo del promedio del rubro.',
    stats: [
      { value: '1.412', label: 'conversaciones iniciadas' },
      { value: '$901.845', label: 'invertidos en pauta' }
    ],
    video: reelTemuco,
    poster: reelTemucoPoster,
    image: resultadoHernandez
  },
  {
    id: 'innvoice',
    types: ['meta', 'video'],
    kicker: 'Caso · Meta Ads + Reel',
    client: 'Innvoice · Facturación electrónica, Perú',
    title: 'Conversaciones a €0,42 para un SaaS de facturación',
    desc: 'Reel de concepto usado como creativo de una campaña de Meta Ads a conversaciones. En 15 días consiguió un costo por conversación 31% más bajo que el promedio del rubro. La cuenta factura en euros (dueño en España), aunque el negocio opera en Perú.',
    stats: [
      { value: '37', label: 'conversaciones iniciadas' },
      { value: '€0,42', label: 'por conversación (−31% vs rubro)' }
    ],
    video: reelInnvoice,
    poster: reelInnvoicePoster,
    image: resultadoInnvoice
  }
]

const filters = [
  { key: 'all', label: 'Todos', Icon: Sparkles },
  { key: 'meta', label: 'Meta Ads', Icon: Megaphone },
  { key: 'video', label: 'Videos', Icon: Play },
  { key: 'carousel', label: 'Carruseles', Icon: Layers }
]

function Viewer({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className={styles.lightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Cerrar">
        <X size={22} />
      </button>

      <motion.div
        className={styles.lightboxInner}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === 'video' ? (
          <video
            className={styles.lightboxVideo}
            src={item.video}
            poster={item.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img className={styles.lightboxImg} src={item.image} alt={item.title} />
        )}
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioWork() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const visible = useMemo(
    () => (filter === 'all' ? works : works.filter((w) => w.types.includes(filter))),
    [filter]
  )

  return (
    <>
      <SEO
        title="Portafolio de trabajos"
        description="Campañas de Meta Ads, reels editados y carruseles que Genesis Leal creó para marcas de Argentina, Chile, México y Perú. Resultados reales."
        path="/portafolio"
      />

      <main className={styles.page}>
        <motion.header
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Portafolio</span>
          <h1 className={styles.heroTitle}>
            Trabajos que <em>hablan</em> por mí
          </h1>
          <p className={styles.lede}>
            Casos reales: el contenido que creé y los resultados que generó,
            para marcas de Argentina, Chile, México y Perú.
          </p>
        </motion.header>

        <div className={styles.filters} role="tablist" aria-label="Filtrar trabajos" data-cursor-ignore>
          {filters.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              className={`${styles.chip} ${filter === key ? styles.chipActive : ''}`}
              onClick={() => setFilter(key)}
            >
              <Icon size={15} strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className={styles.works}>
          {visible.length === 0 && (
            <p className={styles.empty}>Pronto vas a ver más trabajos de esta categoría ✨</p>
          )}

          {visible.map((w, i) => (
            <motion.article
              key={w.id}
              className={`${styles.case} ${i % 2 === 1 ? styles.reverse : ''}`}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.textCol}>
                <span className={styles.kicker}>{w.kicker}</span>
                <h2 className={styles.caseTitle}>{w.title}</h2>
                <p className={styles.client}>{w.client}</p>
                <p className={styles.desc}>{w.desc}</p>

                <div className={styles.stats}>
                  {w.stats.map((s) => (
                    <div key={s.label} className={styles.stat}>
                      <span className={styles.statValue}>{s.value}</span>
                      <span className={styles.statLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    onClick={() => setActive({ ...w, kind: 'video' })}
                  >
                    <Play size={16} fill="currentColor" strokeWidth={0} />
                    Ver el reel
                  </button>
                  <button
                    type="button"
                    className={styles.btnGhost}
                    onClick={() => setActive({ ...w, kind: 'image' })}
                  >
                    Ver resultados
                  </button>
                </div>
              </div>

              <div className={styles.caseMedia}>
                <div className={styles.composition}>
                <div className={styles.accentPanel} aria-hidden />

                <button
                  type="button"
                  className={styles.window}
                  onClick={() => setActive({ ...w, kind: 'image' })}
                  aria-label="Ver resultados de la campaña"
                >
                  <span className={styles.windowBar} aria-hidden>
                    <span className={styles.dotR} />
                    <span className={styles.dotY} />
                    <span className={styles.dotG} />
                  </span>
                  <img src={w.image} alt="Resultados de la campaña" className={styles.windowImg} />
                </button>

                <button
                  type="button"
                  className={styles.phone}
                  onClick={() => setActive({ ...w, kind: 'video' })}
                  aria-label="Reproducir el reel"
                >
                  <span className={styles.notch} aria-hidden />
                  <img src={w.poster} alt="Reel de la campaña" className={styles.phonePoster} />
                  <span className={styles.play}>
                    <Play size={20} fill="currentColor" strokeWidth={0} />
                  </span>
                </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {active && <Viewer item={active} onClose={() => setActive(null)} />}
        </AnimatePresence>
      </main>
    </>
  )
}
