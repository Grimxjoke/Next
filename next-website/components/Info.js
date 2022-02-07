import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Info() {
  return (
    <article>
      <text>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Quam viverra orci sagittis eu volutpat odio. Et ligula ullamcorper malesuada proin libero nunc. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id</p>
        <button>
          <Link href="#">
            <a >Plus D'infos </a>
          </Link>
          <Link href="#">
            <a>Prendre un rendez-vous</a>
          </Link>
        </button>


      </text>
      <Image
        src="/couple.jpeg"
        width={600}
        height={339}
      />

    </article>

  );
}
