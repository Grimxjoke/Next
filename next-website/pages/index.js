import Head from 'next/head'


import styles from '../styles/Home.module.scss'

import Info from '../components/Info'
import Price from '../components/Price'
import Video from '../components/Video.jsx'
import Blog from '../components/Blog.jsx'
import Specifications from '../components/Specifications'
import CTA from '../components/CTA'

import Calendar from '../components/Calendar'



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
      <Calendar />
      
    </div>
  )
}
