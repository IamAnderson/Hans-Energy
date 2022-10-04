import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from "react-icons/fi"
import { AboutData } from "../data/AboutData"
import { useState } from 'react'
import { Fade } from 'react-reveal'

const AboutAccordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggleClick = index => {
        if(clicked === index){
            return setClicked(null)
        }

        setClicked(index);
    };

  return (
    <IconContext.Provider value={{color: "#777777", size: "23px"}}>
    <Container>
        <Fade bottom>
        <div className="title">
            Geoleum Energy
        </div>
        </Fade>
        {AboutData.map((item, index) => {
            return(
                <div key={index}>
                    <Fade>
                    <Box onClick={() => toggleClick(index)} key={index}>
                        <Fade>
                        <div className="title">
                                <div className="number">{item.number}</div>{item.title}
                        </div>
                        </Fade>
                        <Span>
                            { clicked === index ? <FiMinus /> : <FiPlus /> }
                        </Span>

                    </Box>
                    </Fade>
                    {clicked === index ? (
                            <Fade bottom>
                            <Dropdown>
                                <Div>
                                    <div className="text">
                                        {item.text}
                                    </div>
                                    <div className="more_text">
                                        <div className="div_1">
                                        <div className="subtitle1">
                                            {item.subtitle1}
                                        </div>
                                        <div className="text1">
                                            {item.text1}
                                        </div>
                                        </div>
                                        <div className="div_2">
                                        <div className="subtitle2">
                                            {item.subtitle2}
                                        </div>
                                        <div className="text2">
                                            {item.text2}
                                        </div>
                                        </div>
                                        <div className="div_3">
                                        <div className="subtitle3">
                                            {item.subtitle3}
                                        </div>
                                        <div className="text3">
                                            {item.text3}
                                        </div>
                                        </div>
                                        <div className="div_4">
                                        <div className="text4">
                                            {item.text4}
                                        </div>
                                        </div>
                                    </div>
                                </Div>
                            </Dropdown> 
                            </Fade>
                        ) : null
                    }
                </div>
            )
        })}
    </Container>
    </IconContext.Provider>
  )
}

export default AboutAccordion

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 16px;
    width: 100%;
    padding: 2rem 3rem;
    box-shadow: 1px 1px 3px #cfcfcf;

    .title{
        font-size: 22px;
        font-weight: 600;
        color: #000;
        margin-bottom: 2rem;
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;

    padding: 0.25rem;
    margin-bottom: 1rem;
    border-radius: 50px;
    background-color: #fff;
    border: 1px solid #cfcfcf;

    cursor: pointer;
    z-index: 5;

    .title{
        flex: 0.5;

        display: flex;
        align-items: center;
        font-size: 16px;
        margin-bottom: 0;

        .number{
            display: flex;
            align-items: center;

            color: #fff;
            padding: 0.25rem 0.5rem;
            font-weight: 600;
            border-radius: 50%;
            background-color: #5fb7f3;
            margin-right: 0.75rem;
        }
    }
`

const Span = styled.span`
    flex: 0.5;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    z-index: 5;
    cursor: pointer;
`

const Dropdown = styled.div`
    
`

const Div = styled.div`
    display: flex;
    flex-direction: column;

    .text{
        color: #777777;
        line-height: 1.5;
    }

    .more_text{

        .div_1{
            margin-bottom: 1.5rem;

            .subtitle1{
                color: #777777;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .text1{
                color: #777777;
                line-height: 1.5;
            }
        }
        .div_2{
            margin-bottom: 1.5rem;

            .subtitle2{
                color: #777777;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .text2{
                color: #777777;
                line-height: 1.5;
            }
        }
        .div_3{
            margin-bottom: 1.5rem;

            .subtitle3{
                color: #777777;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .text3{
                color: #777777;
                line-height: 1.5;
            }
        }
        .div_4{

            .text4{
                color: #777777;
                line-height: 1.5;
            }
        }
    }
`

