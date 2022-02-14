import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Info() {
  return (
    <article className='flex my-16 justify-around m'>
      <text className='w-1/3 mt-12 text-gray-700'>
        <h1 className='text-3xl font-extrabold'>Lorem ipsum dolor sit amet</h1>
        <p className="text-lg">Quam viverra orci sagittis eu volutpat odio. Et ligula ullamcorper malesuada proin libero nunc. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id</p>
        <button className='my-3 cursor-auto'>
          <Link href="#">
            <a className=' border-cyan-500 hover:bg-sky-700  p-1.5 rounded-full border-2'>Plus D'infos </a>
          </Link>
          <Link href="#">
            <a className=' border-cyan-500 p-1.5 rounded-full border-2 ml-5'>Prendre un rendez-vous</a>
          </Link>
        </button>


      </text>
      <Image
        className="rounded-3xl aspect-video"
        src="/couple.jpeg"
        width={600}
        height={339}
      />

    </article>

  );
}
