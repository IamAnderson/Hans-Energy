import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = ({ showNav, closeNav }) => {
let activeStyle = {
    color: "#5fb7f3",
};

  return (
    <Container showSidebar={showNav} showSidebar1={showNav}>
        <div className="sidebar_div">
            <NavLink to="/" className='navlink' reloadDocument style={({isActive}) => isActive ? activeStyle : null} onClick={closeNav}>Home</NavLink>
            <NavLink to="/about" className='navlink' reloadDocument style={({isActive}) => isActive ? activeStyle : null} onClick={closeNav}>About</NavLink>
            <NavLink to="/services" className='navlink' reloadDocument style={({isActive}) => isActive ? activeStyle : null} onClick={closeNav}>Services</NavLink>
            <NavLink to="/products" className='navlink' reloadDocument style={({isActive}) => isActive ? activeStyle : null}>Products</NavLink>
            <NavLink to="/careers" className='navlink' reloadDocument style={({isActive}) => isActive ? activeStyle : null} onClick={closeNav}>Careers</NavLink>
        </div>
    </Container>
  )
}

export default Sidebar

const Container = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: #000;
    height: 23vh;
    width: 100%;
    transition: 0.5s ease all;
    z-index: 12;    
    
    position: fixed;
    top: ${({showSidebar1}) => (showSidebar1 ? "15%" : "-100%")};
    right: 0;
    opacity: ${({showSidebar}) =>  (showSidebar ? "1" : "0")};

    @media screen and (min-width: 985px) {
        display: none;
    }
/* 
    @media screen and (max-height: 630px) {
        height: 32vh;
    } */

    @media screen and (max-height: 845px) {
        height: 24vh;
    }

    @media screen and (max-height: 800px) {
        height: 26.8vh;
    }

    @media screen and (max-height: 710px) {
        height: 29vh;
    }

    @media screen and (max-height: 660px) {
        height: 31vh;
    }

    @media screen and (max-height: 620px) {
        height: 33vh;
    }

    @media screen and (max-height: 590px) {
        height: 35vh;
    }

    @media screen and (max-height: 535px) {
        height: 40vh;
    }

    .sidebar_div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;  
        height: 100%;
        width: 100%;
       
        padding: 2rem 1rem;

        .navlink{
            color: #fff;
            font-size: 15px;
            font-weight: 400;
            width: 100%;

            padding-bottom: 0.5rem;
            margin-bottom: 0.5rem;
            border-bottom: 1px solid #ededed;
            text-decoration: none;
        }

        .navlink:nth-child(5){
            border-bottom: none;
        }
    }
`