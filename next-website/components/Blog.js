import { Card } from '@mui/material';
import Image from 'next/image'
import React from 'react';
import style from '../styles/Home.module.scss'

export default function Blog() {

  const pixel_img_person = 70;
  const pixel_review = 50;

  return (
    <div className={style.blog}>
      
      <div className={style.blog_card_1}>
        <div className={style.blog_card_img}>
          <Image
            className={style.blog_card_img_real}
            src="/person1.jpg"
            width={pixel_img_person}
            height={pixel_img_person}
          />
        </div>


        <article>
          <h5>"Et proident minim voluptate enim Lorem mollit eu aliquip eiusmod deserunt".</h5>
          <p>Jesse Hendrick</p>
          <p>⭐⭐⭐⭐⭐</p>
        </article>
      </div>

      
      <div className={style.blog_card_2}>
        <div className={style.blog_card_img}>
          <Image
            className={style.blog_card_img_real}
            src="/person2.jpg"
            width={pixel_img_person}
            height={pixel_img_person}
          />
        </div>


        <article>
          <h5>"Et proident minim voluptate enim Lorem mollit eu aliquip eiusmod deserunt".</h5>
          <p>Jesse Hendrick</p>
          <p>⭐⭐⭐⭐⭐</p>
        </article>
      </div>
    </div>
  );
}
