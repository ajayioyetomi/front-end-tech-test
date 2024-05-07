"use client"
import React from 'react'
import Image from 'next/image';
import {Socials} from '.';

const Footer = () => {
  return (
    <footer className='relative z-10 w-full flex py-5 justify-center items-center'>
      <div className='px-5 md:px-2 main-width text-white flex justify-between flex-row items-center flex-wrap gap-2'>
        <div className='flex gap-2 flex-wrap'>
          <span className='text-white'>
            &copy; Creon 2023. All rights reserved.
          </span>
          <Socials />
        </div>
        <span className='self-start md:self-auto flex items-center gap-2 text-lg grow md:grow-0'>
          <span>Powered&nbsp;by</span>
          <span className='relative w-24'>
            <Image
              alt="footer image"
              width={96}
              height={25}
              src="/assets/footer-logo.png"
              priority
            />
          </span>
        </span>
      </div>
    </footer>
  )
}

export default Footer;