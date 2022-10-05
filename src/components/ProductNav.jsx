import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a1a1a;
    padding: 3rem 6rem;
    margin-bottom: 4rem;


    @media screen and (max-width: 985px){
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 2rem 2rem;
    }
`

const Title = styled.h1`
    color: green;
    font-size: 24px;
    font-weight: 600;
`

const Selector = styled.p`
    display: flex;
    align-items: flex-start;
    color: #fff;
    font-size: 14px;


    @media screen and (max-width: 985px){
      padding: 1rem 0 0 0;
    }

    .selector{
      display: flex;
      align-items: center;
      margin-right: 0.25rem;
    }
`


const ProductNav = ({ title }) => {
  return (
    <Container>
        <Title>
          {title}
        </Title>

        <Selector>
          <Link to='/products' style={{textDecoration: 'none', color: '#fff'}} className="selector"><AiFillHome />Products</Link>
          <p style={{color: "#ec4a0f"}}>/ {title}</p>
        </Selector>
    </Container>
  )
}

export default ProductNav