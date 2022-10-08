import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CategoryNav from '../components/CategoryNav'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCategoryAside from '../components/ProductCategoryAside'
import ProductNav from '../components/ProductNav'
import Spinner from '../components/Spinner'

const Product = () => {
  const [post, setPost] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();

  const url = "https://geoleumapi.herokuapp.com/api/products"

    const getProducts = () => {
      axios.get(url)
      .then((res) => {
        const resData = res.data;
        const postDetails = resData.find((item) => item._id === id);
        setPost(postDetails);
        setisLoading(true);
      })
  
      .catch((err) => {
        console.log("err:", err)
      })
    };

    useEffect(() => {
      getProducts();
      // eslint-disable-next-line
    }, [isLoading]);

  return (
    <>
      <Navbar />
      <ProductNav title={post.title}/>
      <Container id={post._id}>
          <Fade>
            <CategoryNav />
          </Fade>
          <div className="container">
            <div className="left">
              <ProductCategoryAside />
            </div>
              <div className="right_div">
              { isLoading ?
                <div className="right">
                  <Fade>
                  <div className="img">
                    <img src={post.img} alt="" />
                  </div>
                  </Fade>
                  <Fade>
                  <div className="title">
                    {post.title}
                  </div>
                  </Fade>
                  <Fade>
                  <div className="text">
                    {post.text}
                  </div>
                  </Fade>
                  <Fade>
                  <div className="text1">
                    {post.text1}
                  </div>
                  </Fade>
                  <div className="parameter">
                    <Fade>
                    <div className="subtitle">
                      Parameters
                    </div>
                    </Fade>
                    <Fade>
                    <div className="text">
                      {post.parameter}
                    </div>
                    </Fade>
                    <Fade>                    
                    <div className="text">
                      {post.parameter1}
                    </div>
                    </Fade>
                  </div>
                  {/* <div className="img2">
                    <img src={post.img1} alt="" />
                  </div> */}
                  <div className="advantage">
                    <Fade>
                    {/* <div className="subtitle">
                      Advantage / Usage
                    </div> */}
                    </Fade>
                    <Fade>
                    <div className="text">
                      {post.advantage}
                    </div>
                    </Fade>
                  </div>
                </div>
                : <Spinner />
              }
              </div>
          </div>
      </Container>
      <Footer />
      <Copyright href={post._id} />
    </>
  )
}

export default Product

const Container = styled.div`
  padding: 0 6rem;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 985px) {
    padding: 0 2rem;
  }

  .top{
    display: flex;
    align-items: center;
  }
  
  .container{
    display: flex;
    align-items: flex-start;
    padding-bottom: 2rem;

    background-color: #f5f1f113;
    box-shadow: 3px 3px 7px #464545;

    @media screen and (max-width: 978px) {
      flex-direction: column;
    }

    .left{
      flex: 0.3;

      margin-top: 0.5rem;
      margin-left: 0.5rem;
      
      @media screen and (max-width: 985px) {
        width: 100%;
        padding: 0 1rem 0 1.5rem;
        margin-left: 0;
      }
    }
    
    .right_div{
      flex: 0.7;
      display: flex;
      flex-direction: column;

        .right{
        margin-left: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        .img{ 
          height: 80vh;

          padding: 0.5rem 0;
          padding-bottom: 2rem;
          margin-bottom: 1rem;

          cursor: pointer;

          &:hover{
            scale: 120%;
          }

          @media screen and (max-width: 985px) {
            height: 50vh;
            padding: 0.5rem 1rem;
            padding-right: 1.25rem;
            padding-bottom: 2rem;

            &:hover{
              scale: none;
            }

            &:active{
              scale: 120%;
            }
          }

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .title{
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 24px;
          font-weight: 600;
          color: #4e4d4d;

          padding: 0 4rem;
          margin-bottom: 1.5rem;

          @media screen and (max-width: 985px) {
            padding: 0 1rem;
          }
        }

        .text{
          font-size: 16px;
          line-height: 1.5;
          color: #4e4d4d;
          padding: 0 4rem;

          margin-bottom: 2rem;

          @media screen and (max-width: 985px) {
            padding: 0 1rem;
          }
        }

        .text1{
          font-size: 16px;
          line-height: 1.55;
          color: #4e4d4d;
          
          padding: 0 4rem;
          margin-bottom: 2rem;

          @media screen and (max-width: 985px) {
            padding: 0 1rem;
          }
        }

        .parameter{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;

          margin-bottom: 2rem;

          .text{
            font-size: 16px;
            line-height: 1.5;
            color: #292828;
            padding: 0 4rem;

            margin-bottom: 1rem;

            @media screen and (max-width: 985px) {
              padding: 0 1rem;
            }
          }

          .subtitle{
            color: #292828;
            font-size: 18px;
            font-weight: 600;
            padding: 0 4rem;

            margin-bottom: 1rem;

            @media screen and (max-width: 985px) {
              padding: 0 1rem;
            }
          }
        }

        .img2{
          height: 80vh;

          padding: 0.5rem 0;
          padding-bottom: 2rem;
          margin-bottom: 1rem;

          @media screen and (max-width: 985px) {
            height: 50vh;
            padding: 0.5rem 1rem;
            padding-bottom: 2rem;
          }

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .advantage{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;

          .subtitle{
            color: #292828;
            font-size: 18px;
            font-weight: 600;
            padding: 0 4rem;

            margin-bottom: 1rem;

            @media screen and (max-width: 985px) {
              padding: 0 1rem;
            }
          }

          .text{
            font-size: 16px;
            line-height: 1.5;
            color: #292828;
            padding: 0 4rem;

            margin-bottom: 1rem;

            @media screen and (max-width: 985px) {

              padding: 0 1rem;
            }
          }
        }
      }
    }
  }
`