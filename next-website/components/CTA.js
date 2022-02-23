import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import style from '../styles/Home.module.scss'

export default function CTA() {



  return (
    <div className={style.cta}>
    <div className={style.cta_text}>
      <h1>Lorem Ipsum ?</h1>
      <Link href="#">
            <a>Prendre un rendez-vous</a>
      </Link>
    </div>
      <Image
          
          src="/love.svg"
          width={400}
          height={150}
        />
    </div>
  )
}
