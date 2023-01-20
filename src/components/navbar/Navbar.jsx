import React from "react";
import styled from "styled-components";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <div className="logo">
        <h2>Cart Items</h2>
      </div>
      <div className="cart">
        <BsFillBagFill />
        <p className="cart-amount">{amount}</p>
      </div>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  height: 80px;
  width: 100%;
  background: var(--color-dark-gray);
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);

  .cart {
    color: var(--color-white);
    position: relative;
    svg {
      font-size: 3rem;
      color: var(--color-white);
    }
  }

  .cart-amount {
    position: absolute;
    top: 0%;
    right: -1rem;
    background: var(--color-primary);
    font-size: 1.2rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
