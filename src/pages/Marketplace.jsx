import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Instagram,
  Target,
  Zap,
  MessageCircle,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  Calendar,
  PenTool,
  BarChart3,
  Mail,
  Filter,
  ChevronDown
} from 'lucide-react'
import styles from './Marketplace.module.css'
import SEO from '../components/SEO'

const categories = [
  { id: 'all', name: 'Todos', icon: Sparkles },
  { id: 'redes', name: 'Redes Sociales', icon: Instagram },
  { id: 'publicidad', name: 'Publicidad', icon: Target },
  { id: 'contenido', name: 'Contenido', icon: PenTool },
]

const services = [
  {
    id: 1,
    category: 'redes',
    name: 'Redes Standard',
    description: 'Ideal para emprendedores que dan sus primeros pasos en redes sociales.',
    price: 300000,
    originalPrice: 350000,
    priceUSD: 200,
    discount: 14,
    period: '/mes',
    popular: false,
    features: [
      '2 redes sociales (IG + FB)',
      '6 publicaciones/mes (cliente provee el material grabado)',
      '8 historias/mes',
      '1 campaña Meta Ads',
      'Calendario editorial',
      'Copywriting + hashtags',
      'Programación automática',
    ],
    icon: Instagram,
    color: 'blue',
  },
  {
    id: 2,
    category: 'redes',
    name: 'Redes Pro',
    description: 'Para negocios en crecimiento que buscan resultados consistentes.',
    price: 500000,
    originalPrice: 650000,
    priceUSD: 335,
    discount: 23,
    period: '/mes',
    popular: true,
    features: [
      '3 redes sociales',
      '10 publicaciones/mes (cliente provee el material grabado)',
      '10 historias/mes diseñadas',
      '1 campaña Meta Ads',
      'Calendario editorial',
      'Copywriting estratégico',
      'Programación automática',
      'Automatización Meta Business',
      'Reporte mensual',
    ],
    icon: TrendingUp,
    color: 'purple',
  },
  {
    id: 3,
    category: 'redes',
    name: 'Redes Premium',
    description: 'Gestión integral para marcas que quieren dominar su nicho.',
    price: 800000,
    originalPrice: 950000,
    priceUSD: 540,
    discount: 16,
    period: '/mes',
    popular: false,
    features: [
      'Todas las plataformas',
      '12 publicaciones/mes (cliente provee el material grabado)',
      '15 historias/mes',
      '1 campaña Meta Ads (2 config)',
      'Estrategia personalizada',
      'Copywriting avanzado',
      'Programación automática',
      'Automatización Meta Business',
      'Reportes semanales',
      'Actualización Google Maps',
    ],
    icon: Sparkles,
    color: 'gold',
  },
  {
    id: 4,
    category: 'publicidad',
    name: 'Ads Standard',
    description: 'Primeros pasos en publicidad digital con Meta Ads.',
    price: 180000,
    originalPrice: 210000,
    priceUSD: 120,
    discount: 14,
    period: '/mes',
    popular: false,
    features: [
      '1 campaña activa (Meta Ads)',
      '2 configuraciones',
      'Configuración inicial',
      'Optimización semanal',
      'Reporte mensual',
    ],
    icon: Target,
    color: 'blue',
  },
  {
    id: 5,
    category: 'publicidad',
    name: 'Ads Pro',
    description: 'Meta Ads + Google Ads para escalar tu negocio.',
    price: 350000,
    originalPrice: 450000,
    priceUSD: 235,
    discount: 22,
    period: '/mes',
    popular: true,
    features: [
      '2 plataformas (Meta + Google)',
      '3 campañas activas',
      'Setup completo + tracking',
      'Optimización avanzada',
      'Reportes quincenales',
      'Remarketing + A/B Testing',
    ],
    icon: BarChart3,
    color: 'purple',
  },
  {
    id: 6,
    category: 'publicidad',
    name: 'Ads Premium',
    description: 'Máximo rendimiento en todas las plataformas publicitarias.',
    price: 500000,
    originalPrice: 600000,
    priceUSD: 335,
    discount: 17,
    period: '/mes',
    popular: false,
    features: [
      'Todas las plataformas',
      '5+ campañas activas',
      'Estrategia avanzada (funnel)',
      'Optimización diaria',
      'Reportes semanales',
      'Remarketing avanzado',
      'Testing continuo',
    ],
    icon: TrendingUp,
    color: 'gold',
  },
  {
    id: 7,
    category: 'contenido',
    name: 'Pack de Reels',
    description: '4 reels editados y optimizados para engagement. Cliente provee el material grabado.',
    price: 120000,
    originalPrice: 150000,
    priceUSD: 80,
    discount: 20,
    period: 'único',
    popular: false,
    features: [
      '4 reels editados',
      'Hooks optimizados',
      'Música y efectos',
      'Subtítulos',
      'Formato vertical',
    ],
    icon: PenTool,
    color: 'pink',
  },
  {
    id: 8,
    category: 'contenido',
    name: 'Estrategia de Contenido',
    description: 'Plan estratégico de contenido para 3 meses.',
    price: 250000,
    originalPrice: 300000,
    priceUSD: 170,
    discount: 17,
    period: 'único',
    popular: true,
    features: [
      'Análisis de marca',
      'Pilares de contenido',
      'Calendario 3 meses',
      '30 ideas de posts',
      'Guía de estilo',
    ],
    icon: Calendar,
    color: 'purple',
  },
  {
    id: 9,
    category: 'contenido',
    name: 'Auditoría de Redes',
    description: 'Análisis completo de tu presencia digital actual.',
    price: 180000,
    originalPrice: 220000,
    priceUSD: 120,
    discount: 18,
    period: 'único',
    popular: false,
    features: [
      'Análisis de perfil',
      'Benchmark competencia',
      'Métricas actuales',
      'Oportunidades de mejora',
      'Plan de acción',
    ],
    icon: BarChart3,
    color: 'blue',
  },
]

function formatPrice(price) {
  return new Intl.NumberFormat('es-AR').format(price)
}

function ServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      className={`${styles.serviceCard} ${styles[service.color]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      layout
    >
      {service.popular && (
        <div className={styles.popularBadge}>
          <Sparkles size={14} />
          Más elegido
        </div>
      )}

      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon size={24} />
        </div>
        <div className={styles.categoryTag}>
          {categories.find(c => c.id === service.category)?.name}
        </div>
      </div>

      <h3 className={styles.serviceName}>{service.name}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>

      <div className={styles.priceSection}>
        {service.originalPrice && (
          <div className={styles.originalPrice}>
            ${formatPrice(service.originalPrice)} ARS
          </div>
        )}
        <div className={styles.priceRow}>
          <div className={styles.price}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>{formatPrice(service.price)}</span>
            <span className={styles.period}>{service.period}</span>
          </div>
          {service.discount && (
            <span className={styles.discountBadge}>{service.discount}% OFF</span>
          )}
        </div>
        <div className={styles.priceUSD}>~USD ${service.priceUSD}</div>
      </div>

      <button
        className={styles.expandButton}
        onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
      >
        <span>{isExpanded ? 'Ver menos' : 'Ver detalles'}</span>
        <ChevronDown size={20} className={isExpanded ? styles.chevronUp : ''} />
      </button>

      <div className={`${styles.collapsibleContent} ${isExpanded ? styles.expanded : ''}`}>
        <ul className={styles.featureList}>
          {service.features.map((feature, i) => (
            <li key={i} className={styles.featureItem}>
              <Check size={16} className={styles.checkIcon} />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/5491125490503?text=Hola! Me interesa el servicio: ${service.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          onClick={(e) => e.stopPropagation()}
        >
          Consultar
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <>
      <SEO
        title="Servicios de Marketing Digital"
        description="Explorá todos los servicios de Genesis Leal: gestión de redes sociales, publicidad digital, automatizaciones y contenido. Encontrá el plan perfecto para tu negocio."
        path="/planes"
      />

      <main className={styles.marketplace}>
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.badge}>
                <Sparkles size={16} />
                Servicios de Marketing Digital
              </span>
              <h1 className={styles.title}>
                Encontrá el servicio
                <span className={styles.highlight}> perfecto </span>
                para tu negocio
              </h1>
              <p className={styles.subtitle}>
                Desde gestión de redes hasta automatizaciones con IA.
                Elegí lo que necesitás y empezá a crecer.
              </p>
            </motion.div>
          </div>
        </section>

        <section className={styles.catalogSection}>
          <div className="container">
            <div className={styles.filterBar}>
              <div className={styles.filterLabel}>
                <Filter size={18} />
                Filtrar por:
              </div>
              <div className={styles.categoryFilters}>
                {categories.map(category => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <Icon size={18} />
                      {category.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {activeCategory === 'all' ? (
              <>
                <motion.div className={styles.servicesGrid} layout>
                  <AnimatePresence mode="popLayout">
                    {filteredServices.filter(s => s.category === 'redes').map((service, index) => (
                      <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                <div className={styles.detailLinkWrapper}>
                  <Link to="/planes/detalleredessociales" className={styles.detailLink}>
                    Ver detalles de los planes de Redes Sociales
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <motion.div className={styles.servicesGrid} layout>
                  <AnimatePresence mode="popLayout">
                    {filteredServices.filter(s => s.category === 'publicidad').map((service, index) => (
                      <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                <div className={styles.detailLinkWrapper}>
                  <Link to="/planes/proximamente" className={styles.detailLink}>
                    Ver detalles de los planes de Publicidad
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <motion.div className={styles.servicesGrid} layout>
                  <AnimatePresence mode="popLayout">
                    {filteredServices.filter(s => s.category === 'contenido').map((service, index) => (
                      <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                <div className={styles.detailLinkWrapper}>
                  <Link to="/planes/proximamente" className={styles.detailLink}>
                    Ver detalles de los planes de Contenido
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <motion.div className={styles.servicesGrid} layout>
                  <AnimatePresence mode="popLayout">
                    {filteredServices.map((service, index) => (
                      <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                {activeCategory === 'redes' && (
                  <div className={styles.detailLinkWrapper}>
                    <Link to="/planes/detalleredessociales" className={styles.detailLink}>
                      Ver detalles de los planes de Redes Sociales
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                )}

                {activeCategory === 'publicidad' && (
                  <div className={styles.detailLinkWrapper}>
                    <Link to="/planes/proximamente" className={styles.detailLink}>
                      Ver detalles de los planes de Publicidad
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                )}

                {activeCategory === 'contenido' && (
                  <div className={styles.detailLinkWrapper}>
                    <Link to="/planes/proximamente" className={styles.detailLink}>
                      Ver detalles de los planes de Contenido
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className={styles.customSection}>
          <div className="container">
            <motion.div
              className={styles.customCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.customContent}>
                <div className={styles.customIcon}>
                  <Zap size={32} />
                </div>
                <div className={styles.customText}>
                  <h2>¿Necesitás algo personalizado?</h2>
                  <p>
                    Si ningún plan se ajusta a lo que buscás, armamos una propuesta a medida.
                    Contame qué necesitás y te paso un presupuesto.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5491125490503?text=Hola! Necesito un presupuesto personalizado"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.customButton}
              >
                <Mail size={20} />
                Pedir presupuesto
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
