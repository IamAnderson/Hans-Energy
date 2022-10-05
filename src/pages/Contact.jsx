import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AiTwotonePhone } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { ImLocation2 } from 'react-icons/im'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import AlertPopup from "../components/alertMessage/AlertPopup"
import MiniNav from '../components/MiniNav'
import { Fade } from "react-reveal"

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
          setAlert(!alert)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
        <Navbar />
        <MiniNav title="Contact" />
        <Container id='contact'>
        <Fade bottom>
          <div className="top">
            <div className="img_section">
              <div className="img">
                <img src="https://upload.digoodcms.com/690/image_1663574075_L80-13CR-ZC-2-to-WAHA-OIL.jpg" alt="" />
              </div>
              <div className="img">
                <img src="https://upload.digoodcms.com/690/image_1620357048_%E5%B0%8F%E5%8F%A3%E5%BE%84%E7%AE%A1%E7%BA%BF.JPG" alt="" />
              </div>
              <div className="img">
                <img src="https://upload.digoodcms.com/690/image_1620287434_N80-Q-tubing.JPG" alt="" />
              </div>
              <div className="img">
                <img src="https://upload.digoodcms.com/690/image_1617258558_Drill-Pipe.jpg" alt="" />
              </div>
            </div>
            {/* <div className="img_section">
              <img src={img} alt="" />
            </div> */}
          </div>
        </Fade>
          <div className="middle">
            <div className="left">
              <header className="title">
              <Fade bottom>
                Contact Information
              </Fade>
              </header>
              <div className="contact_info">
              <Fade bottom>
                  <span><ImLocation2 style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> 1 Remi Olowude Street, Okunde Bluewater Scheme </span>
                  <span><ImLocation2 style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> Lekki Peninsula Scheme 1 (Marwa Bus Stop) </span>
                  <span><ImLocation2 style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> Lekki, Lagos, Nigeria </span>
                  <span><AiTwotonePhone style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> +234 802 226 8491 </span>
                  <span><HiMail style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> info@geoleum.com.ng </span>
                  <div>
                    <a href='https://wa.me/+2348022268491' target="_blank" rel='noreferrer' style={{marginRight: "0.75rem", color:"green"}}> <FaWhatsapp /> </a>
                    <a href='https://www.instagram.com/GeoleumEnergy' target="_blank" rel='noreferrer' style={{marginRight: "0.75rem", color:"#d6249f"}}> <FaInstagram /> </a>
                  </div>
              </Fade> 
              </div>
            </div>

            <div className="right">
              <Fade bottom>
              <div className="form">
                <div className="title">
                <Fade bottom>
                  <div>Message Us</div>
                </Fade>
                </div> 
                {alert ? <AlertPopup removeAlert={() => {setAlert(!alert)}}/> : null}
                <Fade bottom>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input__section">
                    <input type="text" placeholder='Name' name='user_name' required />
                    <input type="text" placeholder='Email' name='user_email' required />
                    <textarea type="text" className='input__message' placeholder='Message' name='message' required />
                    <div className="btn__section">
                      <button type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                </Fade>
              </div>
              </Fade>
            </div>
          </div>
          <Fade bottom>
          <div className="down">
            <MapContainer center={[6.427503011157914, 3.468543743415752]} zoom={15} scrollWheelZoom={false}>
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[6.427503011157914, 3.468543743415752]}>
              <Popup>
                Geoleum Energy.
              </Popup>
              </Marker>
            </MapContainer>
          </div>
          </Fade>
        </Container>
        <Footer />
        <Copyright href={"/contact"}/>
    </>
  )
}

export default Contact

const Container = styled.section`
  padding: 0 6rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 985px) {
      padding: 0 2rem;
      margin-bottom: 4rem;
  }

  .top{
    margin-bottom: 2rem;

    .img_section{
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* column-gap: 1rem;
      grid-gap: 1rem; */
      
      .img{
      
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    /* .img_section{
      max-height: 85vh;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    } */
  }
  
  .middle{
    display: flex;
    align-items: flex-start;
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid #4444447d;

    @media screen and (max-width: 985px) {
      flex-direction: column;
    }

    .left{
      flex: 0.5;

      @media screen and (max-width: 985px) {
        margin-bottom: 2rem;
      }

      .title{         
        font-size: 28px;
        color: #777777;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .contact_info{
        display: flex;
        flex-direction: column;

      span{
          display: flex;
          align-items: flex-end;

          font-size: 15px;
          color: #444444;
          margin-bottom: 1rem;
        }

        div{
            display: flex;
            align-items: flex-start;

          a{
            font-size: 2rem;
            transition: 0.15s ease all;

            &:hover{
                color: #000;
            }
          }
        }
      }
    }

    .right{
      flex: 0.5;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 985px) {
        align-items: flex-start;
      }

    .form{

      .title{
        display: flex;
        justify-content: flex-start;
        
        font-size: 28px;
        color: #777777;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      form{

        .input__section{
          display: flex;
          flex-direction: column;

        input{
          width: 25rem;
          padding: 1rem 0.25rem;
          margin-bottom: 1.25rem;
          border: none;
          outline: none;
          box-shadow: 1px 1px 2px #00000090;

          @media screen and (max-width: 985px) {
            width: 20rem;
          }

          @media screen and (max-width: 370px) {
            width: 17rem;
          }
        }

        .input__subject{
          padding: 2rem 0.25rem;
        }

        textarea{
          width: 25rem;
          padding: 2.5rem 0.25rem;
          margin-bottom: 1.25rem;
          border: none;
          outline: none;
          box-shadow: 1px 1px 2px #00000090;

          @media screen and (max-width: 985px) {
            width: 20rem;
          }

          @media screen and (max-width: 370px) {
            width: 17rem;
          }
        }
    
        .btn__section{
          display: flex;
          justify-content: flex-start;

            button{
              color: #000;
              padding: 0.75rem 0.5rem;
              letter-spacing: 0.25rem;
              text-transform: uppercase;
              text-decoration: none;
              transition: 0.25s ease all;
              box-shadow: 1px 1px 2px #000;
              border: none;
              outline: none;

              &:hover{
                color: green;
                box-shadow: 1px 1px 2px green;
              }
            }
          }
        }
      }
    }
  }
}

  .down{
    height: 70vh;

    @media screen and (max-width: 985px) {
        height: 40vh;
    }

    .leaflet-container{
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
`