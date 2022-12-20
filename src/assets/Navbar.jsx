import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../public/favicon.png"
import { FaBars, FaFacebookF, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa"
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'
import { HiMail } from 'react-icons/hi'
import { IoIosSearch } from "react-icons/io"
import { AiTwotonePhone } from 'react-icons/ai'
import Asidebar from './Asidebar'

const Navbar = () => {
const [showNav, setShowNav] = useState(false);
const [showAside, setShowAside] = useState(false);
const toggleAside = () => {
    setShowAside(!showAside);
};

let activeStyle = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    boxShadow: "1px 1px 2px #000",
};

let activeStyle1 = {
    color: "#757575"
}

  return (
    <Container>
        <section className='sidebar_icon'>
            { showNav ? <FaTimes onClick={() => setShowNav(!showNav)} style={{color: "#000"}}/> : <FaBars onClick={() => setShowNav(!showNav)} style={{color: "#000"}}/>}
        </section>
        <div className="logo">
            <div className="logo_spot">
                <img src={logo}  alt=""/>
            </div>
        </div>
        <div className="middle">
            <section className="top">
                <div className="email">
                    <span><HiMail style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> hans.email.com </span>
                </div>
                <div className="phone_number">
                    <a href='/'><AiTwotonePhone style={{marginRight: "0.75rem", fontSize: "1.5rem"}}/> +234 456 6789 </a>
                </div>
                <div className="text_list">
                    <a href='/' className='a'><FaInstagram /></a>
                    <a href='/' className='a2'><FaFacebookF /></a>
                    <a href='https://wa.me/+23480222684' className='a3'><FaWhatsapp /></a>
                </div>
            </section>
            <section className="nav">
                <NavLink to="/" reloadDocument className='navlink' style={({isActive}) => isActive ? activeStyle1 : null}>Home</NavLink>
                <NavLink to="/about" reloadDocument className='navlink' style={({isActive}) => isActive ? activeStyle1 : null}>About Us</NavLink>
                <NavLink to="/services" reloadDocument className='navlink' style={({isActive}) => isActive ? activeStyle1 : null}>Services</NavLink>
                <NavLink to="/products" reloadDocument className='navlink' style={({isActive}) => isActive ? activeStyle1 : null}>Products</NavLink>
                <NavLink to="/careers" reloadDocument className='navlink' style={({isActive}) => isActive ? activeStyle1 : null}>Careers</NavLink>
            </section>
        </div>
        <div className="right">
            <div className="top">
                <div className="search">
                    <IoIosSearch />
                </div>
                <Icon className="icon" onClick={toggleAside}>
                    {showAside ? <FaTimes /> : <FaBars />}
                </Icon>
            </div>
            <div className="btn_section">
                <div className="btn">
                    <NavLink to="/contact" reloadDocument className='btn_link' style={({isActive}) => isActive ? activeStyle : null}>Contact Us</NavLink>
                </div>
            </div>
        </div>
        <Asidebar showAside={showAside} toggleAside={toggleAside}/>
        <Sidebar showNav={showNav} closeNav={() => setShowNav(!showNav)}/>
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 16vh;
  
  padding: 0 6rem;
  background-color: #fff;
  z-index: 10;
  box-shadow: 1px 1px 3px #00000029;

  position: sticky;
  top: 0;

    @media screen and (max-width: 985px) {
        padding: 0 2rem;
        height: 14vh;
    }

  .logo{
    flex: 0.2;

    display: flex;
    align-items: center;

    @media screen and (max-width: 985px) {
        flex: 0.33;
        justify-content: center;
    }
    
    .logo_spot{
        width: 8.5rem;

        @media screen and (max-width: 985px) {
            width: 7rem;
        }
        img{
            width: 80%;
            height: 80%;
            object-fit: contain;

            @media screen and (max-width: 985px) {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            @media screen and (max-height: 723px) {
                width: 80%;
                height: 80%;
                object-fit: contain;
            }

            @media screen and (max-height: 575px) {
                width: 70%;
                height: 70%;
                object-fit: contain;
            }

            @media screen and (max-height: 500px) {
                width: 50%;
                height: 50%;
                object-fit: contain;
            }
        }
    }
  }

  .middle{
    flex: 0.5;

    @media screen and (max-width: 985px) {
        display: none;
    }

    .top{
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;

        .email{
            padding-right: 1rem;
            span{
                display: flex;
                align-items: center;
            }
        }

        .phone_number{
            padding: 1rem;
            border-right: 1px solid #ededed;
            border-left: 1px solid #ededed;
            a{
                display: flex;
                align-items: center;

                color: #000;
                font-size: 16px;
                font-weight: 600;
            }
        }

        .text_list{
            padding-left: 1rem;
            a{
                color: #000;
                margin-right: 0.35rem;
            }

            .a{

                &:hover{
                    color: #d6249f;
                }
            }

            .a1{

                &:hover{
                    color: #1c8fbd;
                }
            }

            .a2{

                &:hover{
                    color: blue;
                }
            }

            .a3{

                &:hover{
                    color: green;
                }
            }
            
            .a4{

                &:hover{
                    color: skyblue;
                }
            }

            .a5{

                &:hover{
                    color: red ;
                }
            }
        }
    }

    .nav{
        flex: 0.7;
        height: 8.5vh;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        @media screen and (max-width: 985px) {
            display: none;
        }

        .navlink{
            font-size: 14px;
            font-weight: 600;

            color: #000;
            margin-right: 3rem;
            text-decoration: none;
            cursor: pointer;
        }
    }
  }

  .right{
    flex: 0.3;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100%;

    @media screen and (max-width: 985px) {
        flex: 0.33;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

    .top{
        display: flex;
        align-items: flex-start;

        @media screen and (max-width: 985px) {
            align-items: center;
        }

        .search{
            font-size: 1.25rem;
            margin-right: 1rem;
            cursor: pointer;

            @media screen and (max-width: 985px) {
                font-size: 1.75rem;
                margin-right: 0;
            }
        }

        .icon{
            font-size: 1.25rem;
            color: #000;
            cursor: pointer;
            z-index: 5;

            @media screen and (max-width: 985px) {
                display: none;
            }
        }
    }


    .btn_section{
        @media screen and (max-width: 985px) {
            display: none;
        }

        .btn{
            display: flex;
            align-items: center;
            background-color: #000;

            .btn_link{
                color: #fff;
                font-size: 14px;
                font-weight: 600;
                padding: 0.6rem 2rem;
                text-decoration: none;
            }
        }
    }
  }
    
        
    .navlink{
        font-size: 16px;
        font-weight: 600;

        color: #555270;
        margin-right: 3rem;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            color: #006636;
        }
    }

  .sidebar_icon{
        display: none;
        font-size: 1.5rem;
        z-index: 10;
        cursor: pointer;

        @media screen and (max-width: 985px) {
            flex: 0.33;
            display: flex;
            align-items: center;
        }
    }
`

const Icon = styled.div`
    
`