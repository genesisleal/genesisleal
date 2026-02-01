import { Link } from 'react-router-dom'
import { Check, X, Target, TrendingUp, BarChart3, Zap, RefreshCw, Users, Crown, DollarSign, PieChart, Megaphone } from 'lucide-react'
import styles from './Pricing.module.css'
import SEO from '../components/SEO'

const plans = [
  {
    name: 'Básico',
    subtitle: 'Primeros pasos en publicidad',
    originalPrice: '210.000',
    priceARS: '180.000',
    priceUSD: '120',
    discount: '14%',
    period: '/mes',
    popular: false,
    features: [
      { text: '1 campaña activa', subtext: 'Meta Ads (IG + FB)', included: true, icon: Target },
      { text: '2 configuraciones', subtext: 'Audiencias o creatividades', included: true, icon: Megaphone },
      { text: 'Configuración inicial', subtext: 'Pixel, audiencias, cuenta', included: true, icon: Zap },
      { text: 'Optimización semanal', subtext: 'Ajustes y mejoras', included: true, icon: TrendingUp },
      { text: 'Reporte mensual', subtext: 'Métricas principales', included: true, icon: BarChart3 },
      { text: 'Google Ads', subtext: '', included: false, icon: Target },
      { text: 'Creación de contenido', subtext: '', included: false, icon: PieChart },
      { text: 'Remarketing', subtext: '', included: false, icon: Users },
    ],
    cta: 'Comenzar',
    color: 'starter',
    investmentNote: 'Inversión mínima recomendada: $100.000 ARS/mes'
  },
  {
    name: 'Profesional',
    subtitle: 'Escala tu negocio',
    originalPrice: '450.000',
    priceARS: '350.000',
    priceUSD: '235',
    discount: '22%',
    period: '/mes',
    popular: true,
    features: [
      { text: '2 plataformas', subtext: 'Meta Ads + Google Ads', included: true, icon: Target },
      { text: '3 campañas activas', subtext: 'Simultáneas', included: true, icon: Megaphone },
      { text: 'Setup completo', subtext: 'Pixel, conversiones, tracking', included: true, icon: Zap },
      { text: 'Optimización avanzada', subtext: 'Ajustes 2-3 veces/semana', included: true, icon: TrendingUp },
      { text: 'Reportes quincenales', subtext: 'Con análisis y recomendaciones', included: true, icon: BarChart3 },
      { text: 'Creación de contenido', subtext: 'Viáticos fuera de CABA', included: true, icon: PieChart },
      { text: 'Remarketing', subtext: 'Audiencias personalizadas', included: true, icon: Users },
      { text: 'A/B Testing', subtext: 'Creatividades y audiencias', included: true, icon: RefreshCw },
    ],
    cta: 'Elegir plan',
    color: 'professional',
    investmentNote: 'Inversión mínima recomendada: $200.000 ARS/mes'
  },
  {
    name: 'Premium',
    subtitle: 'Máximo rendimiento',
    originalPrice: '600.000',
    priceARS: '500.000',
    priceUSD: '335',
    discount: '17%',
    period: '/mes',
    popular: false,
    features: [
      { text: 'Todas las plataformas', subtext: 'Meta, Google, TikTok, LinkedIn...', included: true, icon: Target },
      { text: '5+ campañas activas', subtext: 'Sin restricciones', included: true, icon: Megaphone },
      { text: 'Estrategia avanzada', subtext: 'Funnel completo de conversión', included: true, icon: Crown },
      { text: 'Optimización diaria', subtext: 'Monitoreo constante', included: true, icon: TrendingUp },
      { text: 'Reportes semanales', subtext: '+ reunión quincenal', included: true, icon: BarChart3 },
      { text: 'Creación de contenido', subtext: 'Viáticos fuera de CABA', included: true, icon: PieChart },
      { text: 'Remarketing avanzado', subtext: 'Secuencias + lookalike', included: true, icon: Users },
      { text: 'Testing continuo', subtext: 'Creatividades, copy, audiencias', included: true, icon: RefreshCw },
    ],
    cta: 'Contactar',
    color: 'premium',
    investmentNote: 'Inversión mínima recomendada: $400.000 ARS/mes'
  }
]

export default function PricingPublicidad() {
  return (
    <>
      <SEO
        title="Precios Publicidad Digital"
        description="Planes de Meta Ads y Google Ads en Buenos Aires desde $180.000 ARS/mes. Campañas optimizadas para ROAS, remarketing y estrategias de conversión."
        path="/precios/publicidad"
      />
      <main className={styles.pricingPage}>
      <div className="container">
        <section className={styles.hero}>
          <span className={styles.badge}>
            <Target size={14} />
            Planes de Publicidad Digital
          </span>
          <h1 className={styles.title}>
            Gestión de <span>Publicidad</span>
          </h1>
          <p className={styles.subtitle}>
            Campañas estratégicas en Meta Ads y Google Ads para maximizar
            tu retorno de inversión.
          </p>
        </section>

        <section className={styles.disclaimer}>
          <DollarSign size={20} />
          <div>
            <strong>Importante:</strong> Estos precios corresponden únicamente a la gestión de campañas.
            El presupuesto de inversión publicitaria se paga directamente a las plataformas (Meta, Google)
            y es adicional a estos honorarios.
          </div>
        </section>

        <section className={styles.plansGrid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.planCard} ${styles[plan.color]} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Crown size={14} />
                  Más elegido
                </div>
              )}

              <header className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
              </header>

              <div className={styles.priceContainer}>
                {plan.originalPrice && (
                  <div className={styles.originalPrice}>
                    ${plan.originalPrice} ARS
                  </div>
                )}
                <div className={styles.priceMain}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.priceARS}</span>
                  <span className={styles.period}>ARS{plan.period}</span>
                </div>
                <div className={styles.priceUSD}>
                  ~USD ${plan.priceUSD}{plan.period}
                </div>
                {plan.discount && (
                  <div className={styles.discountTag}>
                    {plan.discount} OFF
                  </div>
                )}
              </div>

              {plan.investmentNote && (
                <div className={styles.investmentNote}>
                  <TrendingUp size={14} />
                  {plan.investmentNote}
                </div>
              )}

              <ul className={styles.featuresList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.included ? styles.included : styles.notIncluded}>
                    <span className={styles.featureIcon}>
                      {feature.included ? (
                        <Check size={16} />
                      ) : (
                        <X size={16} />
                      )}
                    </span>
                    <div className={styles.featureText}>
                      <span className={styles.featureMain}>{feature.text}</span>
                      {feature.subtext && feature.included && (
                        <span className={styles.featureSub}>{feature.subtext}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/contacto"
                className={`${styles.ctaButton} ${plan.popular ? styles.ctaPrimary : styles.ctaSecondary}`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </section>

        <section className={styles.notes}>
          <h4>Información importante</h4>
          <ul>
            <li>Todos los precios son en pesos argentinos (ARS). Equivalencia en USD calculada al tipo de cambio actual (~$1.485 ARS).</li>
            <li>La inversión publicitaria (presupuesto en Meta/Google) es adicional y la paga el cliente directamente a las plataformas.</li>
            <li>Los planes requieren un compromiso mínimo de 3 meses para optimizar el rendimiento.</li>
            <li>El algoritmo necesita aproximadamente 50 conversiones mensuales para optimizar correctamente.</li>
            <li>Precios sujetos a actualización trimestral.</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>¿Querés saber cuánto deberías invertir?</h2>
          <p>Agendemos una llamada gratuita para analizar tu negocio, objetivos y calcular un presupuesto estimado.</p>
          <Link to="/contacto" className={styles.ctaButtonLarge}>
            Agendar llamada gratuita
          </Link>
        </section>
      </div>
    </main>
    </>
  )
}
