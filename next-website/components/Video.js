import React from 'react';
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Video() {
  return (
    <section className={style.video}>
      <article>
        <h1>Nostrud  incididunt amet.  </h1>
        <p>Quam viverrarper malesuada proin libero nunc</p>

      </article>
      <iframe src="https://www.youtube.com/embed/fbIAvP5Gdzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
          <a
          href="https://www.youtube.com/channel/UCXLX4SmGNCg7GQaZe7IyW4w"
          className={style.link_video}>
            <Image
              src="/youtube.svg"
              alt="youtube icon"
              height={40}
              width={30} />
            Voir sur Youtube
          </a>
    </section>
  );
}

// left: 0;
// right: 0;
// text-align: center;