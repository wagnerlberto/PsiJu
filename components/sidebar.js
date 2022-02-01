import Link from 'next/link'
import styles from '../css/sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      {/* <input className={styles.input} placeholder="Search..." /> */}
      <Link href="/">
        <a>Principal</a>
      </Link>
      <Link href="/pacientx">
        <a>Pacientxs</a>
      </Link>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Link href="/contact">
        <a>Contato</a>
      </Link>
    </nav>
  )
}
