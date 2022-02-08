import { Card } from '@mui/material';
import Image from 'next/image'
import React from 'react';
import style from '../styles/Home.module.scss'

export default function Blog() {

  const pixel_img = 40;

  return (
    <div className={style.blog}>


      <div className={style.blog_card}>
        
          <Image
            className={style.blog_card_img}
            src="/person1.jpg"
            width={pixel_img}
            height={pixel_img}
          />
          <p>Jesus, Comédien au grand Rex.</p>
          <article>
            <h3>Et proident minim voluptate enim Lorem mollit eu aliquip eiusmod deserunt.</h3>
            
          </article>

        
      </div>
    </div>
  );
}
