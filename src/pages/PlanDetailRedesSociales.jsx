import { Link } from 'react-router-dom'
import { Sparkles, Instagram, Calendar, Target, Users, MessageCircle, BarChart3, Video, Crown, Globe, MapPin, Camera, Hash, Clock, Zap, FileText, ArrowLeft, CreditCard, ChevronRight } from 'lucide-react'
import styles from './PlanDetailRedesSociales.module.css'
import SEO from '../components/SEO'

const plans = [
  {
    name: 'Standard',
    subtitle: 'Ideal para emprendedores',
    originalPrice: '350.000',
    priceARS: '300.000',
    priceUSD: '200',
    period: '/mes',
    color: 'starter',
    accentColor: '#3b82f6',
    features: [
      {
        icon: Instagram,
        title: '2 redes sociales',
        description: 'Instagram + Facebook. Gestión completa de ambas plataformas.'
      },
      {
        icon: Calendar,
        title: '8 publicaciones/mes',
        description: '3 reels + 2 carruseles + 3 posts. Contenido variado para mantener tu feed activo y atractivo. Cliente provee el material grabado.'
      },
      {
        icon: Video,
        title: '12 historias/mes',
        description: 'Imagen estática o video corto con subtítulos. Contenido diario para mantener la interacción con tu audiencia.'
      },
      {
        icon: Target,
        title: '1 campaña Meta Ads / 1 anuncio',
        description: 'Opción A: tráfico al perfil o Opción B: interacción en mensajes. Configuración y seguimiento incluidos.'
      },
      {
        icon: FileText,
        title: 'Calendario editorial',
        description: 'Planificación mensual de todo el contenido. Sabés exactamente qué se publica y cuándo.'
      },
      {
        icon: Hash,
        title: 'Copywriting + hashtags',
        description: 'Textos persuasivos para cada publicación con hashtags estratégicos para maximizar el alcance.'
      },
      {
        icon: Clock,
        title: 'Programación automática',
        description: 'Todas las publicaciones se programan y publican automáticamente en los horarios óptimos.'
      }
    ],
    note: 'El cliente provee el material visual (fotos/videos).'
  },
  {
    name: 'Pro',
    subtitle: 'Para negocios en crecimiento',
    originalPrice: '650.000',
    priceARS: '500.000',
    priceUSD: '335',
    period: '/mes',
    color: 'professional',
    accentColor: '#a855f7',
    popular: true,
    features: [
      {
        icon: Instagram,
        title: '3 redes sociales',
        description: 'Instagram + Facebook + 1 plataforma adicional a elección.'
      },
      {
        icon: Calendar,
        title: '12 publicaciones/mes',
        description: '4 reels con guion estratégico + edición, 4 carruseles de 4-5 slides, 4 posts. Contenido profesional y variado. Cliente provee el material grabado.'
      },
      {
        icon: Video,
        title: '15 historias/mes diseñadas',
        description: 'Imágenes estáticas o videos cortos con subtítulos. Diseño profesional y coherente con tu identidad visual.'
      },
      {
        icon: Target,
        title: '1 campaña Meta Ads / 1 anuncio',
        description: 'Opción A: tráfico al perfil o Opción B: interacción en mensajes. Configuración avanzada y optimización.'
      },
      {
        icon: FileText,
        title: 'Calendario editorial',
        description: 'Planificación mensual estratégica con objetivos claros para cada pieza de contenido.'
      },
      {
        icon: Hash,
        title: 'Copywriting estratégico',
        description: 'Textos persuasivos con enfoque en conversión, hashtags investigados y llamados a la acción efectivos.'
      },
      {
        icon: Clock,
        title: 'Programación automática',
        description: 'Publicación automatizada en los horarios de mayor engagement según análisis de tu audiencia.'
      },
      {
        icon: MessageCircle,
        title: 'Automatización Meta Business',
        description: 'Respuesta automática de DM la primera vez que escriben. Mejora la experiencia del cliente y reduce tiempos de respuesta.'
      },
      {
        icon: BarChart3,
        title: 'Reporte mensual',
        description: 'Métricas de publicidad y redes sociales. Análisis de rendimiento con recomendaciones para el próximo mes.'
      },
    ],
    note: 'El cliente provee el material visual (fotos/videos).'
  },
  {
    name: 'Premium',
    subtitle: 'Gestión integral',
    originalPrice: '950.000',
    priceARS: '800.000',
    priceUSD: '540',
    period: '/mes',
    color: 'premium',
    accentColor: '#f59e0b',
    features: [
      {
        icon: Globe,
        title: 'Todas las plataformas',
        description: 'Todas las redes que necesite la empresa.'
      },
      {
        icon: Calendar,
        title: '16 publicaciones/mes',
        description: '6 reels con guion estratégico + edición, 6 carruseles de 5-8 slides, 4 posts. Máxima presencia en el feed. Cliente provee el material grabado.'
      },
      {
        icon: Video,
        title: '20 historias/mes',
        description: 'Imágenes estáticas o videos cortos con subtítulos, hook y CTA estratégico. Diseño premium enfocado en conversión.'
      },
      {
        icon: Target,
        title: '1 campaña Meta Ads / 2 anuncios + 1 actualización',
        description: 'Opción A: tráfico al perfil o Opción B: interacción en mensajes.'
      },
      {
        icon: Crown,
        title: 'Estrategia personalizada',
        description: 'Plan de contenido a medida según tus objetivos de negocio, audiencia y competencia.'
      },
      {
        icon: Hash,
        title: 'Copywriting avanzado',
        description: 'Textos con storytelling, CTA estratégicos y hashtags investigados. Copy adaptado a cada plataforma.'
      },
      {
        icon: Clock,
        title: 'Programación automática',
        description: 'Publicación automatizada con análisis continuo de horarios óptimos y ajustes en tiempo real.'
      },
      {
        icon: MessageCircle,
        title: 'Automatización Meta Business',
        description: 'Respuesta automática de DM + respuesta de comentarios.'
      },
      {
        icon: BarChart3,
        title: 'Reportes semanales',
        description: 'Métricas detalladas cada semana con análisis de tendencias, rendimiento y recomendaciones estratégicas.'
      },
      {
        icon: MapPin,
        title: 'Actualización Google Maps',
        description: '2 fotos o videos mensuales + respuesta de comentarios mensual en Google Maps. Mejora tu visibilidad local.'
      }
    ],
    note: 'El cliente provee el material visual (fotos/videos).'
  }
]

const paymentConditions = [
  {
    icon: CreditCard,
    title: 'Primer mes',
    description: 'Se abona el 50% al comenzar y el 50% restante al finalizar el mes.'
  },
  {
    icon: Zap,
    title: 'A partir del segundo mes',
    description: 'El pago es al inicio del mes.'
  },
  {
    icon: Sparkles,
    title: 'Precio promocional',
    description: 'El precio con descuento se mantiene durante los primeros 3 meses. Luego se realiza un ajuste al precio regular.'
  }
]

export default function PlanDetailRedesSociales() {
  return (
    <>
      <SEO
        title="Detalle de Planes de Redes Sociales"
        description="Conocé en detalle qué incluye cada plan de gestión de redes sociales. Comparación completa de servicios, features y condiciones de pago."
        path="/planes/detalleredessociales"
      />
      <main className={styles.page}>
        <div className="container">
          <Link to="/planes" className={styles.backLink}>
            <ArrowLeft size={18} />
            Volver a planes
          </Link>

          <section className={styles.hero}>
            <span className={styles.badge}>
              <Sparkles size={14} />
              Detalle de Planes
            </span>
            <h1 className={styles.title}>
              Qué incluye <span>cada plan</span>
            </h1>
            <p className={styles.subtitle}>
              Desglose completo de todos los servicios incluidos en cada plan de gestión de redes sociales.
            </p>
          </section>

          <div className={styles.plansContainer}>
            {plans.map((plan) => (
              <section
                key={plan.name}
                className={`${styles.planSection} ${styles[plan.color]}`}
                style={{ '--plan-accent': plan.accentColor }}
              >
                <div className={styles.planHeader}>
                  <div className={styles.planHeaderLeft}>
                    {plan.popular && (
                      <span className={styles.popularTag}>
                        <Crown size={12} />
                        Más elegido
                      </span>
                    )}
                    <h2 className={styles.planName}>{plan.name}</h2>
                    <p className={styles.planSubtitle}>{plan.subtitle}</p>
                  </div>
                  <div className={styles.planHeaderRight}>
                    {plan.originalPrice && (
                      <span className={styles.originalPrice}>${plan.originalPrice}</span>
                    )}
                    <div className={styles.planPrice}>
                      <span className={styles.currency}>$</span>
                      <span className={styles.amount}>{plan.priceARS}</span>
                      <span className={styles.period}>ARS{plan.period}</span>
                    </div>
                    <span className={styles.priceUSD}>~USD ${plan.priceUSD}{plan.period}</span>
                  </div>
                </div>

                <div className={styles.featuresGrid}>
                  {plan.features.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                      <div className={styles.featureIconWrapper}>
                        <feature.icon size={20} />
                      </div>
                      <div className={styles.featureContent}>
                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {plan.note && (
                  <div className={styles.planNote}>
                    <Sparkles size={14} />
                    <span>{plan.note}</span>
                  </div>
                )}
              </section>
            ))}
          </div>

          <section className={styles.paymentSection}>
            <h3 className={styles.paymentTitle}>
              <CreditCard size={22} />
              Condiciones de pago
            </h3>
            <div className={styles.paymentGrid}>
              {paymentConditions.map((condition, index) => (
                <div key={index} className={styles.paymentCard}>
                  <div className={styles.paymentIconWrapper}>
                    <condition.icon size={20} />
                  </div>
                  <div className={styles.paymentContent}>
                    <h4 className={styles.paymentCardTitle}>{condition.title}</h4>
                    <p className={styles.paymentCardDescription}>{condition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>¿Querés arrancar?</h2>
            <p>Escribinos y empezamos a trabajar en tu presencia digital.</p>
            <Link to="/contacto" className={styles.ctaButton}>
              Contactar ahora
              <ChevronRight size={18} />
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
