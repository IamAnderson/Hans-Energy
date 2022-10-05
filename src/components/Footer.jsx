import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Fade } from "react-reveal"

const Footer = () => {
  return (
      <Container>
        <Fade>
        <div className="left">
            <div className="div">
            <div className="box">
            <div className='blue_div'>.</div>
                <div className="title">
                    About Us
                </div>
                <div className="text">
                    Our goal is to continuously provide superior value to our clients by collaborating with them to meet their corporate objectives, supporting them to maximize their operational performance and maintaining the safety and integrity of their assets whilst allowing them concentrate on their core competences.
                </div>
            </div>
            </div>
        </div>
        </Fade>
        <Fade>
        <div className="right">
            <div className="first_div">
                <div className="title">
                    Get In Touch
                </div>
                <div className="text_list">
                    <A href='https://www.instagram.com/GeoleumEnergy' target="_blank" className='a'> <Span5 className='span'><FaInstagram /></Span5>Instagram</A>
                    <A href='https://wa.me/+2348022268491' target="_blank" className='a'> <Span className='span'><FaWhatsapp /></Span>Whatsapp</A>
                    {/* <A href='/' className='a'> <Span className='span'><AiOutlineTwitter /></Span>Twitter</A> */}
                    <A href='/' className='a'> <Span1 className='span'><FaFacebookF /></Span1>Facebook</A>
                    {/* <A href='/' className='a'> <Span2 className='span'><FaLinkedinIn /></Span2>LinkedIn</A>
                    <A href='/' className='a'> <Span3 className='span'><FaSkype /></Span3>Skype</A>
                    <A href='/' className='a'> <Span4 className='span'><FaYoutube /></Span4>Youtube</A> */}
                </div>
            </div>
            <div className="second_div">
                <div className="title">
                    Our Projects
                </div>
            </div>
            <div className="third_div">
                <div className="title">
                    Latest News
                </div>
            </div>
        </div>
        </Fade>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
    display: flex;
    align-items: flex-start;

    color: #fff;
    font-size: 16px;
    
    padding: 0 6rem;
    background: #000;

    @media screen and (max-width: 985px) {
        flex-direction: column;
        padding: 0;
    }

    .left{
        flex: 0.5;
        display: flex;
        align-items: flex-start;

        .div{
            
            .box{
                position: relative;
                display: flex;
                padding: 4rem 0;
                width: 45vw;
                background-color: #1a1a1a;
                flex-direction: column;

                @media screen and (max-width: 985px) {
                    width: 100vw;
                }
                
                .blue_div{
                    position: absolute;
                    top: -18px;
                    width: inherit;
                    color: transparent;
                    background-color: #ec4a0f;
                }
                .title{
                    padding: 0 2rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }   
    
                .text{
                    padding: 0 2rem;
                    font-weight: 500;
                    color: #a4a4a4;
                    line-height: 1.5;
                }
            }
        }
    }

    .right{
        flex: 0.5;
        
        display: flex;
        padding: 4rem 0;
        margin-left: 2rem;
        justify-content: flex-end;

        @media screen and (max-width: 985px) {
            display: none;

            /* flex-direction: column;
            padding: 4rem 2rem;
            margin-left: 0; */
        }

        .first_div{
            flex: 0.33;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            .title{
                font-weight: 600;
                margin-bottom: 2rem;
            }

            .text_list{
                display: flex;
                flex-direction: column;

                .a{
                    text-decoration: none;

                    .span{

                    }
                }
            }
        }

        .second_div{
            flex: 0.33;
            margin-bottom: 2rem;

            .title{
                font-weight: 600;
            }
        }

        .third_div{
            flex: 0.33;

            .title{
                font-weight: 600;
            }
        }
    }
`

const Span = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const Span1 = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const Span2 = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const Span3 = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const Span4 = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const Span5 = styled.span`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    font-size: 16px;
    padding: 0.5rem;
    background-color: #1a1a1a;
    transition: 0.5s ease all;
`

const A = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    margin-bottom: 1.5rem;

    &:hover ${Span} {
        /* background-color: #1c8fbd; */
        background-color: green;
    }

    &:hover ${Span1} {
        background-color: blue;
    }

    &:hover ${Span2} {
        background-color: teal;
    }

    &:hover ${Span3} {
        background-color: skyblue;
    }

    &:hover ${Span4} {
        background-color: red;
    }

    &:hover ${Span5} {
        background-color: #d6249f;
    }
`

