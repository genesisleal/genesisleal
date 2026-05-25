import { Link } from 'react-router-dom'
import { Sparkles, Instagram, Target, TrendingUp, BarChart3, Layers, Gauge, Globe, Crosshair, CreditCard, Zap, Wallet, Settings, Info, ArrowLeft, ChevronRight } from 'lucide-react'
import styles from './PlanDetailAds.module.css'
import SEO from '../components/SEO'

const plans = [
  {
    name: 'Ads Standard',
    subtitle: 'Primeros pasos en publicidad',
    originalPrice: '210.000',
    priceARS: '180.000',
    priceUSD: '120',
    period: '/mes',
    color: 'starter',
    accentColor: '#3b82f6',
    features: [
      {
        icon: Instagram,
        title: 'Solo Meta',
        description: 'Tus anuncios corren únicamente en Meta: Instagram y Facebook.'
      },
      {
        icon: Target,
        title: '1 campaña activa (objetivo: interacción)',
        description: 'Una campaña orientada a generar interacción: más alcance, reacciones, comentarios y conversación con tu audiencia.'
      },
      {
        icon: TrendingUp,
        title: 'Optimización semanal',
        description: 'Revisión y ajustes una vez por semana sobre segmentación, creatividades y presupuesto para mejorar resultados.'
      },
      {
        icon: BarChart3,
        title: 'Reporte mensual',
        description: 'Un informe al mes con las métricas clave de la campaña y recomendaciones para el período siguiente.'
      }
    ]
  },
  {
    name: 'Ads Pro',
    subtitle: 'Para escalar tu negocio',
    originalPrice: '450.000',
    priceARS: '350.000',
    priceUSD: '235',
    period: '/mes',
    color: 'professional',
    accentColor: '#a855f7',
    popular: true,
    features: [
      {
        icon: Globe,
        title: '1 plataforma a elección',
        description: 'Concentrás la inversión en una sola plataforma a elección (Meta, Google u otra), según dónde esté tu público.'
      },
      {
        icon: Layers,
        title: '2 campañas activas',
        description: 'Hasta dos campañas en simultáneo. Elegís el objetivo de cada una: interacción para crecer en comunidad o cliente potencial para captar contactos.'
      },
      {
        icon: Gauge,
        title: 'Optimización avanzada',
        description: 'Ajustes frecuentes de audiencias, anuncios y presupuesto, con pruebas para encontrar lo que mejor rinde.'
      },
      {
        icon: BarChart3,
        title: 'Reportes quincenales',
        description: 'Un informe cada quince días con métricas, aprendizajes y próximos pasos.'
      }
    ]
  },
  {
    name: 'Ads Premium',
    subtitle: 'Máximo rendimiento',
    originalPrice: '600.000',
    priceARS: '500.000',
    priceUSD: '335',
    period: '/mes',
    color: 'premium',
    accentColor: '#f59e0b',
    features: [
      {
        icon: Globe,
        title: 'Hasta 3 plataformas de ads a elección',
        description: 'Combiná hasta tres plataformas (Meta, Google, TikTok u otras) según dónde esté tu público.'
      },
      {
        icon: Layers,
        title: '4 campañas activas (máximo)',
        description: 'Hasta cuatro campañas en simultáneo para cubrir distintos objetivos y etapas del recorrido del cliente.'
      },
      {
        icon: Crosshair,
        title: 'Definís el objetivo de cada campaña',
        description: 'Vos elegís el objetivo de cada campaña (interacción, clientes potenciales, tráfico, ventas...). Manejamos cualquier configuración.'
      },
      {
        icon: Gauge,
        title: 'Optimización diaria',
        description: 'Monitoreo y ajustes todos los días para aprovechar al máximo cada peso invertido.'
      },
      {
        icon: BarChart3,
        title: 'Reportes quincenales',
        description: 'Un informe cada quince días con análisis de rendimiento y recomendaciones estratégicas.'
      }
    ]
  }
]

const disclaimers = [
  {
    icon: Wallet,
    strong: 'El presupuesto de pauta va aparte.',
    text: 'El precio del plan es por la gestión de tus campañas. La inversión publicitaria (lo que se paga a Meta, Google u otras plataformas) la define y aporta el cliente.'
  },
  {
    icon: Settings,
    strong: 'Configuración de cuenta.',
    text: 'Si todavía no contás con tu cuenta de ads (Meta Business / Google Ads) configurada, la configuración inicial se cobra aparte por única vez.'
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

export default function PlanDetailAds() {
  return (
    <>
      <SEO
        title="Planes de Publicidad — Detalle y Precios"
        description="Compará los planes de publicidad digital: Ads Standard, Pro y Premium desde $180.000 ARS/mes. Meta Ads, campañas, optimización y reportes."
        path="/planes/detallepublicidad"
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
              Qué incluye <span>cada plan de Ads</span>
            </h1>
            <p className={styles.subtitle}>
              Desglose completo de los servicios incluidos en cada plan de publicidad digital.
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
                        <Sparkles size={12} />
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
              </section>
            ))}
          </div>

          <section className={styles.notesSection}>
            <h3 className={styles.sectionTitle}>
              <Info size={22} />
              A tener en cuenta
            </h3>
            <div className={styles.disclaimers}>
              {disclaimers.map((item, index) => (
                <div key={index} className={styles.disclaimerCard}>
                  <item.icon size={18} />
                  <span><strong>{item.strong}</strong> {item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.paymentSection}>
            <h3 className={styles.sectionTitle}>
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
            <p>Escribinos y armamos juntos la estrategia de publicidad para tu negocio.</p>
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
