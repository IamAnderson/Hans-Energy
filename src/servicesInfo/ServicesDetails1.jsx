import React from 'react'
import styled from 'styled-components'
import { BsNutFill } from "react-icons/bs"
import { FaTimes } from 'react-icons/fa'
import { Fade } from "react-reveal"

const ServicesDetails1 = ({ closeDiv }) => {
  return (
    <Container>
        <Fade bottom>
        <div className="box">
            <div className="top">
                <div className="top_section">
                    <Fade bottom>
                    <div className="title">
                        Engineering support
                    </div>
                    </Fade>
                    <div className="icon" onClick={closeDiv}>
                        <FaTimes />
                    </div>
                </div>
                <Fade bottom>
                <div className="text">
                    Partnering with renowned Original Equipment Manufacturers and strategic alliances, Geoleum provides engineering support for offshore / onshore projects which includes but not limited to the following: 
                </div>
                </Fade>
            </div>
            <div className="down">
                <div className="title">
                    Mechanical / Piping
                </div>
                <Fade bottom>
                <div className="list">
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Pipe Stress Analysis</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Pipe Dynamic / Vibration Analysis</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Piping System Design</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Piping Specification</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Piping Drawing</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Equipment Specifications</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Platform Layout / General Arrangement</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Project Planning</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Project Procurement</p>
                </div>
                </Fade>
            </div>
        </div>
        </Fade>
    </Container>
  )
}

export default ServicesDetails1

const Container = styled.div`
    display: flex;
    justify-content: center;

    opacity: 0.9;
    background-color: #000000ef;
    padding: 3rem 0 1rem 0;

    height: 100vh;
    width: 98.7vw;
    position: fixed;
    top: 0%;
    z-index: 9;

    @media screen and (max-width: 985px) {
        padding: 4rem 0 1.5rem 0;    
    }

    .box{
        margin-top: 5rem;
        max-height: 100vh;
        width: 80%;
        padding: 2rem;
        overflow: scroll;
        background-color: #fff;

        .top{
            display: flex;
            flex-direction: column;
            
            margin-bottom: 2rem;

            .top_section{
                display: flex;
                align-items: flex-start;

                .title{
                    flex: 0.9;

                    font-size: 22px;
                    color: #777777;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                }

                .icon{
                    flex: 0.1;
                    font-size: 1.5rem;

                    display: flex;
                    justify-content: flex-end;  

                    cursor: pointer;
                    transition: 0.25s all ease;
                    
                    &:active{
                        transform: scale(90%);
                    }
                }
            }
            .text{
                color: #000;
                font-size: 16px;
                line-height: 1.55;
            }
        }
    
        .down{
            margin-bottom: 3rem;

            .title{
                font-size: 18px;
                color: #777777;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .sub_title{
                color: #777777;
                font-size: 18px;
                font-weight: 400;
                text-decoration: underline;
                margin-bottom: 1.5rem;
            }
            
            .list{
                
                p{
                    margin-bottom: 1rem;
                }
            }
        }
    }
`