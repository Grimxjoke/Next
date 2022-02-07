import React from 'react';
import Link from 'next/link'
import BasicMenu from './BasicMenu';


export default function Navbar() {
  return (
    <nav>
      <div>
      <BasicMenu />
        
      </div>
      <div>


      
      <Link href="accueil"><a>Accueil</a></Link>
      <Link href="#"><a>A propos</a></Link>
      <Link href="#"><a>Me contacter</a></Link>
      <Link href="#"><a>Plus de détails</a></Link>
      </div>
    </nav>
  );
}
