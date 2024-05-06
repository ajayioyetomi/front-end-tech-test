"use client"
import Image from 'next/image'
import Link from 'next/link';
import { SlMenu as MenuIcon } from "react-icons/sl";
import {FaTimes as CancelIcon} from 'react-icons/fa';
import styled from 'styled-components';
import {useState,useEffect,useRef} from 'react';

const MDSCREEN:string = '1024px';
type ListType ={
  name:string;
  active:boolean;
  href:string;
}
const list = [
  {
    name:'Croen Pass',
    active:true,
    href:'#'
  },
  {
    name:'Token',
    active:false,
    href:'#'
  },
  {
    name:'AI Revenue',
    active:false,
    href:'#'
  },
  {
    name:'AI Launchedpad',
    active:false,
    href:'#'
  }
]

const Header = () => {
  const [show,set_show] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement | null | undefined | any > ()
  const handleContent = () =>{
    set_show(!show);
  }
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

  useEffect(()=>{
    handleScroll();
    window.addEventListener('scroll',handleScroll);

    return ()=> window.removeEventListener('scroll',handleScroll);
  },[])
  return (
    <header ref={headerRef} className="flex bg-transparent fixed top-0 left-0 py-5 px-3 justify-between w-full items-center sm:px-7 z-50">
      <Logo href="/">
        <Image 
          alt="logo" 
          src="/assets/Logo.png"
          width={130}
          height={37}
          priority
        />
      </Logo>
      <nav className='flex h-fit gap-10 items-center '>
        <Wrapper show={show?'1':''} >
            <div onClick={handleContent}></div>
            <ul className=''>
              <li className='flex gap-4 pt-0 lg:hidden'>
                <button className=' px-5 py-2 text-sm border-solid rounded border-white border outline-none font-medium text-white'>
                Connect
                </button>
                <button className='menu-2' onClick={handleContent}>
                  <CancelIcon />
                </button>
              </li>
              {list.map((eList:ListType )=><li key={eList.name} >
                  <Link  href={eList.href}>
                  <span >{eList.name}</span >
                  {!eList.active ?<span >SOON</span>:''}
                  </Link>
                </li>           
                )}
          </ul>
        </Wrapper>
        
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

const Container = (props:any)=>{
  return <div {...props}>{props.children}</div>
}

const Logo = styled.a`
  position:relative;
  z-index:9;
`

const Wrapper = styled(Container)`
  position: relative;
  width:fit-content;
  display: flex;
  z-index: 99999;
  @media screen and (width < ${MDSCREEN}) {
    position: fixed;
    width:100dvw;
    height:100dvh;
    top:0;
    z-index: 2;
    left:${props => props.show?'0':'-100dvw' };
  }
  & > div{
    width:fit-content;
    @media screen and (width < ${MDSCREEN}) {
      position: absolute;
      background-color: rgba(0,0,0,0.6);
      width:100%;
      height:100%;
      top:0;
      left:0;
      backdrop-filter: blur(1.9px);
      -webkit--backdrop-filter: blur(1.9px);
    }
  }
  & > ul{
    display: flex;
    gap:30px;
    @media screen and (width < ${MDSCREEN}) {
      gap:0;
      margin-left:auto;
      position: relative;
      z-index: 1;
      padding:15px 0 0 25px;
      width:200px;
      height: 100%;
      background-color: var(--black-color);
      flex-direction: column;
    }
    & > li {
      & > a{
        & > span:first-of-type{
          color:var(--white-color);
        }
        & > span:nth-of-type(2){
          background-color: var(--black-color);
          color:var(--purple-color);
          font-size:8px;
          padding:3px 8px;
          position: relative;
          top:-6px;
          border-radius: 15px;
        }
      }
      @media screen and (width <= ${MDSCREEN}) {
        padding:20px 0;
        &:first-of-type{
          padding:6px;
        }
        
        border-bottom:1px solid var(--line-color);
      }
      
    }
  }
`