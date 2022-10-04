import React from 'react'
import styled from 'styled-components'
import { BsNutFill } from "react-icons/bs"
import { FaTimes } from 'react-icons/fa'
import { Fade } from "react-reveal"

const ServicesDetails2 = ({ closeDiv }) => {
  return (
    <Container>
        <div className="box">
            <div className="top">
                <div className="top_section">
                    <Fade bottom>
                    <div className="title">
                        Marine Support Service
                    </div>
                    </Fade>
                    <div className="icon" onClick={closeDiv}>
                        <FaTimes />
                    </div>
                </div>
                <Fade bottom>
                <div className="text">
                    Marine operators require ancillary services for operational, safety and regulatory purposes. At Geoleum, we continue to provide these quality products and services to the marine sector whilst allowing you concentrate on your core competences.
                </div>
                </Fade>
            </div>
            <div className="down">
                <Fade bottom>
                <div className="list">
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Dry Docking Services.</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Procurement Support Services.</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Servicing of Life Saving Appliances</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Testing & Certification of Fire and Gas systems</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Onshore/Offshore Painting Services.</p>
                </div>
                </Fade>
            </div>
        </div>
    </Container>
  )
}

export default ServicesDetails2

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