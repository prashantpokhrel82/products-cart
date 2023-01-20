import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../product/Product";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems, total } = cart;

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <Wrapper>
      <h4>Cart</h4>
      <div className="line" />
      {cartItems.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <h4>Total: ${total}</h4>
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
  margin: 5rem auto;

  h4 {
    font-weight: 500;
  }
`;
