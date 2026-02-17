import { Link } from 'react-router-dom'
import { Check, X, Instagram, Facebook, Sparkles, MessageCircle, Calendar, BarChart3, Video, Users, Crown, Target, Globe, MapPin } from 'lucide-react'
import styles from './Pricing.module.css'
import SEO from '../components/SEO'

const plans = [
  {
    name: 'Básico',
    subtitle: 'Ideal para emprendedores',
    originalPrice: '350.000',
    priceARS: '300.000',
    priceUSD: '200',
    discount: '14%',
    period: '/mes',
    popular: false,
    features: [
      { text: '2 redes sociales', subtext: 'Instagram + Facebook', included: true, icon: Instagram },
      { text: '6 publicaciones/mes', subtext: '2 reels + 2 carruseles + 2 posts · Cliente provee el material grabado', included: true, icon: Calendar },
      { text: '8 historias/mes', subtext: 'Cliente provee recursos', included: true, icon: Sparkles },
      { text: '1 campaña Meta Ads', subtext: 'Configuración básica', included: true, icon: Target },
      { text: 'Calendario editorial', subtext: 'Planificación mensual', included: true, icon: Calendar },
      { text: 'Copywriting', subtext: 'Descripción + hashtags', included: true, icon: Users },
      { text: 'Programación', subtext: 'Publicación automática', included: true, icon: Calendar },
      { text: 'Gestión de comunidad', subtext: '', included: false, icon: MessageCircle },
      { text: 'Reportes de métricas', subtext: '', included: false, icon: BarChart3 },
    ],
    cta: 'Comenzar',
    color: 'starter',
    bonus: 'Paleta de colores + Tipografías + Optimización del perfil'
  },
  {
    name: 'Profesional',
    subtitle: 'Para negocios en crecimiento',
    originalPrice: '650.000',
    priceARS: '500.000',
    priceUSD: '335',
    discount: '23%',
    period: '/mes',
    popular: true,
    features: [
      { text: '3 redes sociales', subtext: 'Instagram + Facebook + 1 más', included: true, icon: Instagram },
      { text: '10 publicaciones/mes', subtext: '3 reels + 4 carruseles + 3 posts · Cliente provee el material grabado', included: true, icon: Calendar },
      { text: '10 historias/mes', subtext: 'Diseñadas + interactivas', included: true, icon: Sparkles },
      { text: '1 campaña Meta Ads', subtext: 'Configuración avanzada', included: true, icon: Target },
      { text: 'Calendario editorial', subtext: 'Planificación mensual', included: true, icon: Calendar },
      { text: 'Copywriting', subtext: 'Descripción + hashtags estratégicos', included: true, icon: Users },
      { text: 'Programación', subtext: 'Publicación automática', included: true, icon: Calendar },
      { text: 'Automatización Meta Business', subtext: 'Respuestas automáticas en DMs y comentarios', included: true, icon: MessageCircle },
      { text: 'Reporte mensual', subtext: 'Métricas y análisis', included: true, icon: BarChart3 },
    ],
    cta: 'Elegir plan',
    color: 'professional',
    bonus: 'Paleta de colores + Tipografías + Optimización del perfil'
  },
  {
    name: 'Premium',
    subtitle: 'Gestión integral',
    originalPrice: '950.000',
    priceARS: '800.000',
    priceUSD: '540',
    discount: '16%',
    period: '/mes',
    popular: false,
    features: [
      { text: 'Todas las plataformas', subtext: 'Las que tu negocio necesite', included: true, icon: Globe },
      { text: '12 publicaciones/mes', subtext: '4 reels + 5 carruseles + 3 posts · Cliente provee el material grabado', included: true, icon: Calendar },
      { text: '15 historias/mes', subtext: 'Diseñadas + interactivas', included: true, icon: Sparkles },
      { text: '1 campaña Meta Ads', subtext: '2 configuraciones (audiencias + creatividades)', included: true, icon: Target },
      { text: 'Estrategia personalizada', subtext: 'Plan de contenido a medida', included: true, icon: Crown },
      { text: 'Copywriting avanzado', subtext: 'Descripción + hashtags + CTA', included: true, icon: Users },
      { text: 'Programación', subtext: 'Publicación automática', included: true, icon: Calendar },
      { text: 'Automatización Meta Business', subtext: 'DMs, comentarios y menciones automatizados', included: true, icon: MessageCircle },
      { text: 'Reportes semanales', subtext: '+ asesoría estratégica', included: true, icon: BarChart3 },
      { text: 'Actualización Google Maps', subtext: 'Perfil optimizado mensualmente', included: true, icon: MapPin },
    ],
    cta: 'Contactar',
    color: 'premium',
    bonus: 'Paleta de colores + Tipografías + Optimización del perfil'
  }
]

export default function PricingRedesSociales() {
  return (
    <>
      <SEO
        title="Precios Gestión de Redes Sociales"
        description="Planes de Community Manager en Buenos Aires desde $300.000 ARS/mes. Gestión de Instagram, Facebook, contenido visual, calendario editorial y más."
        path="/precios/redes-sociales"
      />
      <main className={styles.pricingPage}>
      <div className="container">
        <section className={styles.hero}>
          <span className={styles.badge}>
            <Sparkles size={14} />
            Planes de Redes Sociales
          </span>
          <h1 className={styles.title}>
            Gestión de <span>Redes Sociales</span>
          </h1>
          <p className={styles.subtitle}>
            Planes diseñados para hacer crecer tu presencia digital.
            Elige el que mejor se adapte a tu negocio.
          </p>
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

              {plan.bonus && (
                <div className={styles.bonusSection}>
                  <Sparkles size={14} />
                  <span>Incluye: {plan.bonus}</span>
                </div>
              )}

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
            <li>Los planes requieren un compromiso mínimo de 3 meses para ver resultados.</li>
            <li>El contenido fotográfico/video de alta calidad puede tener un costo adicional si se requiere producción profesional.</li>
            <li>Precios sujetos a actualización trimestral.</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>¿No estás segura qué plan elegir?</h2>
          <p>Agendemos una llamada gratuita para analizar tu negocio y recomendarte el plan ideal.</p>
          <Link to="/contacto" className={styles.ctaButtonLarge}>
            Agendar llamada gratuita
          </Link>
        </section>
      </div>
    </main>
    </>
  )
}
