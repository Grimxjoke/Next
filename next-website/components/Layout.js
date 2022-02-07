import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import style from '../styles/Home.module.scss'


export default function Layout({ children }) {
  return (
      <div className={style.container}>
          <Header />
          { children }
          <Footer />
      </div>
  );
}
