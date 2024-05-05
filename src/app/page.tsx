"use client";
import Image from 'next/image';
import {useState} from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown as DownIcon } from "react-icons/md";
import { MdOutlineKeyboardArrowUp as UpIcon } from "react-icons/md";


type MType={
  id:number;
  title:string | any;
  content:string;
  icon:string;
}

type FType={
  id:number,
  title:string,
  content:string;
  image:string;
}

type NType={
  id:number;
  header:string;
  title:string;
  content:string;
  image:string;
}


const Mlist:MType[] = [
  {
    id:1,
    title:<>Profitability and <br/>Growth</>,
    content:`
      At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
    `,
    icon:'/assets/profit.svg'
  },
  {
    id:2,
    title:<>Transparent & Fair Decentralized <br/>Earnings</>,
    content:`The key element of our proposal is the continuous access to distributed and decentralized earnings generated by AI tools that we provide through their creation or investment in them. This decentralized structure ensures greater transparency and fairness to all participants in the Creon ecosystem.`,
    icon:`/assets/transparent.svg`
  },
  {
    id:3,
    title:<>Early Engagement in Tokenized
    AI <br/>Projects</>,
    content:`What's more, Creon is pioneering in offering the first known opportunity to acquire allocations in tokenised AI projects through our Creon Launchpad platform. This gives investors a unique chance for early engagement in the most promising AI projects, opening the door to potentially high returns.`,
    icon:`/assets/early.svg`
  },
  {
    id:4,
    title:<>Limitless Possibilities of AI
    <br/>& Crypto</>,
    content:`
      The possibilities offered by the integration of AI and cryptocurrencies are limitless, and we're just beginning to explore them. As pioneers, our journey into uncharted territory is fraught with challenges, but the rewards promise to be equally extraordinary. Creon isn't just about profiting from technological innovation; it's about being part of the process that brings these innovations to life.
    `,
    icon:`/assets/limitless.svg`
  }

]
const Flist: FType[] =[
  {
    id:1,
    title:'AI Prospects, Market Size, and Development Pace',
    content:`The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.`,
    image:'/assets/image-1.png'
  },
  {
    id:2,
    title:'AI Tools and Market',
    content:`AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.`,
    image:'/assets/image-2.png'
  },
  {
    id:3,
    title:'AI, Crypto, and NFT Market',
    content:`Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.`,
    image:'/assets/image-3.png'
  },
  
]
const Nlist:NType[] = [
  {
    id:1,
    header:'token',
    title:'The Gateway token to the world of AI',
    content:`Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.`,
    image:'/assets/frame-1.png'
  },
  {
    id:2,
    header:'revenue',
    title:'Driving income and growth through decentralization',
    content:'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
    image:'/assets/frame-2.png'
  },
  {
    id:2,
    header:'launchpad',
    title:'Driving the future of AI Innovation',
    content:`The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
    image:'/assets/frame-3.png'
  }
]
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
      <section  className={`relative px-5 flex justify-start h-85 lg:h-screen lg:justify-center`}>
        <span className='w-full h-full absolute top-0 left-0 cover' >
          <Image
            className='w-full h-full'
            src='/assets/banner.svg'
            objectFit='cover'
            objectPosition='center'
            alt='Banner'
            fill
            priority
          />
        </span>
        <WrapperText>
          <div>The worlds first platform for Tokenizing AI blockchain projects</div>
          <div>
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </div>
        </WrapperText>

      </section>
      <SecondSection>
        <div>
          <div>
            <div>
              our mission is to provide unique, confidential AI-based tools, to which you will gain lifetime access through NFT tokens and our CREON token.
            </div>
            <div className='relative w-full h-200 sm:h-250'>
              <Image
                src='/assets/se-banner.png'
                objectFit='cover'
                objectPosition='center'
                fill
                alt='image'
              />
            </div>
          </div>
          <div>
            {Mlist.map(eList => <MCard key={eList.id}>
              <div>
                <div>
                  <Image 
                    src={eList.icon}
                    width={60}
                    height={60}
                    alt='image'
                  />
                </div>
                <div>
                  {eList.title}
                </div>
                <span onClick={()=>handleMission(eList.id)}>
                  {active_mission && active_mission === eList.id?<UpIcon/>:<DownIcon />}
                </span>
              </div>
              <div>
                {active_mission && active_mission === eList.id?eList.content:''}
              </div>

            </MCard>)}
          </div>
        </div>
        
      </SecondSection>
      <TSection className=''>
        <div>
          <div>
            <span>Profiting through</span>
            <span>AI Innovation & Decentralization</span>
          </div>
          <div>
            <div>
              <Image
                src='/assets/profit-back.png'
                objectFit='cover'
                objectPosition='center'
                fill
                priority
                alt='image'
              />
            </div>
            <div>
              <div>
              The dynamic community driven business model of the future.
              </div>
              <p>
                At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
              </p>
            </div>
          </div>
        </div>
      </TSection>
      <FSection>
        <div>
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
      </FSection>
      <LSection>
        <div>
          <div>
            <div>
              creon pass nft
            </div>
            <p>
              Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.
            </p>
            <div>
              <p>
                Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.
              </p>
              <div>
                <p>
                  The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.
                </p>
                <p>
                  Early access to allocations in inspiring tokenized projects, real businesses based on AI.
                </p>
              </div>
            </div>
            <Button>
              Buy Creon Pass
            </Button>
          </div>
          <div>
            <Image
              src='/assets/L-Image.png'
              alt="image"
              objectFit='cover'
              objectPosition='center'
              fill
              priority
            />
          </div>
        </div>
      </LSection>
      <NSection>
        <div>
          {
            Nlist.map(eList =>
              <NCard key={eList.id}>
                <div>{eList.header}</div>
                <p>{eList.title}</p>
                <div className='relative w-95w h-200 '>
                  <Image src={eList.image}
                    alt='image'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                    fill
                  />
                </div>
                <p>
                  {eList.content}
                </p>

              </NCard>  
            )
          }

        </div>
      </NSection>

    </main>
  )
}

const WrapperText = styled.div`
  position: relative;
  z-index:1;
  align-self: flex-end;
  bottom:50px;
  width:700px;
  display: flex;
  flex-direction: column;
  gap:30px;
  & > div:first-of-type{
    color:var(--white-color);
    font-family: var(--regular-font-ex);
    font-size:2.3rem;
    text-transform:uppercase;
    @media screen and (width <= 850px) {
      font-size: 2rem;
    }
    @media screen and (width <= 550px) {
      font-size: 1.7rem;
    }
  }
  & > div:nth-of-type(2){
    background:linear-gradient(to right, #3D8BFF,#AB23FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:18px;
    width:80%;
    position:relative;
    &::before,&::after{
      content:'';
      display: block;
      width:100%;
      height:1px;
      background:linear-gradient(to right, #3D8BFF,#AB23FF) ;
      margin:0;
    }
    @media screen and (width <= 450px) {
      width:100%;
    }
  }

  @media screen and (width <= 850px) {
    gap:15px;
    bottom:20px;
  }
  
`
const SecondSection = styled.section`
  background-color: var(--black-background);
  padding:50px 0;
  display:flex;
  justify-content: center;
  align-items: center;
  & > div{
    width:var(--main-width);
    display: flex;
    gap:10px;
    padding:10px;
    & > div{
      width:calc(50% - 5px);
      &:first-of-type{
        & > div:first-of-type{
          background:linear-gradient(to right, #3D8BFF,#AB23FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size:18px;
          font-size:28px;
          font-family: var(--regular-font-ex);
          @media screen and (width <= 767px) {
              font-size:20px;
          }
        }
      }
      & > :nth-of-type(2){
        display: flex;
      }
      
    }
    @media screen and (width <= 850px) {
      flex-direction: column;
      & > div{
        width:100%;
      }
    }
  }
  


  
`
const MCard = styled.div`
  display:flex;
  width:100%;
  color:var(--white-color);
  border-bottom: 1px solid var(--line-color);
  flex-direction: column;
  align-items: flex-end;
  & > div:first-of-type{
    height:80px;
    display:flex;
    align-items: center;
    padding-top:10px;
    width:100%;
    gap:20px;
    & > div:first-of-type{
      height:80px;
      position:relative;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    & > :nth-of-type(2){
      font-size:15px;
      font-family: var(--regular-font-ex);
    }
    & > span{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left:auto;
      font-size:20px;
      cursor: pointer;
    }
  }
  & > div:nth-of-type(2){
    padding-bottom:10px;
    width:calc(100% - 80px);
    font-size:13px;
  }
`;

const TSection = styled.section`
  background-color: var(--black-background);
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  padding:50px 0px 80px;
  ;
  & > div{
    width:var(--main-width);
    padding:20px;
    display:flex;
    flex-direction: column;
    gap:30px;
    & > div:first-of-type{
      width:100%;
      display:flex;
      flex-direction: column;
      gap:20px;
      & > span{
        display: flex;
        text-transform: uppercase;
        width:fit-content;
        &:first-of-type{
          color:var(--white-color);
          font-family: var(--regular-font-ex);
          align-self: flex-start;
          font-size:2.5rem;
          @media screen and (width < 630px) {
            font-size:1.4rem;
          }
        }
        &:nth-of-type(2){
          background:linear-gradient(to right, #3D8BFF,#AB23FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          align-self: flex-end;
          font-size:1.8rem;
          @media screen and (width < 630px) {
            font-size:1.3rem;
            text-align: right;
          }

        }
      }
    }
    & > div:nth-of-type(2){
      display:flex;
      width:100%;
      gap:20px;
      & > div{
        position: relative;
        
        &:first-of-type{
          width:calc(60% - 10px);
          height:350px;
        }
        &:nth-of-type(2){
          width:calc(40% - 10px);
          border-left:1px solid var(--line-color);
          border-right:1px solid var(--line-color);
          color:var(--white-color);
          display: flex;
          flex-direction: column;
          padding:0 20px;
          justify-content: center;
          gap:20px;
          & > div{
            font-size: 1.3rem;
          }
          & > p{
            font-size:.9rem;

          }

        }
      }
      @media screen and (width <= 850px){
        flex-direction: column;
        & > div{
          width:100% !important;
          &:nth-of-type(2){
            padding:30px 0;
            border-right:none;
            border-left:none;
            border-top:1px solid var(--line-color);
            border-bottom:1px solid var(--line-color);

          }
        }
      }
    }
  }
`

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

const LSection = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  padding:30px 0;
  & > div{
    width:var(--main-width);
    display: flex;
    align-items: center;
    gap:20px;
    padding:0 20px;
    & > div{
      width:calc(50% - 10px);
      &:first-of-type{
        & > div:first-of-type{
          font-size:38px;
          color:var(--white-color);
          text-transform: uppercase;
        }
        & > p:first-of-type{
          background:linear-gradient(to right, #3D8BFF,#AB23FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin:30px 0 0;
        }
        & > div:last-of-type{
          width:100%;
          display: flex;
          flex-wrap: wrap;
          padding:30px 0;
          font-weight: 300;
          gap:20px;
          & > p{
            padding:0;
            margin:0;
            color:var(--white-color);
            padding:13px;
            border: 1px solid var(--line-color);
            border-radius:8px
          }
          & > div{
            display:flex;
            gap:20px;
            flex-direction: column;
            & > p{
              padding:0;
              margin:0;
              color:var(--white-color);
              padding:13px;
              border: 1px solid var(--line-color);
              border-radius:8px
            }
            @media screen and (width <= 1024px) {
              flex-direction: row;
            }
            @media screen and (width <= 790px) {
              flex-direction: column;
            }
          }
        }


      }
      &:nth-of-type(2){
         height:90dvh;
         position: relative;

      }
    }
    @media screen and (width <= 790px) {
      &:nth-of-type(2){
          height:450px;
        }
    }
    @media screen and (width <= 767px){
      flex-direction: column-reverse;
      & > div{
        width:100% !important;
        &:nth-of-type(2){
          height:400px;
        }
      }
    }


  }
  @media screen and (width <= 790px) {
      padding-top:80px;
    }
`
const Button = styled.button`
  color:var(--white-color);
  background: linear-gradient(to right, #3D8BFF,#AB23FF) ;
  padding:12px 0;
  width:220px;
  border-radius: 5px;
  @media screen and (width <= 600px){
      width:100%;
    }
`

