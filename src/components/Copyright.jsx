import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowUp from './ArrowUp'
import { Fade } from 'react-reveal'
import { ContactData } from '../data/ContactData'
import { HiArrowRight } from 'react-icons/hi'

const Copyright = ({href}) => {
    const [current, setCurrent] = useState(0);
    let slides = ContactData;
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
    <Container>
        <Fade>
            <div className="top">
                <div className="left">
                        <span>Looking For <>{ContactData.map((item, index) => {
                        return(
                            <div key={index}>
                                {current === index && (
                                    <Fade left><p key={index}> {item.text} </p></Fade>
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
        <div className="container">
            <Fade>
            <div className="left">
                <div className='text'>
                    © 2022 Hans Energy. All rights reserved{/*| <span className='_dev'> Built by <Link to={{pathname: "//portfolio-iamanderson.vercel.app/"}} target= "_blank" >Andy</Link> </span> */}
                </div>
                <div className="div">
                    <div className='text2'>
                        Terms
                    </div>
                    <div className='text3'>
                        Privacy Policy
                    </div>
                    <div className='careers'>
                        <Link to='/careers' reloadDocument> Careers</Link>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade>
            <div className="right">
                <ArrowUp href={href}/>
            </div>
            </Fade>
        </div>
    </Container>
  )
}

export default Copyright

const Container = styled.div`
    display: flex;
    flex-direction: column;


    .top{
        display: flex;
        align-items: center;
        padding: 4rem 6rem;
        /* background-color: #efefef; */
        background-color: #1a1a1a;

        @media screen and (max-width: 985px) {
            flex-direction: column;
            padding: 2rem;
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

                color: #ec4a0f;
                font-size: 22px;
                font-weight: 600;

                p{
                    margin: 0 0.5rem;
                    color: green;
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
                color: #ec4a0f;
                text-decoration: none;
            }
        }
    }

        .text{
            display: flex;
            align-items: center;

            color: #fff;
            font-size: 34px;
            font-family: Arial;

            @media screen and (max-width: 985px) {
                font-size: 24px;
            }
            
            p:nth-child(1){
                font-weight: 400;

                margin-right: 0.75rem;
            }

            p:nth-child(2){
                font-weight: 600;
            }
        }

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #fff;
        background-color: #1a1a1a;
        /* border-top: 1px solid #efefef; */

        padding: 2rem 6rem;

        position: relative;

        @media screen and (max-width: 985px) {
            padding: 2rem;
            flex-direction: column;
            align-items: center;
        }

        .left{
            display: flex;
            align-items: center;

            @media screen and (max-width: 985px) {
                flex-direction: column;
            }

            .text{
                display: flex;
                align-items: center;

                font-size: 14px;
                padding-right: 1rem;
                border-right: 1px solid #fff;
                
                ._dev{
                    font-size: 11px;
                    margin-left: 0.25rem;
                    a{
                        font-size: 13px;
                        color: #fff;
                    }
                }
            }
            
            .div{
                display: flex;
                align-items: center;

                @media screen and (max-width: 985px) {
                    justify-content: flex-start;
                    width: 100%;
                    margin-top: 2rem;
                }

                .text2{
                    font-size: 14px;
                    padding: 0 1rem;
                    border-right: 1px solid #fff;
                }

                .text3{
                    font-size: 14px;
                    margin-right: 1rem;
                    padding-left: 1rem;
                }
                
                .careers{
                    display: flex;
                    align-items: center;
                    box-shadow: 1px 1px 3px #fff;
                    a{
                        font-size: 16px;
                        color: #fff;
                        padding: 0.25rem;
                        text-decoration: none;
                    }
                }
            }
        }

        .right{

            @media screen and (max-width: 985px) {
                position: absolute;
                right: 5%;
                top: 60%;
            }
        }
    }
`