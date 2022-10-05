import React from 'react'
import { Fade } from 'react-reveal'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CategoryData } from '../data/CategoryData'

const ProductCategoryAside = () => {

    let activeStyle = {
        color: "#ec4a0f"
    }

  return (
    <Container>
        {CategoryData.map((item, index) => {
            return(
                <>
                    <Fade cascade>
                        <div className='container' key={index}>
                            <NavLink to="/otcg" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text}
                            </NavLink>
                            <NavLink to="/seamlesspipe" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text1}
                            </NavLink>
                            <NavLink to="/welded" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text2}
                            </NavLink>
                            <NavLink to="/stainless" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text3}
                            </NavLink>
                            <NavLink to="/pipe" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text4}
                            </NavLink>
                            <NavLink to="/plug" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text5}
                            </NavLink>
                            <NavLink to="/spe" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text6}
                            </NavLink>
                            <NavLink to="/cables" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text7}
                            </NavLink>
                            <NavLink to="/others" reloadDocument className="list" style={({isActive}) => isActive ? activeStyle : null}>
                                {item.text8}
                            </NavLink>
                        </div>
                    </Fade>
                </>
            )
        })}
    </Container>
  )
}

export default ProductCategoryAside

const Container = styled.div`
    z-index: 5;

    @media screen and (max-width: 985px) {
        display: none;
    }
    
    .container{
        display: flex;
        flex-direction: column;
        margin-right: 0.5rem;
        background-color: #fff;
        border: 1px solid #efefef;

        .list{
          font-size: 14px;
          line-height: 1.25;
          color: #000;
          padding: 1rem;
          border-bottom: 1px solid #fff;
          width: 100%;
          transition: 0.35s ease all;

          text-decoration: none;
          
          cursor: pointer;

          &:hover{
            color: green;
          }
        }
    }
`