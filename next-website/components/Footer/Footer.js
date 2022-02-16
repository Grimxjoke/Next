import React from 'react';
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import Script from 'next/script'



export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <div className={style.footer}>
      <div className={style.footer_head}>
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


      <div className={style.footer_footer}>
      {year} © 
        <div >
          <a href='https://www.facebook.com/Sexologue-Th%C3%A9rapeute-de-couple-Charlotte-de-Buzon-Noum%C3%A9a-622709301162595'>
            <img src='./facebook.svg' />
          </a>

          <a href='https://www.youtube.com/channel/UCXLX4SmGNCg7GQaZe7IyW4w'>
            <img src='./website.svg' />
          </a>

          <a href='https://www.sexotherapeute.nc/'>
            <img src='./youtube-footer.svg' />
          </a>
        </div>
      </div>
    </div>
  );
}
