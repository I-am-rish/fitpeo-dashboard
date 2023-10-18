import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const ProductSell = () => {
  return (
    <Container>
      <div className="product-sell">
        <div className="header flex a-center">
          <h3>Product Sell</h3>
          <div className="flex a-center">
            <div className="searchbox flex a-center">
              <AiOutlineSearch />
              <input type="text" placeholder="search" />
            </div>
            <select name="" id="">
              <option value="30">last 30 days</option>
              <option value="60">last 60 days</option>
              <option value="90">last 90 days</option>
            </select>
          </div>
        </div>
        <div className="product-header flex a-center">
          <span>Product Name</span>
          <div className="flex a-center">
            <span>Stock</span>
            <span>Price</span>
            <span>Total Sales</span>
          </div>
        </div>
        <hr style={{ opacity: "0.7" }} />
        <div className="products-sell-details flex a-center">
          <div className="product flex">
            <img
              src="https://images.pixexid.com/this-3d-abstract-design-features-a-minimalist-and-elegant-composition-of-geometr-tl76b0t6.jpeg"
              alt="abstract 3d"
            />
            <div className="flex fd-column">
              <span>Abstract 3D</span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div className="product-details flex">
            <span>32 in stock</span>
            <span>$ 45.99</span>
            <span>20</span>
          </div>
        </div>
        <div className="products-sell-details flex a-center">
          <div className="product flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2Pt4CePz2hzxb7HP5iZzij71Sx_m6VLIKQ&usqp=CAU"
              alt="abstract 3d"
            />
            <div className="flex fd-column">
              <span>Sarphens Illustration</span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div className="product-details flex">
            <span>32 in stock</span>
            <span>$ 45.99</span>
            <span>20</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductSell;

const Container = styled.div`
  width: 100%;

  .product-sell {
    background-color: #fff;
    padding: 0 20px 20px 20px;
    border-radius: 10px;

    .header {
      justify-content: space-between;

      h3 {
        font-size: 2rem;
        font-weight: 700;
      }

      div {
        width: 30%;
        height: 10%;
        justify-content: space-between;

        .searchbox {
          background-color: #fff;
          width: 50%;
          height: 100%;
          font-size: 2rem;
          padding: 2px 5px;
          border-radius: 5px;
          opacity: 0.7;

          input[type="text"] {
            width: 90%;
            font-size: 1.6rem;
            padding: 0.5em;
            border: none;
            outline: none;
          }
        }

        select {
          height: 3rem;
          font-size: 1.4rem;
          border: none;
          background-color: #fff;
          border-radius: 5px;
          opacity: 0.6;
          outline: none;
        }
      }
    }

    .product-header {
      width: 100%;
      height: auto;
      justify-content: space-between;
      opacity: 0.5;
      margin-bottom: 15px;

      span {
        font-size: 1.3rem;
        font-weight: 600;
      }

      div {
        width: 30%;
        justify-content: space-between;
      }
    }

    .products-sell-details {
      width: 100%;
      margin-top: 1rem;

      .product {
        width: 70%;
        gap: 1.5rem;

        img {
          width: 100px;
          height: auto;
          border-radius: 5px;
        }

        div {
          justify-content: space-around;

          :first-child {
            font-size: 1.6rem;
            font-weight: 700;
          }

          :last-child {
            font-size: 1.2rem;
            font-weight: 600;
            opacity: 0.5;
          }
        }
      }

      .product-details {
        width: 30%;
        justify-content: space-between;
        padding: 5px;

        span {
          font-size: 1.4rem;
          font-weight: 600;
          opacity: 0.7;
        }

        :nth-child(2) {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (width <= 412px) {
    .product-sell {
      margin-top: 2rem;
      padding-bottom: 20px;
      .header {
        div {
          width: 50%;
          flex-direction: column;

          .searchbox {
            width: 80%;
            flex-direction: row;
          }

          select {
            width: 80%;
          }
        }
      }

      .product-header {
        width: 100%;
        margin-top: 1.5rem;

        div {
          width: 50%;
        }
      }

      .products-sell-details {
        width: 100%;

        .product {
          flex-direction: column;
          gap: 0rem;
        }

        .product-details {
          width: 80%;
        }
      }
    }
  }
`;
