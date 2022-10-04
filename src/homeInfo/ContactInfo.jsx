import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import img from "../assets/img8.jpg"
import { BsArrowRight } from 'react-icons/bs';

const ContactInfo = () => {
  return (
    <Container id='contact'>
      <div className="box">
        <div className="img">
          <div>.</div>
          <img src={img} alt="" />
        </div>

      <Fade>        
        <div className="info">
          <div className="title">
              TECHNOLOGY PARTNERS
          </div>
          <div className="sub_title">
            We work in partnership with all the major technology suppliers, developing first class solutions for our clients.
          </div>
          <div className="btn_section">
            <div className="btn">
              <Link to="/contact" reloadDocument className='btn_link'>
                Contact Us <BsArrowRight style={{marginLeft: "0.5rem", fontSize: "1.5rem"}}/>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
      </div>
    </Container>
  )
}

export default ContactInfo

const Container = styled.div`

  .box{
    position: relative;

    .img{
      height: 60vh;
      position: relative;

      @media screen and (max-width: 985px) {
        height: 50vh;
      }
      
      div{
        color: transparent;
        height: 100%;
        width: 100%;
        background-color: #f30d1d;
        opacity: 0.65;
        
        position: absolute;
      }
      
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .info{
      position: absolute;
      top: 30%;
      right: 20%;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      
      @media screen and (max-width: 985px) {
        right: 5%;
      }

      .title{
        color: #fff;
        font-size: 16px;
        
        margin-bottom: 1.5rem;
        letter-spacing: 0.5rem;
      }
      
      .sub_title{
        color: #000;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 2rem;

        @media screen and (max-width: 985px) {
          width: 90%;
        }
      }
      
      .btn_section{
    
        .btn{
          
          .btn_link{
            display: flex;
            align-items: center;

            color: #fff;
            background-color: #000;
            border-radius: 40px;
            font-size: 16px;
            font-weight: 600;
            
            padding: 0.35rem 1.5rem;
            text-decoration: none;
            transition: 0.25s ease all;
            
            &:hover{
                box-shadow: 1px 1px 2px #fff;
              }
            }
          }
        }
      }  
    }
`