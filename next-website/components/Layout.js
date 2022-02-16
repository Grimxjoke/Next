import React from 'react';
import Script from 'next/script'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import style from '../styles/Home.module.scss'


export default function Layout({ children }) {
  return (
    <div>
      
      <div className={style.container}>
        <Header />
        {children}
      </div>
      <div className={style.container_footer}>
        <Footer />
      </div>
      
    </div>
  );
}
