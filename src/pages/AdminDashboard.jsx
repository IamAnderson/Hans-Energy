import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import img from "../assets/img1.jpg"
import axios from "axios";
import AdminDashboardPopUp from '../components/AdminDashboardPopUp'

const AdminDashboard = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newText1, setNewText1] = useState("");
  const [newParam, setNewParam] = useState("");
  const [newParam1, setNewParam1] = useState("");
  const [newAdvan, setNewAdvan] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newImg, setNewImg] = useState("");

  const [targetId, setTargetId] = useState("");

  const url = "https://geoleumapi.herokuapp.com/api/products"

  const createProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, {
        title: newTitle,
        text: newText,
        text1: newText1,
        img: newImg,
        category: newCategory,
        parameter: newParam,
        parameter1: newParam1,
        advantage: newAdvan
      });

      console.log(res)
    } catch (error) {
      console.log(error.response)
    }

    alert("Product has been added..")
    e.target.reset();
  };

  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(url + `/product/${targetId}`)
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }

    alert("Product has been deleted..")
    e.target.reset();
  };

  
  
  return (
    <Container>
      <AdminDashboardPopUp />
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text">
            Geoleum Admin
          </div>
        </div>
      </div>
      <div className="container">

        <div className="form">
          <div className="title">
            Create a new product
          </div>
          <form className='form__' onSubmit={createProduct}>
            <div className="input__list">        
                <textarea type="text" placeholder='title' required onChange={e => setNewTitle(e.target.value)}/>
                <textarea type="text" placeholder='first paragraph (text)' onChange={e => setNewText(e.target.value)}/>
                <textarea type="text" placeholder='second paragraph (text)' onChange={e => setNewText1(e.target.value)}/>
                <textarea type="text" placeholder='parameter (first paragraph)'onChange={e => setNewParam(e.target.value)}/>
                <textarea type="text" placeholder='parameter (second paragraph)' onChange={e => setNewParam1 (e.target.value)}/>
                <textarea type="text" placeholder='advantage / usage'onChange={e => setNewAdvan(e.target.value)}/>
                <textarea type="text" placeholder='category (if product is not part of existing category, write "others" for category' required onChange={e => setNewCategory(e.target.value)}/>
                <textarea type="text" placeholder='Image Url' required onChange={e => setNewImg(e.target.value)}/>
            </div>
              {/* <div className="select__img">
                <label>upload an image:</label>
                <input type="file" onChange={onImageSelect}/>
                <div className="btn">
                  <button onClick={onImageUpload}>Upload Image</button>
                </div>
              </div> */}
            <div className="btn">
              <button type='submit'>
                Add Product
              </button>
            </div>
          </form>
        </div>

        <div className="form">
          <div className="title">
            Delete Product
          </div>
          <form className='form__' onSubmit={deleteProduct}>
            <div className="input__list">        
              <input type="id" placeholder='id' required onChange={e => setTargetId(e.target.value)} />
            </div>
            <div className="btn">
              <button type='submit'>Delete Product</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default AdminDashboard

const Container = styled.div`
  color: #fff;
  height: 100%;
  background-color: #000;

  @media screen and (max-width: 985px) {
    background-color: #fff;
  }
    
  .navbar{
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    height: 23vh;
    border: 1px solid #fff;

    @media screen and (max-width: 985px) {
      display: none;
    }

    .left{
      flex: 0.3;
      display: flex;
      align-items: center;
      justify-content: center;

      
      .logo{
        width: 8rem;

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .right{
      flex: 0.7;

      display: flex;
      align-items: center;
      justify-content: center;

      .text{
        font-size: 28px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 6rem;
    
    
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 4rem;
      border: 1px solid #fff;

      margin-bottom: 3rem;

      @media screen and (max-width: 985px) {
        display: none;
      }

      .title{
        font-size: 22px;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }

      .form__{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .input__list{
          display: flex;
          flex-direction: column;
          
          textarea{
            border: none;
            color: #fff;
            font-size: 16px;
            background-color: #000;
            border: 1px solid #fff;
            width: 30vw;
            padding: 0.25rem 0.5rem;

            margin-bottom: 1rem;
          }

          input{
            border: none;
            color: #fff;
            font-size: 16px;
            background-color: #000;
            border: 1px solid #fff;
            width: 30vw;
            padding: 0.5rem;

            margin-bottom: 1rem;
          }
        }

        .select__img{
          display: flex;
          flex-direction: column;

          margin-bottom: 1rem;

          label{
            color: #757575;
            font-size: 16px;
            margin-bottom: 0.15rem;
          }

          input{
            margin-bottom: 0.15rem;
          }

          .btn{

            button{
              color: #000;
              font-size: 15px;
              text-transform: none;
              text-decoration: none;
              background-color: #fff;
              padding: 0.2rem;
              transition: 0.1s ease all;

              &:hover{
                color: #000;
                box-shadow: none;
                background-color: #ffffffbc;
              }

              &:active{
                transform: scale(98%);
              }
            }
          }
        }

        .btn{

          button{
            color: #fff;
            background-color: #1d6d21;
            outline: none;
            
            padding: 0.75rem 1rem;
            text-decoration: underline;
            text-transform: uppercase;
            border: 1px solid #000;
            cursor: pointer;

            transition: 0.25s ease all;

            &:hover{
              box-shadow: 2px 2px 7px #1d6d21;
              background-color: #000;
            }

            &:active{
              transform: scale(90%);
            }
          }
        }
      }
    }
  }
`