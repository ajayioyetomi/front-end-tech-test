"use client"
import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const list = [
  {
    id:1,
    src:'/assets/Telegram.svg',
    alt:'Telegram'
  },
  {
    id:2,
    src:'/assets/Discord.svg',
    alt:'Discord'
  },
  {
    id:3,
    src:'/assets/Twitter.svg',
    alt:'Twitter'
  },

]

const Footer = () => {
  return (
    <footer className='relative z-10 w-full flex py-5 justify-center items-center'>
      <div className='px-5 md:px-0 main-width text-white flex justify-between flex-row items-center flex-wrap gap-2'>
        <div className='flex gap-2 flex-wrap'>
          <span className='text-white'>
            &copy; Creon 2023. All rights reserved.
          </span>
          <span className='flex gap-5'>
            {list.map((eList:any,index:number )=>
                <a key={index} href="#" className='relative'>
                <Image src={eList.src}
                  alt={eList.alt}
                  width={30}
                  height={30}
                  priority
                />
              </a>
              )}
            
            
      
          </span>
        </div>
        <span className='self-start md:self-auto flex items-center gap-2 text-lg grow'>
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