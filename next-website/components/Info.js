import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Home.module.scss'


export default function Info() {
  return (
    <article className={style.info}>
      <text>
        <h1>Lorem ipsum dolor</h1>
        <p>Quam viverra orci sagittis eu volutpat odio. Et ligula ullamcorper malesuada proin libero nunc. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id</p>
        <button>
          <Link href="#">
            <a>Plus D'infos </a>
          </Link>
        </button>
        <button>
          <Link href="#">
            <a>Prendre un rendez-vous</a>
          </Link>
        </button>


      </text>
      <div >
        <Image
          className={style.couple_img}
          src="/couple.jpeg"
          width={600}
          height={339}
        />
      </div>

    </article>

  );
}
