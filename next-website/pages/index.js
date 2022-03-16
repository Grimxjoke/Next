import Head from 'next/head'


import styles from '../styles/Home.module.scss'

import Info from '../components/Info'
import Price from '../components/Price'
import Video from '../components/Video'
import Blog from '../components/Blog'
import Specifications from '../components/Specifications'
import CTA from '../components/CTA'
import Calendar from '../components/Calendar'
import Stripe from '../components/Stripe'




// className={styles.container}




export default function Home() {
  return (
    <>
      <Info />
      <Blog />
      <Video />
      <Price />
      <Specifications />
      <CTA />
      <Calendar />
      <Stripe />
    </>
  )
}
