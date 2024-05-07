import React from 'react'
import { Sociallist } from '@/constants'
import Image from 'next/image';

const Socials = () => {
  return (
    <span className='flex gap-5'>
         {Sociallist?.map((eList:any,index:number )=>
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
  )
}

export default Socials