import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(to right, #C8102E, #FD3728 50%, #FF5722);
  box-shadow: 0 0 0.375rem 0.25rem rgba(252, 3, 3, 0.25);
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  color: white;
  width: 10rem;
  height: 3.75rem;
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:hover {
    box-shadow: 0 0 0.375rem 0.25rem rgba(252, 3, 3, 0.35);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const Button = ({ text, page}) => {
  return(
    <Link to={page}>
      <StyledButton>
        {text}
      </StyledButton>
    </Link>
  );
};

export default Button;