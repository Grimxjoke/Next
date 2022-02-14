import Link from 'next/link';
import React from 'react';
import style from '../styles/Home.module.scss'

export default function CTA() {
  return (
    <div className={style.cta}>
      <h1>Lorem Ipsum ?</h1>

      <Link href="#">
        <a>Prendre un Rendez vous</a>
      </Link>
      
    </div>
  )
}
