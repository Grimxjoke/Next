import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Home.module.scss'


export default function Info() {
  return (
    <article className={style.info}>
      <div className={style.image_container}>
        <Image
          src="/calendar.svg"
          alt="calendar"
          className={style.couple_img}
          width={1000}
          height={500}
        />
      </div>
      <text>
        <h1>Lorem ipsum dolor ipsum dolipsum dol</h1>
        <p>Quam odio. Et ligula ullamcorper malesuada proin libero nunc. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id</p>
        <button>
          <Link href="#">
            <a>Plus D'infos</a>
          </Link>
          <Link href="#">
            <a>Prendre un rendez-vous</a>
          </Link>
        </button>
      </text>
    </article>

  );
}
