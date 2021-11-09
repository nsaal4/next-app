import styles from './Layout.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
