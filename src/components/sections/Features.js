import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import FBox from '../ui/FBox';

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'

const StyledFeatures = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem 3rem 2rem;

  h3 {
    color: white;
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
  }

  u {
    text-decoration: underline wavy;
    text-underline-offset: 0.3rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .features-container-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(5rem 50% 10rem);
    height: auto;
    margin-top: 2.5rem;
  }

  .features-container-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(5rem 50% 10rem);
    height: auto;
    margin-top: 2.5rem;
  }

  @media (max-width: 1000px) {
    .container {
      flex-direction: row;
    }

    .features-container-1 {
      flex-direction: column;
    }

    .features-container-2 {
      flex-direction: column;
    }
  }

  .note {
    margin-bottom: 5rem;
    font-size: 0.88rem;
    color: #545454;
  }

  Button {
    font-size: 1.22rem;
  }
`;

const Features = () => {
  return(
    <StyledFeatures>
      <h3>What Makes The<br></br>QuadCast <u>Different</u>?</h3>
      <div className='container'>
        <div className='features-container-1'>
          <FBox title='Pop Filter' text={placeholderText}/>
          <FBox title='Works With Discord' text={placeholderText}/>
          <FBox title='Anti-Vibration Shock Mount' text={placeholderText}/>
        </div>
        <div className='features-container-2'>
          <FBox title='LED Indicator' text={placeholderText}/>
          <FBox title='Compatible With PlayStation' text={placeholderText}/>
          <FBox title='Mic Input Controls' text={placeholderText}/>
        </div>
      </div>
      <p className='note'>Hover/Click over a feature for more details</p>
      <Button text="Don't Miss Out" page='/product'/>
    </StyledFeatures>
  );
};

export default Features;