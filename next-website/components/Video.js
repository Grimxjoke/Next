import React from 'react';
import style from '../styles/Home.module.scss'

export default function Video() {
  return (
    <section className={style.video}> 
      <article>
        <h1 className='text-2xl font-extrabold'>Nostrud  incididunt amet.  </h1>
        <p>Quam viverra orci sagittis eu volutpat odio. Et ligula ullamcorper malesuada proin libero nunc</p>
      </article>
      <iframe src="https://www.youtube.com/embed/fbIAvP5Gdzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    );
}

// left: 0;
// right: 0;
// text-align: center;