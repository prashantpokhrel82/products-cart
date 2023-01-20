import React from "react";
import styled from "styled-components";

const IconText = ({ icon, text, color }) => {
  return (
    <Wrapper color={color}>
      {icon}
      <span>{text}</span>
    </Wrapper>
  );
};

export default IconText;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-dark-gray);
  font-size: 1.6rem;
  transition: var(--transition);
  cursor: pointer;

  :hover {
    color: ${(props) => props.color};
  }

  span {
    font-size: 1rem;
  }
`;
