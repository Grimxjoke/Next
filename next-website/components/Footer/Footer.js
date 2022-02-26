import React from 'react';
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import Script from 'next/script'



export default function Footer() {

  const year = new Date().getFullYear()
  const image_size = 30;

  return (
    <div className={style.footer}>
      <div className={style.footer_head}>
        <div className={style.footer_head_brand}>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" className='logo-image' viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
            <h3 >Lorem impsum </h3>
          </article>
          <h4>Elit excepteur ipsum sint laboris Ullamco enim ea ex dolor consectetur quis in do adipisicing anim fugiat aliqua..</h4>
        </div>
        <ul>
          <section>
            <h3>Sunt dolore.</h3>
            <h4>Veniam ipsum velit nostrud incididunt.</h4>
          </section>
          <section>
            <h3>Ipsum incididunt</h3>
            <h4>Irure dolor magna commodo aliquip ex anim.</h4>
          </section>
        </ul>
      </div>
      <div>
        <div className={style.footer_footer}>
          <div>
            © Lorem Ipsum {year}
          </div>
          <div className={style.footer_footer_logo}>
          <a href='https://www.facebook.com/Sexologue-Th%C3%A9rapeute-de-couple-Charlotte-de-Buzon-Noum%C3%A9a-622709301162595'>
            <Image
              src='/facebook1.svg'
              alt="facebook-logo"
              className={style.couple_img}
              width={image_size}
              height={image_size}
            />
          </a>
          <a href='https://www.youtube.com/channel/UCXLX4SmGNCg7GQaZe7IyW4w'>
            <Image
              src='/youtube-footer1.svg'
              alt="youtube-logo"
              className={style.couple_img}
              width={image_size}
              height={image_size}
            />
          </a>
          <a href='https://www.sexotherapeute.nc/'>
            <Image
              src='/website1.svg'
              alt="website-logo"
              className={style.couple_img}
              width={25}
              height={25}
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
