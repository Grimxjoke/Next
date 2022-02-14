import React from 'react';
import style from '../styles/Home.module.scss'
import Card_Specifications from './Card-Specifications';

export default function Specifications() {
  return (
    <div className={style.card}>
      <Card_Specifications
      title={"Lorem Ipsum"}
      content={"Nulla ipsum occaecat  exercitation ex officia consequat do."}
      path1={"M9 9a2 2 0 114 0 2 2 0 01-4 0z"}
      path2={"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"}
      />
      <Card_Specifications
      title={"Ipsum"}
      content={"Xercitation ex officia consequat do."}
      path2={"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"}
     />
     <Card_Specifications
      title={"Ler Ipleum"}
      content={"Cat  exercitation ex officia consequat do."}
      path1={"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"}
      path2={"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"}
     />
    </div>
  );
}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg> */}
