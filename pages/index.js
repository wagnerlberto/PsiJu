import appConfig from '../config.json';
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
    <section>
      <h2>{appConfig.name}</h2>
      <p>
        Aplicativo em desenvolvimento.
      </p>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
