import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const StyledCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #141414;
  padding: 0.5rem 0rem 3rem 0rem;
  color: white;

  h3 {
    font-size: 2.75rem;
    font-weight: 600;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 5.5rem;
    margin-top: 2rem;
    width: clamp(25rem, 60%, 60rem);
  }

  @media (max-width: 800px) {
    p {
      text-align: left;
    }
  }

  @media (max-width:400px) {
    p {
      font-size: 1rem;
      width: 90%;
      margin-top: 0rem;
      margin-bottom: 3.5rem;
    }
  }
`;

const CTA = () => {
  return(
    <StyledCTA>
      <h3>Upgrade Your Gaming Experience</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button text='Buy Now' page='/product'/>
    </StyledCTA>
  );
};

export default CTA;