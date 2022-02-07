import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Info from '../components/Info'
import Video from '../components/Video'
import Blog from '../components/Blog'
import Specifications from '../components/Specifications'
import CTA from '../components/CTA'




export default function Home() {
  return (
    <div className='font-body'>

      <Info />
      <Video />
      <Blog />
      <Specifications />
      <CTA />
    </div>
  )
}
