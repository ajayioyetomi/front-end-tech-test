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
    <Wrapper>
      <div>
        <span>
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
        <span className='flex items-center gap-2'>
          Powered by
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
    </Wrapper>
  )
}

export default Footer;


const Wrapper = styled.footer`
  display:flex;
  padding:20px 0;
  background-image:url('/assets/footer-back.png');
  background-position: center bottom;
  background-size: 100% cover;
  justify-content: center;
  align-items: center;
  & > div{
    padding:0 20px;
    width:var(--main-width);
    color:var(--white-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (width <= 650px) {
      flex-direction: column;
      justify-content: center;
      gap:10px;
    }

  }
  
`