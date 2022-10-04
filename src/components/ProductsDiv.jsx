import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiArrowRight } from "react-icons/hi"
import { Fade } from 'react-reveal'


const ProductsDiv = ({ currentItems }) => {

  const allProducts = currentItems.map((item) => {

    return(
        <div className="container">
          <Fade>
          <div className="left">
            <img src={item.img} alt="" />
          </div>
          </Fade>
          <div className="right">
            <Fade>
            <div className="title">
              {item.title}
            </div>
            </Fade>
            <Fade>
            <div className="text">
              {item.text.length < 110 ? item.text : `${item.text.substring(0, 125)}...`}
            </div>
            </Fade>
            <Fade bottom>
            <div className="btn">
              <Link to={`/product/${item._id}`} reloadDocument className='navlink'>
                Read More <HiArrowRight style={{marginLeft: "0.25rem"}}/>
              </Link>
            </div>
            </Fade>
          </div>
        </div>
      )
  })

  return (
    <>
      <Container>
        <>
         {allProducts}
        </>
      </Container>
    </>
  )
}

export default ProductsDiv

const Container = styled.div`
    
    .container{
      display: flex;
      box-shadow: 1px 1px 6px #cecccc;
      margin-bottom: 4rem;

      
      @media screen and (max-width: 978px) {
        flex-direction: column;
        background-color: #000000cc;
        width: 100%;
      }

      .left{
        flex: 0.48;

        height: 40vh;
        margin-right: 1rem;
        margin-bottom: 1.5rem;

        @media screen and (max-width: 978px) {
          
        }
        
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .right{
        flex: 0.52;
        
        display: flex;
        flex-direction: column;
        /* background-color: #000000cc; */

        .title{
          font-size: 22px;
          font-weight: 600;
          color: #000;

          margin-bottom: 1rem;

          @media screen and (max-width: 985px) {
            color: #fff;
          }
        }

        .text{
          font-size: 16px;
          line-height: 1.3;
          color: #000;

          margin-bottom: 2rem;

          @media screen and (max-width: 985px) {
            color: #fff;
          }
        }

        .btn{
          display: flex;
          align-items: center;
          
          .navlink{
            display: flex;
            align-items: center;
            text-decoration: none;

            color: green;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid green;
            transition: 0.35s ease all;

            &:hover{
              color: #04c504;
              border-bottom: 1px solid #04c504;
            }
          }
        }
      }
    }
`
