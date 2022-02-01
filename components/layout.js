import Head from 'next/head'
import styles from '../css/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PsiJu App</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
