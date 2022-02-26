import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Info from '../components/Info'
import Price from '../components/Price'
import Video from '../components/Video'
import Blog from '../components/Blog'
import Specifications from '../components/Specifications'
import CTA from '../components/CTA'



// className={styles.container}




export default function Home() {
  return (
    <div >

      <Info />
      <Blog />
      <Video />
      <Price />
      <Specifications />
      <CTA />
      
    </div>
  )
}
