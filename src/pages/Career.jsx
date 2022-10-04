import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import MiniNav from '../components/MiniNav'
import { Fade } from "react-reveal"

const Career = () => {
  return (
    <>
        <Navbar />
        <MiniNav title="Careers" />
        <Container id='career'>
        <Fade bottom>
          <div className="text">
            Currently no vacancies available...Please check back in the future
          </div>
        </Fade>
          <div className="enquires">
            <Fade bottom>
            <div className="text">
              Still have questions?
            </div>
            </Fade>
            <Fade bottom>
            <div className="btn_section">
            <div className="btn">
              <Link to="/contact" reloadDocument className='btn_link'>
                Contact Us
              </Link>
            </div>
          </div>
          </Fade>
          </div>
        </Container>
        <Footer />
        <Copyright href="/careers"/>
    </>
  )
}

export default Career

const Container = styled.section`
  padding: 0 6rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 985px) {
      padding: 0 2rem;
      margin-bottom: 4rem;
  }
  
  .text{
    font-size: 18px;
    color: #5fb7f3;
    margin-bottom: 12rem;
  }
  
  .enquires{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .text{
      color: #000;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 0;
    }

    .btn_section{
      margin-left: 2rem;

      @media screen and (max-width: 985px) {
        margin-bottom: 2rem;  
      }
      .btn{
        
        .btn_link{
          color: #000;
          padding: 0.75rem 0.5rem;
          text-decoration: none;
          transition: 0.25s ease all;
          box-shadow: 1px 1px 2px #000;

          &:hover{
            color: green;
            box-shadow: 1px 1px 2px green;
          }
        }
      }
    }
  }
`