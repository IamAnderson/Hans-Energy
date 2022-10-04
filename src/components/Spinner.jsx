import React from 'react'
import styled from 'styled-components'
import FadeLoader from "react-spinners/FadeLoader";


function Spinner() {
  return (
    <Container>
      <FadeLoader color="#000" height={15} width={5} />
    </Container>
  )
}

export default Spinner

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 1;

    background-color: transparent;

    @media screen and (max-width: 985px) {
      justify-content: center;
      width: 88vw;
    }
`