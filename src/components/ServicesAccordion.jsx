import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from "react-icons/fi"
import { useState } from 'react'
import { Fade } from 'react-reveal'
 // eslint-disable-next-line
import { ServiceData } from '../data/ServiceData'
 // eslint-disable-next-line
import { ServiceData1 } from '../data/ServiceData1'
import { ServiceData44 } from '../data/ServiceData44'

const ServicesAccordion = () => {
    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);

    const toggleClick = index => {
        if(clicked === index){
            return setClicked(null)
        }

        if(clicked1 === index){
            return setClicked1(null)
        }

        if(clicked2 === index){
            return setClicked2(null)
        }

        if(clicked3 === index){
            return setClicked3(null)
        }

        setClicked(index);
    };

     // eslint-disable-next-line
    const toggleClick1 = index => {
        if(clicked1 === index){
            return setClicked1(null)
        }

        if(clicked === index){
            return setClicked(null)
        }

        if(clicked2 === index){
            return setClicked2(null)
        }

        if(clicked3 === index){
            return setClicked3(null)
        }

        setClicked1(index);
    };

     // eslint-disable-next-line
    const toggleClick2 = index => {
        if(clicked2 === index){
            return setClicked2(null)
        }

        if(clicked1 === index){
            return setClicked1(null)
        }

        if(clicked === index){
            return setClicked(null)
        }

        if(clicked3 === index){
            return setClicked3(null)
        }

        setClicked2(index)
    };

     // eslint-disable-next-line
    const toggleClick3 = index => {
        if(clicked3 === index){
            return setClicked3(null)
        }

        if(clicked2 === index){
            return setClicked2(null)
        }

        if(clicked1 === index){
            return setClicked1(null)
        }

        if(clicked === index){
            return setClicked(null)
        }

        setClicked3(index);
    };

  return (
    <IconContext.Provider value={{color: "#777777", size: "13px"}}>
    <Container>
        {/* {ServiceData1.map((item, index) => {
            return(
                <>
                    <Fade>
                    <Box onClick={() => toggleClick1(index)} key={index}>
                        <Fade>
                        <div className="title">
                            <div className="number">{item.number}</div>{item.title}
                        </div>
                        </Fade>
                        <Span>
                            { clicked1 === index ? <FiMinus size={"1.45rem"}/> : <FiPlus size={"1.45rem"}/> }
                        </Span>
                    </Box>
                    </Fade>
                    {clicked1 === index ? (
                            <Fade>
                            <Dropdown>
                                <Div>
                                    <Fade>
                                    <div className="text">
                                        {item.text}
                                    </div>
                                    </Fade>
                                    <div className="more_text">
                                        <div className="lists_div">
                                            <Fade>
                                            <div className="subtitle1">
                                                {item.subtitle1}
                                            </div>
                                            </Fade>
                                            <Fade bottom cascade>
                                            <div className="lists">
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list1} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list2} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list3} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list4} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list5} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list6} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list7} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list8} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list9} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </Div>
                            </Dropdown> 
                            </Fade>
                        ) : null
                    }
                </>
            )
        })} */}
        {/* {ServiceData.map((item, index) => {
            return(
                <>
                    <Fade>
                    <Box onClick={() => toggleClick(index)} key={index}>
                        <Fade>
                        <div className="title">
                                <div className="number">{item.number}</div>{item.title}
                        </div>
                        </Fade>
                        <Span>
                            { clicked === index ? <FiMinus size={"1.45rem"}/> : <FiPlus size={"1.45rem"}/> }
                        </Span>
                    </Box>
                    </Fade>
                    {clicked === index ? (
                            <Fade>
                            <Dropdown>
                                <Div>
                                    <Fade>
                                    <div className="text">
                                        {item.text}
                                    </div>
                                    </Fade>
                                    <Fade>
                                    <div className="subtitle">
                                        {item.subtitle}
                                    </div>
                                    </Fade>
                                    <div className="more_text">
                                        <div className="lists_div">
                                            <div className="subtitle1">
                                                {item.subtitle1}
                                            </div>
                                            <Fade bottom cascade>
                                            <div className="lists">
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list1} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list2} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list3} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list4} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list5} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list6} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                        <div className="lists2_div">
                                            <Fade bottom>
                                            <div className="subtitle2">
                                                {item.subtitle2}
                                            </div>
                                            </Fade>
                                            <Fade bottom cascade>
                                            <div className="list2">
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list11} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list12} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list13} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list14} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list15} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list16} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list17} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list18} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list19} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list20} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list21} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list22} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list23} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list24} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list25} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list26} </p>
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.list27} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                        <div className="lists3_div">
                                            <Fade bottom>
                                            <div className="subtitle3">
                                                {item.subtitle3}
                                            </div>
                                            </Fade>
                                            <Fade bottom>
                                            <div className="list3">
                                                <p><BsNutFill style={{marginRight: "0.75rem", color: "#777777"}}/> {item.text2} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </Div>
                            </Dropdown> 
                            </Fade>
                        ) : null
                    }
                </>
            )
        })} */}

{ServiceData44.map((item, index) => {
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
                            { clicked === index ? <FiMinus size={"1.45rem"}/> : <FiPlus size={"1.45rem"}/> }
                        </Span>
                    </Box>
                    </Fade>
                    {clicked === index ? (
                            <Fade>
                            <Dropdown>
                                <Div>
                                    <Fade>
                                    <div className="text">
                                        {item.text}
                                    </div>
                                    </Fade>
                                    <Fade>
                                    <div className="subtitle">
                                        {item.subtitle}
                                    </div>
                                    </Fade>
                                    <div className="more_text">
                                        <div className="lists_div">
                                            <div className="subtitle1">
                                                {item.subtitle1}
                                            </div>
                                            <Fade bottom cascade>
                                            <div className="lists">
                                                <p> {item.list1} </p>
                                                <p> {item.list2} </p>
                                                <p> {item.list3} </p>
                                                <p> {item.list4} </p>
                                                <p> {item.list5} </p>
                                                <p> {item.list6} </p>
                                                <p> {item.list7} </p>
                                                <p> {item.list8} </p>
                                                <p> {item.list9} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                        <div className="lists2_div">
                                            <Fade bottom>
                                            <div className="subtitle2">
                                                {item.subtitle2}
                                            </div>
                                            </Fade>
                                            <Fade bottom cascade>
                                            <div className="list2">
                                                <p> {item.list11} </p>
                                                <p> {item.list12} </p>
                                                <p> {item.list13} </p>
                                                <p> {item.list14} </p>
                                                <p> {item.list15} </p>
                                                <p> {item.list16} </p>
                                                <p> {item.list17} </p>
                                                <p> {item.list18} </p>
                                                <p> {item.list19} </p>
                                                <p> {item.list20} </p>
                                                <p> {item.list21} </p>
                                                <p> {item.list22} </p>
                                                <p> {item.list23} </p>
                                                <p> {item.list24} </p>
                                                <p> {item.list25} </p>
                                                <p> {item.list26} </p>
                                                <p> {item.list27} </p>
                                            </div>
                                            </Fade>
                                        </div>
                                        <div className="lists3_div">
                                            <Fade bottom>
                                            <div className="subtitle3">
                                                {item.subtitle3}
                                            </div>
                                            </Fade>
                                            <Fade bottom>
                                            <div className="list3">
                                                <p>{item.text2} </p>
                                                <p>{item.text3} </p>
                                                <p>{item.text4} </p>
                                                <p>{item.text5} </p>
                                                <p>{item.text6} </p>
                                                <p>{item.text7} </p>
                                                <p>{item.text8} </p>
                                                <p>{item.text9} </p>
                                                <p>{item.text10} </p>
                                            </div>
                                            </Fade>
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

export default ServicesAccordion

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

    @media screen and (max-width: 985px) {
        padding: 2rem 0.25rem;
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;

    padding: 0.25rem;
    margin-bottom: 1rem;
    background-color: #fff;
    border: 1px solid #cfcfcf;

    cursor: pointer;
    z-index: 5;

    @media screen and (max-width: 985px) {
    
    }

    .title{
        flex: 0.8;

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
            background-color: green;
            margin-right: 0.75rem;
        }
    }
`

const Span = styled.span`
    flex: 0.2;
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
        font-size: 16px;
        font-weight: 600;
        color: #777777;
        line-height: 1.5;

        margin-bottom: 3rem;
    }

    .subtitle{
        font-size: 16px;
        font-weight: 600;
        color: #777777;

        margin-bottom: 2rem;
    }

    .more_text{

        .lists_div{
            margin-bottom: 3rem;

            .subtitle1{
                font-size: 16px;
                font-weight: 500;
                color: #777777;
                text-decoration: underline;

                margin-bottom: 1.5rem;
            }

            .lists{

                p{
                    font-size: 16px;
                    color: #777777;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }
            }
    
        }

        .lists2_div{
            margin-bottom: 3rem;

            .subtitle2{
                font-size: 16px;
                font-weight: 500;
                color: #777777;
                text-decoration: underline;

                margin-bottom: 1.5rem;
            }

            .list2{

                p{
                    font-size: 16px;
                    color: #777777;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }
            }
    
        }

        .lists3_div{
            margin-bottom: 3rem;

            .subtitle3{
                font-size: 16px;
                font-weight: 500;
                color: #777777;
                text-decoration: underline;

                margin-bottom: 2rem;
            }

            .list3{

                p{
                    font-size: 16px;
                    color: #777777;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }
            }
    
        }
    }
`

