import React from 'react'
import styled from 'styled-components'

const Asidebar = ({showAside, toggleAside}) => {
  return (
    <Container>
        <Left asidebar1={showAside} onClick={toggleAside} />
       <Div asidebar={showAside}>
          <div className="text">
            We have been trusted advisors to the world’s biggest companies, and we continue to grow with the help of more than 20,000 people in our global network
          </div>
          <div className="first">
            <div className="subtitle">
              Address
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cum.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="second">
            <div className="subtitle">
              Phone
            </div>
            <span>+234 456 6789</span>
          </div>
          <div className="third">
            <div className="subtitle">
              Email
            </div>
            <span>hans.email.com</span>
          </div>
       </Div>
    </Container>
  )
}

export default Asidebar

const Container = styled.div`
  color: #000;
`

const Left = styled.div`
  background-color: #0000009e;
  height: 100vh;
  width: 70vw;
  position: fixed;
  top: ${({asidebar1}) => (asidebar1 ? "0%" : "-200%")};
  right: 30%;
  cursor: vertical-text;
  z-index: 5;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  height: 100vh;  
  width: 30vw;
  padding: 2rem;
  font-size: 16px;
  color: #777777;

  position: fixed;
  top: 0%;
  right: ${({asidebar}) => (asidebar ? "0%" : "-100%")};
  z-index: 5;
  transition: 0.35s ease all;
  
  .text{
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  .first{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    .subtitle{
      color: #000;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    p{
      font-weight: 600;
    }

    span{
      margin-bottom: 1rem;
    }
  }

  .second{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;


    .subtitle{
      color: #000;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    span{
      
    }
  }

  .third{
    display: flex;
    flex-direction: column;


   .subtitle{
      color: #000;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    span{
      
    }
  }
`