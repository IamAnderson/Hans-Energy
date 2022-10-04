import React from 'react'
import styled from 'styled-components'
import { HiPlus } from "react-icons/hi"
import { Fade } from "react-reveal"

const ServicesBox = ({toggleDetails}) => {
    
  return (
    <Container>
        <section className="div">
            <div className="left">
                <Fade bottom>
                <header className="title">
                    Asset Integrity Management Services
                </header>
                </Fade>
                <Fade bottom>
                <article className="text">
                    Geoleum has highly qualified professionals with international certifications and we offer a wide range of technical inspection services that sustains your assets, increases productivity and reduces risk for clients, host communities and employees.
                </article>
                </Fade>
            </div>
            <div className="right">
                <Fade bottom>
                <div className="icon" onClick={toggleDetails}>
                    View<br /> More <HiPlus style={{marginLeft: "1rem"}}/>
                </div>
                </Fade>
            </div>
        </section>
    </Container>
  )
}

export default ServicesBox

const Container = styled.section`
    position: relative;

    padding: 2rem;
    box-shadow: 1px 1px 3px #000;

    .div{
        display: flex;
        align-items: flex-start;

        .left{
            flex: 0.7;

            display: flex;
            flex-direction: column;

            .title{
                font-size: 24px;
                color: #000;
                text-transform: uppercase;
                margin-bottom: 1.5rem;
            }
                
            .text{
                color: #777777;
                line-height: 1.55;
            }
        }

        .right{
            flex: 0.3;
            
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            height: 100%;

            .icon{
                display: flex;
                align-items: flex-start;

                font-size: 16px;
                color: #000;
                padding: 0.5rem 0.75rem;
                cursor: pointer;
                box-shadow: 1px 1px 3px #000;
                transition: 0.25s all ease;

                &:hover{
                    color: green;
                    box-shadow: 1px 1px 3px green;
                }

                &:active{
                    transform: scale(90%);
                }
            }
        }   
    }
`