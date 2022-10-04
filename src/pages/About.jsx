import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import GearBg from '../components/GearBg'
import MiniNav from '../components/MiniNav'
import { Fade } from "react-reveal"
import AboutAccordion from '../components/AboutAccordion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { ContactData } from '../data/ContactData'

const About = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  let autoSlide = true;
  let slideInterval;

  const nxtbtn = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };

  function auto() {
    slideInterval = setInterval(nxtbtn, 3000);
  }
  
  useEffect(() => {
    if(autoSlide){
      auto()
    }
    return() => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [current]);
  
  return (
    <>
      <Navbar />
      <MiniNav title="About" />
      <Container id='about'>
        <div className="box">
          <section className="left">
            <Fade bottom>
            <header className="title">
              About Us
            </header>
            </Fade>
            <article className="text_section">
            <Fade bottom cascade>
              <div className="text_left">
                <article className="text">
                Geoleum Energy Limited offers <b> asset integrity and engineering solutions</b> to the Energy and Non-Energy sectors in Nigeria and the Gulf of Guinea. 
                </article>
                <article className="text">
                  Our goal is to continuously provide superior value to our clients by collaborating with them to meet their corporate objectives, supporting them to maximize their operational performance and maintaining the safety and integrity of their assets whilst allowing them concentrate on their core competences.
                </article>
              </div>
              </Fade>
              <Fade bottom cascade>
              <div className="text_right">
                <article className="text">
                  These specialized service packages are offered through the combined expertise and dedication of our highly motivated staff and strategic partners.
                </article>
                <article className="text">
                  Our commitment to execute and complete projects on schedule with high standards of quality and safety, the ability to nurture long lasting relationships with clients and constantly motivating our team is a trademark of our services.
                </article>
              </div>
              </Fade>
            </article>
          </section>
          <Fade>
          <div className="right">
            <AboutAccordion />
          </div>
          </Fade>
        </div>
        <Fade>
        <div className="down">
          <div className="left">
            <span>Looking For <>{ContactData.map((item, index) => {
              return(
                <div key={index}>
                  {current === index && (
                    <p key={index}> {item.text} </p>
                  )}
                </div>
              )
            })}</> ? </span>
          </div>
          <div className="right">
            <Link to='/contact' className='nav_link'>Contact Us Today <HiArrowRight /> </Link>
          </div>
        </div>
        </Fade>
      </Container>
      <GearBg />
      <Footer />
      <Copyright href="/about"/>
    </>
  )
}

export default About

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .box{
    display: flex;
    align-items: flex-start;

    padding: 0 6rem;
    margin-bottom: 4rem;

  @media screen and (max-width: 985px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    margin-bottom: 4rem;

      padding: 0 2rem;
      margin-bottom: 4rem;
  }


    .left{
      flex: 0.5;

      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      margin-bottom: 4rem;

      .title{
        font-size: 22px;
        font-weight: 600;
        color: #000;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .text_section{
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 985px) {
          flex-direction:column;
          align-items: center;
        }

        .text_left{
          flex: 0.5;

          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          
          .text{
            color: #777777;
            line-height: 1.65;
          }

          .text:nth-child(1){
            margin-bottom: 1rem;
          }
        }

        .text_right{
          flex: 0.5;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          @media screen and (max-width: 985px) {
            margin-left: 0;
          }

          .text{
            color: #777777;
            line-height: 1.65;
          }

          .text:nth-child(1){
            margin-bottom: 1rem;
          }
        }
        
      }
    }

    .right{
      flex: 0.5;

      display: flex;
      align-items: flex-start;
      justify-content: center;

      @media screen and (max-width: 985px) {
        width: 100vw;
      }
    }
  }
  .down{
    display: flex;
    align-items: center;
    padding: 4rem;
    background-color: #efefef;

    @media screen and (max-width: 985px) {
      flex-direction: column;
    }
   
    .left{
      flex: 0.5;
      font-size: 22px;

      @media screen and (max-width: 985px) {
        margin-bottom: 2rem;
      }

      span{
        display: flex;
        align-items: center;

        color: #000;
        font-size: 22px;
        font-weight: 600;

        p{
          margin: 0 0.5rem;
          color: #5fb7f3;
        }
      }
    }

    .right{
      flex: 0.5;

      display: flex;
      justify-content: flex-end;

      .nav_link{
        display: flex;
        align-items: center;

        font-size: 18px;
        color: #ce1b28;
        text-decoration: none;
      }
    }
  }
`