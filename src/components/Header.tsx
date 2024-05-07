"use client"
import Image from 'next/image'
import Link from 'next/link';
import { SlMenu as MenuIcon } from "react-icons/sl";
import {FaTimes as CancelIcon} from 'react-icons/fa';
import {useState,useEffect,useRef} from 'react';
import { Linklist,LinkType,Sociallist } from '@/constants';
import {Socials} from '.';

const MDSCREEN:string = '1024px';

const Header = () => {
  const [show,set_show] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement | null | undefined | any > ()
  const handleContent = () =>{
    set_show(!show);
  }
  

  useEffect(()=>{
    const handleScroll = ()=>{
      let h = window.scrollY;
      if(h > 50){
        if(headerRef && headerRef.current){
          headerRef.current.style.backgroundColor = 'black';
        }

      }else{
        if(headerRef && headerRef.current){
          headerRef.current.style.backgroundColor = 'transparent';
      }
      }
    }
    handleScroll();
   
    window.addEventListener('scroll',handleScroll);
    return ()=> {window.removeEventListener('scroll',handleScroll);
    };
  },[])

  useEffect(()=>{
    const handleResize = () =>{
      let screen_width = window.innerWidth;
      if(screen_width > 1023.9 && show){
        set_show(false)
      }
    }
    window.addEventListener('resize',handleResize)
    return ()=> window.removeEventListener('resize',handleResize)
  },[show])
  return (
    <header ref={headerRef} className="flex bg-transparent fixed top-0 left-0 py-5 px-3 justify-between w-full items-center sm:px-7 z-50">
      <Link className='z-50' href="/">
        <Image 
          alt="logo" 
          src="/assets/Logo.png"
          width={130}
          height={37}
          priority
        />
      </Link>
      <nav className='flex h-fit gap-10 items-center '>
        <div className={`fixed z-10 lg:relative top-0 flex lg:z-50 ${show?'left-0 w-screen':''}`} >
            <div className={!show?'hidden':'blur absolute flex w-screen h-screen top-0 left-0'} 
              onClick={handleContent}>
            </div>
            <ul className={!show?'list-none gap-7 hidden lg:flex':'flex bg-black w-250 sm:w-300 lg:flex flex-col absolute top-0 right-0 h-screen py-7 ps-5 gap-3'}>
                <li className='flex gap-2 pt-0 lg:hidden border-b border-b-gray-black pb-7'>
                  <button className=' px-8 py-2 text-sm border-solid rounded border-white border outline-none font-medium text-white'>
                  Connect
                  </button>
                  <button className='menu-2' onClick={handleContent}>
                    <CancelIcon />
                  </button>
                </li>
                {Linklist?.map((eList:LinkType )=><li className={`p-0 border-0 ${show?'pb-7 border-b border-b-gray-black':''}`} key={eList.name} >
                    <Link className='relative'  href={eList.href}>
                    <span className='text-white'>{eList.name}</span >
                    {!eList.active ?<span className='rounded-lg bg-black py-1 px-2 relative -top-2 text-ssx' ><span className='gradient-text'>SOON</span></span>:''}
                    </Link>
                  </li>           
                  )}
                  <li className={!show?'hidden':`flex mt-auto`}>
                    <Socials />
                  </li>
            </ul>
        </div>
        <div className='flex gap-4 items-center'>
          <button className=' px-5 py-2 text-sm border-solid rounded border-white border outline-none font-medium text-white'>
            Connect
          </button>
          <button className='menu' onClick={handleContent}>
            <MenuIcon />
          </button>

        </div>
      </nav>
      
    </header>
  )
}

export default Header;