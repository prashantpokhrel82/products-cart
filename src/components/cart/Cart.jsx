import React from "react";
import styled from "styled-components";
import Product from "../product/Product";

const Cart = () => {
  return (
    <Wrapper>
      <h3>Cart</h3>
      <div className="line" />
      <Product />
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  height: 80vh;
  width: 60%;
  background: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;
