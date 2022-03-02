import '../styles/globals.css'
import style from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import '../styles/Kalend.css' // 

function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
