import React from 'react';
import styled from 'styled-components';

const StyledBCard = styled.div`
  background-color: #FFFFFF;
  color: #141414;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  width: 16rem;
  height: auto;
  border-radius: 2rem;
  padding: 1.25rem;
  margin: 2rem;
  z-index: 1;
  box-shadow: 0px 5px 10px rgba(253, 55, 40, 0.6);
  transition: 0.5s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }
  

  img {
    width: 3.5rem;
    height: auto;
  }

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.25rem;
    margin-top: -1rem;
  }
`;

const BCard = ({ icon, title, text }) => {
  return(
    <StyledBCard>
      <img src={icon} alt={title}/>
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledBCard>
  );
};

export default BCard;