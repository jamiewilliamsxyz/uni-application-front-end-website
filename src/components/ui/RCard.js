import React from 'react';
import styled from 'styled-components';
import quote from '../../images/quote.svg'

const StyledRCard = styled.div`
  background-color: #FFFFFF;
  color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: auto;
  border-radius: 2rem;
  padding: 1rem 1.25rem 0.5rem 1.25rem;
  margin: 2rem;
  z-index: 1;
  box-shadow: 0px 5px 10px rgba(253, 55, 40, 0.6);
  transition: 0.5s;
  position: relative;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }
  
  .profile {
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    border: 0.2rem solid white;
  }

  .img-container {
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: left;
  }

  img {
    width: 3.5rem;
    height: auto;
  }

  h4 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 0rem;
    margin-top: 2rem;
  }

  .star-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: -0.75rem;
  }
`;

const RCard = ({ profile, name, star, review}) => {
  return(
    <StyledRCard>
      <img src={profile} alt='profile' className='profile'/>
      <div className='img-container'>
        <img src={quote} alt='quote'/>
      </div>
      <h4>{name}</h4>
      <div className='star-container'>
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>
      <p>{review}</p>
    </StyledRCard>
  );
};

export default RCard;