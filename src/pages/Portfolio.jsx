import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Zap, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import styles from './Portfolio.module.css'
import SEO from '../components/SEO'

const projects = [
  {
    id: 1,
    number: '01',
    company: 'Sociedad Profesionales de Peluquería Hernández',
    role: 'Social Media Manager & Digital Marketing Specialist',
    period: '2025 - 2026',
    location: 'Chile (Remoto)',
    description: 'Lideré la estrategia de marketing digital para cadena de barberías con presencia en 5 ciudades de Chile.',
    metrics: [
      { icon: <Instagram size={18} />, value: '6', label: 'Cuentas' },
      { icon: <TrendingUp size={18} />, value: '+150', label: 'Historias/mes' },
      { icon: <Target size={18} />, value: '24', label: 'Campañas/mes' },
      { icon: <MessageCircle size={18} />, value: '24/7', label: 'Chatbots' },
    ],
    tags: ['Meta Ads', 'ManyChat', 'Content Creation', 'Multi-location'],
  },
  {
    id: 2,
    number: '02',
    company: 'Rise Job Hunting México',
    role: 'Community Manager',
    period: '2024 - 2025',
    location: 'México (Remoto)',
    description: 'Implementé estrategias de contenido y publicidad que generaron ventas de alto ticket únicamente desde Instagram.',
    metrics: [
      { icon: <TrendingUp size={18} />, value: '$3K', label: 'High ticket' },
      { icon: <Users size={18} />, value: 'B2C', label: 'Mercado' },
      { icon: <Zap size={18} />, value: 'IA', label: 'Contenido' },
      { icon: <Target size={18} />, value: 'ROI+', label: 'Resultados' },
    ],
    tags: ['Meta Ads', 'High Ticket Sales', 'Video Production', 'AI Content'],
  },
  {
    id: 3,
    number: '03',
    company: 'Enigma Developers SAC',
    role: 'Diseñadora Gráfica & Community Manager',
    period: '2020 - 2024',
    location: 'Perú (Remoto)',
    description: 'Lideré proyectos de marketing digital y branding para diversas marcas, incluyendo campañas inmobiliarias exitosas.',
    metrics: [
      { icon: <Target size={18} />, value: '100%', label: 'Meta ventas' },
      { icon: <TrendingUp size={18} />, value: '3+', label: 'Años' },
      { icon: <Users size={18} />, value: 'Multi', label: 'Marcas' },
      { icon: <Zap size={18} />, value: 'WP', label: 'WordPress' },
    ],
    tags: ['Branding', 'Meta Ads', 'WordPress', 'Real Estate'],
  },
]

const skills = [
  { category: 'Redes Sociales', items: ['Instagram', 'TikTok', 'Facebook', 'YouTube', 'Meta Business Suite'] },
  { category: 'Publicidad Digital', items: ['Meta Ads', 'Segmentación', 'A/B Testing', 'ROAS', 'ROI Analysis'] },
  { category: 'Contenido', items: ['Reels', 'Stories', 'Carruseles', 'Guionización', 'Video Editing'] },
  { category: 'Herramientas', items: ['Canva', 'CapCut Pro', 'Metricool', 'ManyChat', 'Notion'] },
]

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Experiencia Profesional"
        description="Conocé mi experiencia como Community Manager: +5 años gestionando redes sociales, Meta Ads y estrategias digitales para marcas en Argentina, Chile y México."
        path="/portafolio"
      />
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.preTitle}>Portafolio</span>
            <h1 className={styles.heroTitle}>Experiencia Profesional</h1>
            <p className={styles.heroText}>
              +5 años impulsando marcas con estrategias digitales, contenido de alto impacto
              y campañas publicitarias que generan resultados medibles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.projectNumber}>{project.number}</div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectPeriod}>{project.period}</span>
                      <span className={styles.projectLocation}>{project.location}</span>
                    </div>
                    <h2 className={styles.projectCompany}>{project.company}</h2>
                    <span className={styles.projectRole}>{project.role}</span>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectMetrics}>
                    {project.metrics.map((metric, i) => (
                      <div key={i} className={styles.metricItem}>
                        <span className={styles.metricIcon}>{metric.icon}</span>
                        <span className={styles.metricValue}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.projectTag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className={styles.projectArrow} size={24} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Competencias</span>
            <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillCategory}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.skillCategoryTitle}>{skill.category}</h3>
                <div className={styles.skillItems}>
                  {skill.items.map((item, i) => (
                    <span key={i} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
