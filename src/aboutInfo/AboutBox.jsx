import React from 'react'
import styled from 'styled-components'
import { AboutInfo } from './AboutInfo'
import { Fade } from "react-reveal"

const AboutBox = () => {
  return (
    <>
        { AboutInfo.map((item) => {
            return(   
                <>
                <Fade bottom>
                    <Container key={item.id}>
                        <Fade bottom>
                        <Number className="number">
                            {item.number}.
                        </Number>
                        </Fade>
                        <Fade bottom>
                        <Title className="title">
                            {item.title}
                        </Title>
                        </Fade>
                        <Fade bottom cascade>
                        <Text className="text">
                        {item.text}  <br /><br />
                        {item.text1} <br /><br />
                        {item.text2} <br /><br />
                        {item.text3} 
                        </Text>
                        </Fade>
                    </Container>
                    </Fade>
                </>
                )
            })
        }
    </>
  )
}

export default AboutBox

const Number = styled.div`
    color: #000;
    font-size: 24px;
    margin-bottom: 1.5rem;
`

const Title = styled.div`
    font-size: 24px;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const Text = styled.div`
        font-size: 17px;
        color: #444444;
        line-height: 1.5;
        padding-top: 2rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    border-radius: 4px;
    transition: 0.25s all ease;
    box-shadow: 1px 1px 3px #0000008d;

    &:hover{
        background-color: #fff;
        box-shadow: 1px 1px 3px green;  
    }

    &:hover ${Number}{
        color: green;
    }

    &:hover ${Title}{
        color: green;
    }

    &:hover ${Text}{
        color: green;   
    }

    &:active{
        background-color: #fff;
        box-shadow: 1px 1px 3px green;  
    }

    &:active ${Number}{
        color: green;
    }

    &:active ${Title}{
        color: green;
    }

    &:active ${Text}{
        color: green;   
    }
`