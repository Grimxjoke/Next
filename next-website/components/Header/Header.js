import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link'
import style from '../../styles/Home.module.scss'

export default function Header() {
    return (

        <header className={style.header}>
            <div className={style.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" className='logo-image' viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
                <h3 >Lorem impsum </h3>
            </div>


            <div className={style.navbar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                {/* <BasicMenu /> */}
                <div>
                    <Link href="accueil"><a>Accueil</a></Link>
                    <Link href="#"><a>A propos</a></Link>
                    <Link href="#"><a>Me contacter</a></Link>
                    <Link href="#"><a>Plus de détails</a></Link>
                </div>
            </div>

        </header>
    );
}