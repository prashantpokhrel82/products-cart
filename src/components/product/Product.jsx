import React from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import IconText from "../IconText";

const Product = ({ product }) => {
  return (
    <Wrapper>
      <div className="product">
        <div className="product__image">
          <img src={product?.thumbnail} alt={product?.name} />
        </div>
        <div className="product__details">
          <div className="left">
            <p className="product__title">{product?.name}</p>
            <div>
              <p className="product__price">${product?.price}</p>{" "}
              <p
                className={`availability ${
                  product?.available ? "available" : "not-available"
                }`}
              >
                {product?.available ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="selection">
              {product?.sizes && (
                <select name="size" id="size">
                  {product?.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              )}
              {product?.colors && (
                <select name="color" id="color">
                  {product?.colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              )}
              <button className="indec">
                <AiOutlineMinus onClick={() => console.log("decrease")} />
                <span className="amount">{product?.amount}</span>
                <AiOutlinePlus onClick={() => console.log("increase")} />
              </button>
            </div>
          </div>
          <div className="right">
            <p className="total-price">${product?.price}</p>
            <div className="bottom">
              <IconText icon={<AiFillHeart />} text="Save" color="#ff642f" />
              <div className="separator" />
              <IconText icon={<MdDelete />} text="Delete" color="#d22b2b" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  .product {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .product__image {
    height: 200px;
    width: 150px;
    border-radius: 10px;

    img {
      padding: 1px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .product__details {
    display: flex;
    flex-grow: 1;
    gap: 2rem;
  }

  .availability {
    position: relative;
    margin-left: 1rem;
  }

  .availability::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background: var(--color-medium-gray);
    margin: 0 -1rem;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .left > div {
    display: flex;
    gap: 1rem;
  }

  .right {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .product__title {
    font-size: 1.3rem;
  }

  .product__price {
    color: var(--color-dark-gray);
  }

  .availability {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .available {
    color: #397d02;
  }

  .not-available {
    color: #d22b2b;
  }

  .selection {
    display: flex;
    gap: 0.5rem;
  }

  select,
  input,
  .indec {
    display: block;
    width: max-content;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--color-dark-gray);
    background: transparent;
  }

  .indec {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
      color: var(--color-dark-gray);
      cursor: pointer;
    }
  }

  select {
    option {
      text-transform: capitalize;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .total-price {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
