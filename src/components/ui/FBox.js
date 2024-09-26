import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFBox = styled.div`
  width: 11rem;
  height: 11rem;
  background-color: #FFFFFF;
  color: #121212;
  margin: 1rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 5px 10px rgba(253, 55, 40, 0.6);
  transition: 0.5s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }
  
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  h4, p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  h4 {
    font-size: 2rem;
    opacity: ${props => (props.hovered ? 0 : 1)};
    transition: opacity 0.5s ease;
  }

  p {
    font-size: 1.05rem;
    opacity: ${props => (props.hovered ? 1 : 0)};
    transition: opacity 0.5s ease;
    width: 90%;
    height: 90%;
    text-align: left;
  }

  @media (max-width: 1000px) {
    h4 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 400px) {
    width: 8.8rem;
    height: 8.8rem;

    p {
      font-size: 0.9rem;
    }
  }
`;

const FBox = ({ title, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledFBox
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hovered={hovered}
    >
      <div className='container'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </StyledFBox>
  );
};

export default FBox;
