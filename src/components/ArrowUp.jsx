import React from 'react'
import styled from 'styled-components'
import { IoIosArrowUp } from 'react-icons/io'


const Container = styled.div`
    border: 1px solid #fff;
`

const NavArrow = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
`

const ArrowUp = ({href}) => {
  return (
    <Container style={{width: '2.5rem', height: '2.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <NavArrow href={`${href}`}>
            <IoIosArrowUp style={{textDecoration: 'none', fontSize: '1.15rem'}} />
        </NavArrow>
    </Container>
  )
}

export default ArrowUp