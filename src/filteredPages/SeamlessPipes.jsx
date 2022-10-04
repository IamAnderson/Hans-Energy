import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CategoryAside from '../components/CategoryAside'
import CategoryNav from '../components/CategoryNav'
import Copyright from '../components/Copyright'
import FilterProductsNav from '../components/FilterProductsNav'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'

const SeamlessPipes = ({ data, loading }) => {

  const filtered = data.filter(item => item.category === "seamlessPipe");
  const listFiltered = filtered.map((item, index) => 
    <div className="container" key={index}>
      <div className="left">
        <img src={item.img} alt="" />
      </div>
      <div className="right">
        <div className="title">
          {item.title}
        </div>
        <div className="text">
          {item.text.length < 110 ? item.text : `${item.text.substring(0, 125)}...`}
        </div>
        <div className="btn">
          <Link to={`/product/${item._id}`} reloadDocument className='navlink'>
            Read More <HiArrowRight style={{marginLeft: "0.25rem"}}/>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <>
        <Navbar />
        <FilterProductsNav title={"Seamless Pipes for Boilers / Engineering / Mechanical"}/>
        <Container>
          <CategoryNav />
          <div className="container">
            <div className="left">
              <CategoryAside />
            </div>

            <div className="right">
              {loading ? listFiltered : <Spinner />}
            </div>
          </div>
        </Container>
        <Footer />
        <Copyright href={"/seamlesspipe"} />
    </>
  )
}

export default SeamlessPipes

const Container = styled.div`
  padding: 0 6rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 985px) {
    padding: 0 2rem;
  }

  .container{
    display: flex;
    align-items: flex-start;

    padding: 1rem;
    box-shadow: 0.5px 0.5px 4px #000;

    @media screen and (max-width: 978px) {
        flex-direction: column;
      }

    .left{
      flex: 0.3;
    }

    .right{
      flex: 0.7;
      margin-left: 0.5rem;

      .container{
        display: flex;
        box-shadow: 1px 1px 6px #cecccc;
        margin-bottom: 4rem;

        @media screen and (max-width: 978px) {
          flex-direction: column;
        }

        .left{
          flex: 0.47;

          height: 40vh;
          margin-right: 1rem;

          @media screen and (max-width: 978px) {
            
          }

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .right{
          flex: 0.53;

          display: flex;
          flex-direction: column;

          .title{
            font-size: 22px;
            font-weight: 600;
            color: #000;

            margin-bottom: 1rem;
          }

          .text{
            font-size: 16px;
            line-height: 1.3;
            color: #757575;

            margin-bottom: 2rem;
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
    }
  }
`