import React from 'react'
import styled from 'styled-components'
import { BsNutFill } from "react-icons/bs"
import { FaTimes } from 'react-icons/fa'
import { Fade } from "react-reveal"

const ServicesDetails = ({ closeDiv }) => {
  return (
    <Container>
        <Fade bottom>
        <div className="box">
            <div className="top">
                <div className="top_section">
                    <Fade bottom>
                    <div className="title">
                        Asset Integrity Management Services
                    </div>
                    </Fade>
                    <div className="icon" onClick={closeDiv}>
                        <FaTimes />
                    </div>
                </div>
                <Fade bottom>
                <div className="text">
                    Geoleum has highly qualified professionals with international certifications and we offer a wide range of technical inspection services that sustains your assets, increases productivity and reduces risk for clients, host communities and employees.
                </div>
                </Fade>
            </div>
            <div className="down">
                <Fade bottom>
                <div className="title">
                    Non-Destructive Testing
                </div>
                </Fade>
                <Fade bottom>
                <div className="sub_title">
                    Conventional NDT
                </div>
                </Fade>
                <Fade bottom>
                <div className="list">
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Visual Inspection</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Ultra Sonic Testing</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Radiography</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Magnetic Particle Inspection</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Eddy Current Testing</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Dye Penetration</p>
                </div>
                </Fade>
            </div>
            <div className="down">
                <Fade bottom>
                <div className="sub_title">
                    Specialized NDT
                </div>
                </Fade>
                <div className="list">
                <Fade bottom>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Advanced UT</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> ABI Scan</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Guided Wave</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Corrosion Mapping</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Phased Array Internal </p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Long Range Ultrasonic</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Time of Flight Diffraction</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Computed Radiography</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Magnetic Flux Leakage Testing</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Tube Inspections</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Eddy Current</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Pulsed Eddy Current Testing </p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Internal Rotary Inspection System (IRIS)</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Storage Tank Cleaning &  Inspection Services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Corrosion Under Insulation</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Infrared Thermography</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Alternating Current Field Measurement</p>
                </Fade>
                </div>
            </div>
            <div className="down">
                <Fade bottom>
                <div className="sub_title">
                    Rope Access:
                </div>
                </Fade>
                <Fade bottom>
                <div className="list">
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> We also provide IRATA certified Rope Access crew.</p>
                </div>
                </Fade>
            </div>
        </div>
        </Fade>
    </Container>
  )
}

export default ServicesDetails

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