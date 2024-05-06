"use client";
import Image from 'next/image';
import {useState} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown as DownIcon } from "react-icons/md";
import { MdOutlineKeyboardArrowUp as UpIcon } from "react-icons/md";
import {Mlist,Nlist,Flist,FType} from '../constants';
import { Footer } from '@/components';



export default function Home() {
  const [active_mission,set_active_mession] = useState<null | number>(null);

  const handleMission = (id:number)=>{
    console.log(id,active_mission,'click')
    if(id == active_mission){
      set_active_mession(null);
      return
    }
    set_active_mession(id);

  }
  return (
    <main>
      <section  className={`bg-black relative px-5 flex justify-start h-85 lg:h-screen`}>
        <span className='w-full h-full absolute top-0 left-0 cover' >
          <video poster="/assets/banner.svg" className='w-full h-full object-cover object-center' muted autoPlay loop preload="none">
            <source src="/assets/m.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </span>
        <div className='flex flex-col relative z-10 self-end  w-900 banner-bottom'>
          <div className='text-white uppercase lg:text-5xl mb-5 font-satoshi-ex sm:text-2xl '>The worlds first platform for Tokenizing AI blockchain projects</div>
          <div className='top-gradient-text lg:text-lg xs:text-xs'>
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </div>
        </div>

      </section>
      <section className="mt-10 flex justify-center items-center bg-black z-10 relative py-10">
        <div className='main-width lg:flex-row flex items-center px-8 gap-5 md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse'>
          <div className="w-5/12  xs:w-full">
            <div className='text-white uppercase xs:text-3xl lg:text-7xl'>
              creon pass nft
            </div>
            <p className="gradient-text lg:text-2xl xs:text-xl">
              Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.
            </p>
            <div className='w-full my-10 flex-wrap flex-col flex xs:gap-5 md:gap-10 text-white'>
              <p className='m-0'>
               Pre-launch investment opportunities for upcoming AI projects
              </p>
              <p className='m-0'>
              Free and early access to Creon built AI projects
              </p>
              <p className='m-0'>
              Higher allocation limits on the Creon AI Launchpad
              </p>
              <p className='m-0'>
              Revenue share distribution from Creon built AI projects
              </p>
            </div>
            <Button>
              Buy Creon Pass
            </Button>
          </div>
          <div className='lg:w-5/12 lg:h-screen md:h-500 sm:w-full  relative'>
            {/* <Image
              src='/assets/L-Image.png'
              alt="image"
              objectFit='cover'
              objectPosition='center'
              fill
              priority
            /> */}
             <video poster="/assets/L-Image.png" className='w-full h-full object-fill object-center' muted autoPlay loop preload="none">
            <source src="/assets/nft-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </section>
      <section className='relative flex justify-center items-center px-5'>
        <div className='main-width lg:h-screen'>
            <div className='flex flex-col md:my-20 xs:my-10 md:gap-5 xs:gap-2'>
              <span className='self-center mlg:self-start text-white mlg:text-7xl sm:text-5xl xs:text-4xl'>Profiting through</span>
              <span className='self-center mlg:self-end gradient-text-2 mlg:text-5xl sm:text-3xl xs:text-xl'>AI Innovation & Decentralization</span>
            </div>
            <div className='flex gap-14 mlg:flex-row xs:flex-col'>
              <div className='mlg:w-3/5 flex relative xs:w-full'>
                <video poster="/assets/profit-back.png" className='w-full h-full object-cover object-center' muted autoPlay loop preload="none">
                  <source src="/assets/creon-logo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='mlg:w-2/5 self-center xs:w-full'>
                <div className='text-white text-2xl'>
                The dynamic community driven business model of the future.
                </div>
                <p className='m-0 mt-5 text-white font-extralight '>
                  At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                </p>
              </div>
            </div>
        </div>
      </section>
      <section className='relative flex justify-center items-center px-5 my-10 md:my-20'>
        <div className='main-width flex xs:my-5 flex-col  mlg:flex-row '>
          <div className='xs:w-full mlg:w-3/5 '>
            <div className='text-white xs:text-2xl text-center mlg:text-5xl mlg:text-left'>
              Our vision is to support the innovation of AI blockchain projects <span className='gradient-text-2'>while prioritizing communities and democratizing profits</span>
            </div>
            <div className='relative w-full h-200 sm:h-250 mt-5'>
              <Image
                src='/assets/se-banner.png'
                objectFit='cover'
                objectPosition='center'
                fill
                alt='image'
              />
            </div>
          </div>
          <div className='xs:w-full mlg:w-2/5 xs:mt-10 mlg:mt-0 gap-4 flex flex-col'>
            {Mlist.map(eList => <div className='flex flex-col border-b border-b-gray-black' key={eList.id}>
              <div onClick={()=>handleMission(eList.id)} className='flex items-center cursor-pointer gap-5'>
                <div>
                  <Image 
                    src={eList.icon}
                    width={60}
                    height={60}
                    alt='image'
                  />
                </div>
                <div className='text-white'>
                  {eList.title}
                </div>
                <span className='text-white ml-auto' >
                  {active_mission && active_mission === eList.id?<UpIcon/>:<DownIcon />}
                </span>
              </div>
              <div className='text-white py-2 w-list self-end h-fit transition-all duration-200'>
                {active_mission && active_mission === eList.id?eList.content:''}
              </div>

            </div>)}
          </div>
        </div>
      </section>
      <section className='relative flex justify-center items-center xs:my-5 md:my-14'>
          <div className='relative overflow-x-auto overflow-y-clip main-width px-5 py-10 flex mlg:justify-center xs:justify-start items-center'>
            <div className='min-w-800 grid grid-cols-[1fr_1fr_1fr] gap-5'>
                {
                Nlist.map(eList =>
                  <div className='bg-gray-black relative list-grid py-5 px-3 h-full' key={eList.id}>
                    <div className='text-white text-4xl uppercase'>{eList.header}</div>
                    <p className='gradient-text-2 my-3 h-12'>{eList.title}</p>
                    <div className='relative -left-3 w-95w h-200 my-5'>
                      <Image src={eList.image}
                        alt='image'
                        objectFit='cover'
                        objectPosition='center'
                        priority
                        fill
                      />
                    </div>
                    <p className='text-white'>
                      {eList.content}
                    </p>

                  </div>  
                )
              }
            </div>
            
          </div>
      </section>
      <section className='relative w-screen min-h-screen xs:mt-5 md:mt-28 flex justify-center items-center flex-col'>
        <div className='absolute w-full top-0 left-0 h-full cover2'>
          <video poster="/assets/footer-back.png" className='w-full h-full object-cover object-center' muted autoPlay loop preload="none">
            <source src="/assets/roadmap-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='relative main-width z-10 flex flex-col gap-10 '>
        {
          Flist.map((eList:FType) => <FCard key={eList.id}>
            <div>
              <div>{eList.title}</div>
              <p>{eList.content}</p>
            </div>
            <div className='relative'>
              <Image 
                alt='image'
                src={eList.image}
                objectFit='cover'
                objectPosition='center'
                priority
                fill
              />
            </div>

          </FCard>
            
          )
        }
        
      </div>
        <Footer />
      </section>

    </main>
  )
}

const FSection = styled.section`
  background-color: var(--black-background);
  display:flex;
  justify-content: center;
  align-items: center;
  & > div{
    width:var(--main-width);
    display: grid;
    grid-template-columns: 1fr;
    padding:20px;
    gap:20px;
    @media screen and (width <= 680px ) {
      display: grid;
      grid-template-columns: 250px 250px 250px;
      overflow:auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
    }
    

  }
`

const FCard = styled.div`
  display: flex;
  height: 250px;
  overflow: hidden;
  border:3px;
  & > div{
    &:first-of-type{
      padding:20px;
      color:var(--white-color);
      background-color: var(--gray-background);
      flex:1;
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      & > div{
        font-size:32px;
        line-height:1;
        @media screen and (width <= 870px){
          font-size:25px;
        }
      }
      & > p{
        margin:0;
        font-size:14px;
      }
      @media screen and (width <= 680px ) {
        align-content: start;
        
      }

    }
    &:nth-of-type(2){
      height:100%;
      width:270px;
      @media screen and (width <= 680px ) {
        height:200px;
        width:100%;
        
      }
    }
  }
  @media screen and (width <= 870px){
    height:370px;
  }
  @media screen and (width <= 680px ) {
    flex-direction: column-reverse;
    height:auto;
      
  }

  
`
const NSection = styled.section`
  background-image: url('/assets/footer-back.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:50px;
  & > div{
    display: grid;
    width:var(--main-width);
    gap:30px;
    grid-template-columns: 1fr 1fr 1fr;
    padding:20px;
    @media screen and (width <= 750px ) {
      gap:20px;
      grid-template-columns: 250px 250px 250px;
      overflow:auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
    }
  }
  padding-bottom:80px;
`
const NCard = styled.div`
  display: flex;
  background-color:  var(--gray-background);
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  &::before{
    content:'coming soon';
    text-transform: uppercase;
    background-color: var(--white-color);
    padding:3px 8px;
    border-radius: 10px;
    position: absolute;
    top:-10px;
    right:20px;
    font-size:.55rem;
  }
  & > div:first-of-type{
    font-size:40px;
    color:var(--white-color);
    text-transform:uppercase;
    padding:0 20px;
    @media screen and (width <= 870px){
          font-size:25px;
        }
  }
  & > div:nth-of-type(2){
    border-radius: 0 3px 3px 0;
    overflow: hidden;
  }
  & > p:first-of-type{
    background:linear-gradient(to right, #3D8BFF,#AB23FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:.9rem;
    height:50px;
    padding:0 20px;
  }  
  & > p:nth-of-type(2){
    padding:20px;
    color:var(--white-color);
    font-size:.8rem;
  }
`

const Button = styled.button`
  color:var(--white-color);
  background: linear-gradient(to right, #3D8BFF,#AB23FF) ;
  padding:12px 0;
  width:70%;
  border-radius: 5px;
  @media screen and (width <= 600px){
      width:100%;
    }
`

