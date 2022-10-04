import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowUp from './ArrowUp'
import { Fade } from 'react-reveal'

const Copyright = ({href}) => {
  return (
    <Container>
        <Fade>
            <div className="top">
                <div className="text">
                    Get in touch +234 802 226 8491
                </div>
            </div>
        </Fade>
        <div className="container">
            <Fade>
            <div className="left">
                <div className='text'>
                    © 2022 Geoleum Energy. All rights reserved | <span className='_dev'> Built by <Link to={{pathname: "//portfolio-iamanderson.vercel.app/"}} target= "_blank" >Andy</Link> </span>
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

        padding: 3rem 6rem;

        background-color: #006584;

        @media screen and (max-width: 985px) {
            padding: 2rem;
            justify-content: center;
        }

        .text{
            color: #fff;
            font-family: Times;
            font-size: 26px;
        }
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #fff;
        background-color: #1a1a1a;

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