import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import img from "../assets/img9.png"

const ContactInfo1 = () => {
  const text = "We have been trusted advisors to the world’s biggest companies, and we continue to grow with the help of more than 20,000 people in our global network";

  return (
    <Container id='about'>
      <Fade bottom>
      <section className="about">
        <Fade bottom>
            <div className="right">
            <div className="img_section">
                <img src={img} alt="" />
            </div>
            </div>
            </Fade>
        <Fade bottom cascade>
        <div className="left">
          <div className="heading">
            Hans Energy, where?
          </div>
          <div className="title">
            Available Worldwide
          </div>
          <div className="text">
            {text}
          </div>
          <Fade>
          <div className="btn_section">
            <div className="btn">
              <Link to="/contact" reloadDocument className='btn_link'>
                Contact Us
              </Link>
            </div>
          </div>
          </Fade>
        </div>
        </Fade>
      </section>
      </Fade>
    </Container>
  )
}

export default ContactInfo1

const Container = styled.div`
    margin: 2rem 0;
    margin-bottom: 4rem;
    
    .about{
      display: flex;
      align-items: flex-start;
      padding: 2rem 6rem;
      
      @media screen and (max-width: 985px) {
        padding: 0 2rem;
        flex-direction: column;
      }

      .right{
        flex: 0.55;
        padding: 0 0rem 0 3rem;

        @media screen and (max-width: 985px) {
          padding: 0;
        }

        .img_section{
          max-height: 50vh;
          overflow: hidden;

          @media screen and (max-width: 985px) {
            overflow: hidden;
          }

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .left{
        flex: 0.45;

        .heading{
          font-size: 15px;
          color: #777777;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .title{
          font-size: 28px;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .text{
          font-size: 16px;
          line-height: 1.8;
          color: #444444;
          margin-bottom: 1.5rem;  
        }

        .btn_section{
          
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
    }
`