import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <p>
        Aplicativo em desenvolvimento.
      </p>
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
