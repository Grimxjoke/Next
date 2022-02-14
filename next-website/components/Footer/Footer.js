import React from 'react';
import Image from 'next/image'
import style from '../../styles/Home.module.scss'



export default function Footer() {
  return (
    <div className={style.footer}>
      <h1>Lorem Ipsum Dolor</h1>
      <ul>
        <section>
        <li>Proident aute.</li>
        <li>Proident e aute.</li>
        <li>Pntecat</li>
        </section>
        <section>
        <li>Proidena nisi aute.</li>
        <li>Proiden aute.</li>
        </section>
        <section>
        <li>Proidnlpa nisi aute.</li>
        <li>Proicataute.</li>
        
        </section>
      </ul>
    </div>
  );
}
