import React from 'react'
import styled from 'styled-components'
import { BsNutFill } from "react-icons/bs"
import { FaTimes } from 'react-icons/fa'
import { Fade } from "react-reveal"

const ServicesDetails3 = ({ closeDiv }) => {
  return (
    <Container>
        <div className="box">
            <div className="top">
                <div className="top_section">
                    <Fade bottom>
                    <div className="title">
                        Environmental Management Consultancy
                    </div>
                    </Fade>
                    <div className="icon" onClick={closeDiv}>
                        <FaTimes />
                    </div>
                </div>
                <Fade bottom>
                <div className="text">
                    With a team of highly professional and experienced multi-disciplined staff of scientists, engineers and other consultants. Geoleum offers a complete range of environmental consulting services to our clients in the property and construction, infrastructure, industry, energy, public sectors and ensure that we work hard to provide the required consulting services and solutions needed to accomplish their business goals and objectives.
                </div>
                </Fade>
            </div>
            <div className="down">
                <Fade bottom>
                <div className="list">
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Natural resource management consulting services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Environmental assessments</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Site remediation services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Environmental audits</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Waste management consulting services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Policy, licensing and litigation support services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Specialized environmental consulting services</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Contamination control consulting</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Radiography</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Risk evaluation</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Air and water quality consulting</p>
                    <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> Sustainable development consulting</p>
                </div>
                </Fade>
            </div>
        </div>
    </Container>
  )
}

export default ServicesDetails3

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