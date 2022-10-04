import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReactPaginate from "react-paginate"
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import MiniNav from '../components/MiniNav'
import Navbar from '../components/Navbar'
import ProductsDiv from '../components/ProductsDiv'
import CategoryNav from '../components/CategoryNav'
import CategoryAside from '../components/CategoryAside'
import Spinner from '../components/Spinner'
import { Fade } from 'react-reveal'

const Products = ({ items, loading }) => {
  
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Navbar />
      <MiniNav title={"Products"}/>
      <Container id='products'>
        <Fade>
          <CategoryNav />
        </Fade>
        <div className="container">
          <div className="left">
            <Fade>
              <CategoryAside />
            </Fade>
          </div>
          <div className="right">
            { loading ? 
              (<div className="productsDiv">
                <ProductsDiv currentItems={currentItems} />
              </div>)
              : <Spinner />
            }

            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName='page_links'
              previousLinkClassName='page_nav__left'
              nextLinkClassName='page_nav__right'
              activeLinkClassName='page_active'
              breakLinkClassName="page_break__label"
            />
          </div>
        </div>
      </Container>
      <Footer />
      <Copyright href={"/products"} />
    </>
  )
}

export default Products

const Container = styled.section`
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

    @media screen and (max-width: 985px) {
        flex-direction: column;
        height: 100%;
    }

    .left{
      flex: 0.3;
    }

    .right{
      flex: 0.7;
      margin-left: 0.5rem;

      padding: 1rem;
      
      @media screen and (max-width: 985px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 0;
      }

      .productsDiv{
        display: flex;
        flex-direction: column;
      }

      .pagination{
        display: flex;
        align-items: center;
        justify-content: center;

        list-style: none;
      }

      .page_links{
        margin-right: 1rem;
        padding: 0.25rem 0.5rem;
        transition: 0.35s ease all;

        cursor: pointer;
      }

      .page_links:hover{
        background-color: teal;
        color: #fff;
      }

      .page_nav__left{
        margin-right: 1rem;

        padding: 0.2rem;
        border-radius: 3px;
        border: 1px solid #d4d3d3;
        cursor: pointer;
      }

      .page_nav__right{
        margin-left: 1rem;

        padding: 0.2rem;
        border-radius: 3px;
        border: 1px solid #d4d3d3;
        cursor: pointer;
      }

      .page_active{
        background-color: teal;
        color: #fff;
      }

      .page_break__label{
        font-size: 1.25rem;
        margin-right: 1rem;
      }
    }
  }
` 