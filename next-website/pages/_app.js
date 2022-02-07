import '../styles/globals.css'
import style from '../styles/Home.module.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
