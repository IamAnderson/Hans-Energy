import React, { useEffect, useState } from 'react'
import "../App.css"
import styled from 'styled-components'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { HiArrowSmRight } from "react-icons/hi"
import { SlideData } from '../data/headerData/SlideData'
import AboutInfo from '../homeInfo/AboutInfo'
import ContactInfo from '../homeInfo/ContactInfo'
import { Fade } from 'react-reveal'
import ContactInfo1 from '../homeInfo/ContactInfo1'
import { FadeLoader } from 'react-spinners'

const Home = ({slides}) => {
  const [loading, setLoading] = useState(false);  
  const [ onHover, setOnHover ] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  let autoSlide = true;
  let slideInterval;

// eslint-disable-next-line
const prevbtn = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

const nxtbtn = () => {
  setCurrent(current === length - 1 ? 0 : current + 1); 
};

const firstbtn = () => {
  setCurrent(current === 0 ? 0 : 0)
}

const secondbtn = () => {
  setCurrent(current === 0 ? 1 : 1)
}

const thirdbtn = () => {
  setCurrent(current === 0 ? 2 : 2)
}

const fourthbtn = () => {
  setCurrent(current === 0 ? 3 : 3)
}


function auto() {
  slideInterval = setInterval(nxtbtn, 6000);
}

useEffect(() => {
  if(autoSlide){
    auto()
  }
  return() => clearInterval(slideInterval);
  // eslint-disable-next-line
}, [current]);


useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500) ;
}, []);

const data = (
  <>
    <Container id='home'>
    <Navbar />
    {/* <Bounce bottom cascade>
      <div className='ar'>
          <div className="ar_left" onClick={prevbtn}>
            <AiOutlineArrowLeft />
          </div>
          <div className="ar_right" onClick={nxtbtn}>
            <AiOutlineArrowRight />
          </div>
      </div>
    </Bounce> */}
      {SlideData.map((item, index) => {
        return (
          <>
            { current === index && (
                <div className="header_section" key={index}>
                  <div className="header_img">
                    <div>.</div>
                    <img src={item.img} alt="" />
                  </div>
                  <Fade cascade>
                  <div className="header_info">
                    <div className="header_info__title">
                      {item.title}
                    </div>
                    <div className="header_info__text">
                      {item.text}
                    </div>
                    <div className="header_btn">
                      <Link to="/services" reloadDocument className='btn_link' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
                        {onHover ? <p style={{display: "flex", alignItems: "center"}}>Learn More <HiArrowSmRight style={{marginLeft: "0.25rem"}}/></p> : "Learn More" }
                      </Link>
                    </div>
                  </div>
                  </Fade>
                </div>
              )
            }
          </>
        )
      })}
      <div className="selector_div">
        <div className="selector" onClick={firstbtn}>
          <div className="number">
            01
          </div>
          <div className="text">
            Engineering Support Services
          </div>
        </div>
        <div className="selector" onClick={secondbtn}>
          <div className="number">
            02
          </div>
          <div className="text">
            High Quality Materials
          </div>
        </div>
        <div className="selector" onClick={thirdbtn}>
          <div className="number">
            03
          </div>
          <div className="text">
            Asset Integrity Management
          </div>
        </div>
        <div className="selector" onClick={fourthbtn}>
          <div className="number">
            04
          </div>
          <div className="text">
            Seamless Pipes and Equipment 
          </div>
        </div>
      </div>
    <AboutInfo />
    <ContactInfo1 />
    <ContactInfo />
    <Footer />
    <Copyright href={"#home"}/>
    </Container> 
  </>
);

return (
  <>
      { loading ? 
        <>
          <div className='load'>
            <FadeLoader color="#000" height={15} width={5} loading={loading} />
          </div>
        </>  
        : 
        <>
          {data}
        </>
      }
    </>
  )
}
export default Home


const Container = styled.section`

  
  @media screen and (max-width: 985px) {

  }

  .ar{
    .ar_left{
      color: #fff;
      font-size: 2rem;

      position: absolute;
      top: 60%;
      left: 1%;
      z-index: 5;
      cursor: text;
    }

    .ar_right{
      color: #fff;
      font-size: 2rem;

      position: absolute;
      top: 60%;
      right: 1%;
      z-index: 5;
      cursor: text;
    }
  }

  .header_section{

    .header_img{
      overflow: hidden;
      height: 100vh;

      div{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00000053;
      }

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .header_info{

      @media screen and (max-width: 985px) {
        background-color: transparent;
      }

      
      position: absolute;
      top: 50%;
      left: 5%;

      padding: 2rem;
      width: 45vw;

      @media screen and (max-width: 985px){
        top: 35%;
        left: 14%;
        width: 80vw;
      }
      .header_info__title{
        color:#ddebe4;
        font-size: 48px;

        margin-bottom: 1rem;

        @media screen and (max-width: 985px){
          font-size: 34px;
        }
      }

      .header_info__text{
        color: #fff;
        font-size: 17px;
        line-height: 1.5;
        
        margin-bottom: 1.65rem;
      }

      .header_btn{
          display: flex;
          align-items: center;

        .btn_link{
            color: #fff;
            padding: 0.75rem 0.5rem;
            text-decoration: none;
            transition: 0.25s ease all;
            box-shadow: 1px 1px 3px #fff;

            &:hover{
              color: greenyellow;
              box-shadow: 1px 1px 2px greenyellow;
          }
        }
      }
    }
  }

  .selector_div{
    padding: 0rem 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 1px solid #efefef;

    @media screen and (max-width: 985px) {
      display: none;
    }
    .selector{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      cursor: pointer;
      padding: 0 2rem;
      border-right: 1px solid #efefef;

      .number{
        color: #5fb7f3;
        font-size: 28px;
        font-weight: 600;

        padding-top: 1rem;
        margin-bottom: 1rem;
      }
      .text{
        color: #000;
        font-size: 16px;
        font-weight: 600;

        padding-bottom: 2rem;
      }
    }

    .selector:nth-child(1){
      padding-left: 2rem;
      border-left: 1px solid #efefef;
    }
  }
`