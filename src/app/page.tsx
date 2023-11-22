"use client";
import Image from 'next/image';
import React from 'react';

// type ContextType = {
//   children:any
// }

/**
 * 
 
 */
export default function Home() {
  return (
    <main>
      <section className={`relative h-screen`}>
        <span className='w-full h-full absolute top-0 left-0' >
          <Image
            className="w-full h-full "
            src="/assets/banner.svg"
            objectFit='cover'
            objectPosition='center'
            alt="Banner"
            fill
            priority
          />
        </span>

      </section>
      Home
    </main>
  )
}

