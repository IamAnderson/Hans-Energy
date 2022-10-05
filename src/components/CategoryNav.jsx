import React, { useState } from 'react'
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { CategoryData } from '../data/CategoryData';

const CategoryNav = () => {
    const [clicked, setClicked] = useState(false);

    const toggleClick = index => {
        if(clicked === index){
            return setClicked(null)
        }

        setClicked(index);
    };

    let activeStyle = {
        color: "green"
      }

  return (
    <Container>
        {CategoryData.map((item, index) => {
            return(
                <div key={index}>
                    <Fade>
                    <Box onClick={() => toggleClick(index)} key={index}>
                        <Fade>
                        <div className="title">
                            Categories
                        </div>
                        </Fade>
                        <Span>
                            { clicked === index ? <HiOutlineChevronDoubleUp /> : <HiOutlineChevronDoubleDown /> }
                        </Span>

                    </Box>
                    </Fade>
                    {clicked === index ? (
                            <Fade bottom>
                            <Dropdown>
                                    <NavLink to="/products" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                        {item.text9}
                                    </NavLink>
                                    <NavLink to="/otcg" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                        {item.text}
                                    </NavLink>
                                        <NavLink to="/seamlesspipe" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                        {item.text1}
                                        </NavLink>
                                        <NavLink to="/welded" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                        {item.text2}
                                        </NavLink>
                                        <NavLink to="/stainless" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text3}
                                        </NavLink>
                                        <NavLink to="/pipe" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text4}
                                        </NavLink>
                                        <NavLink to="/plug" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text5}
                                        </NavLink>
                                        <NavLink to="/spe" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text6}
                                        </NavLink>
                                        <NavLink to="/cables" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text7}
                                        </NavLink>
                                        <NavLink to="/others" reloadDocument className="text" style={({isActive}) => isActive ? activeStyle : null}>
                                            {item.text8}
                                        </NavLink>
                            </Dropdown> 
                            </Fade>
                        ) : null
                    }
                </div>
            )
        })}
    </Container>
  )
}

export default CategoryNav

const Container = styled.div`
    display: none;


    @media screen and (max-width: 985px) {
        display: block;
        width: 100%;
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
    margin-bottom: 1.25rem;
    border: 1px solid #ec4a0f;
    width: 100%;

    cursor: pointer;
    z-index: 5;

    .title{
        flex: 0.5;

        display: flex;
        align-items: center;
        font-size: 18px;
        color: #2e2d2d;

        margin-bottom: 0;
    }
`

const Span = styled.span`
    flex: 0.5;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    font-size: 1.2rem;

    z-index: 5;
    cursor: pointer;
`

const Dropdown = styled.div`
    
    .text{
        display: flex;
        align-items: center;
        
        font-size: 16px;
        color: #2e2d2d;

        padding: 0.5rem;
        border: 1px solid #c4c4c4;
        margin-bottom: 2rem;

        text-decoration: none;
        cursor: pointer;
    }
`