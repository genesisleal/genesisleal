import styles from './SectionTag.module.css'

export default function SectionTag({ children, icon }) {
  return (
    <span className={styles.tag}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
