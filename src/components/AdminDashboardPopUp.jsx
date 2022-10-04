import React from 'react'
import styled from 'styled-components'

const AdminDashboardPopUp = () => {
  return (
    <Container>
        <div>Upload Products with a Computer...</div>
    </Container>
  )
}

export default AdminDashboardPopUp

const Container  = styled.div`
    display: none;

    @media screen and (max-width: 985px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    div{
        color: #000;
        font-size: 34px;
        text-align: center;
    }
`