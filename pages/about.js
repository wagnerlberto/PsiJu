import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function About() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>
        Aplicativo em desenvolvimento.
      </p>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
