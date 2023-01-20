import React from "react";
import styled from "styled-components";
import Product from "../product/Product";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, amount, total } = cart;
  return (
    <Wrapper>
      <h4>Cart</h4>
      <div className="line" />
      {cartItems.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 60%;
  background: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;

  h4 {
    font-weight: 500;
  }
`;
