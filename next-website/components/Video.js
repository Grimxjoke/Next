import React from 'react';
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
        <Link
          href="https://www.youtube.com/channel/UCXLX4SmGNCg7GQaZe7IyW4w"
          className={style.link_video}
        >
          <a className={style.link_video}>
            <img
              src="./youtube.svg"
              alt="youtube icon"
              height=""
              width="35" />
            Allez voir sur Youtube

          </a>
        </Link>
    </section>
  );
}

// left: 0;
// right: 0;
// text-align: center;