import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import img from "../assets/img12.jpg"
import { Fade } from "react-reveal"
import { Link } from 'react-router-dom'
import ServicesAccordion from '../components/ServicesAccordion'

const Services = () => {
  return (
    <>
        <Navbar />
        <Container id='services'>
          <div className="top">
            <div className="left">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="text">
                We have been trusted advisors to the world's biggest companies, and we continue to grow with the help of<span>20,000 people</span> in our global network
              </div>
            </div>
          </div>
          <div className="middle">
            <Fade bottom>
            <div className="text">
              Hans Energy Services
            </div>
            </Fade>
            <Fade bottom>
            <div className="btn_section">
            <div className="btn">
              <Link to="/contact" reloadDocument className='btn_link'>
                send free enquiry
              </Link>
            </div>
          </div>
          </Fade>
          </div>
          <div className="down">
            <ServicesAccordion />
          </div>
        </Container>
        <Footer />
        <Copyright href={"/services"}/>
    </>
  )
}

export default Services

const Container = styled.div`

  .top{
    display: flex;
    align-items: center;
    
    padding: 2rem 6rem;
    margin-bottom: 4rem;
    /* background-color: #008000be; */
    background-color: #ec4a0fd8;

    @media screen and (max-width: 985px) {
      flex-direction: column;

      padding: 2rem;
      margin-bottom: 4rem;
    }

    .left{
      flex: 0.5;

      @media screen and (max-width: 985px) {
        margin-bottom: 2rem;
      }
      
      .img{
        padding: 0 2rem;
        max-height: 60vh;
        max-width: 40vw;
        overflow: hidden;
        
        @media screen and (max-width: 985px) {
          max-width: 100vw;
          padding: 0;
        }

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .right{
      flex: 0.5;
      display: flex;
      justify-content: flex-end;

      .text{
        padding: 0  rem;
        font-size: 24px;
        font-weight: 600;
        color: #fff;

        span{
          color: blanchedalmond;
          margin-left: 0.5rem;
        }
      }
    }
  }

  .middle{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 4rem 6rem;
    margin-bottom: 4rem;
    background-color: #efefef;

    @media screen and (max-width: 985px) {
      flex-direction: column;
      align-items: center;

      padding: 2rem;
      margin-bottom: 4rem;
    }

    .text{
      color: #000;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 0;
    }

    .btn_section{

      @media screen and (max-width: 985px) {
        margin-top: 2rem;
      }
      .btn{
        
        .btn_link{
          color: #fff;
          background-color: #000;
          padding: 0.75rem 0.5rem;
          text-decoration: none;
          transition: 0.25s ease all;
          text-decoration: underline;
          box-shadow: 1px 1px 2px #fff;

          &:hover{
            color: green;
            box-shadow: 1px 1px 2px green;
          }
        }
      }
    }
  }

  .down{
    display: flex;
    align-items: center;

    padding: 0rem 6rem;
    margin-bottom: 4rem;

    @media screen and (max-width: 985px) {
      padding: 0 2rem;
      margin-bottom: 4rem;
      width: 100vw;
    }
  }
`