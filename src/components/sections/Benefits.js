import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import BCard from '../ui/BCard';
import mute from '../../images/mute.svg'
import volume from '../../images/volume.svg'
import shapes from '../../images/shapes.svg'


const StyledBenefits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1f1f1f;
  padding: 0.5rem 2rem 3rem 2rem;
  
  h3 {
    color: white;
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
  }

  span {
    background: linear-gradient(to right, #C8102E, #FD3728 50%, #FF5722);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1050px) {
    .card-container {
      flex-direction: column;
    }
  }
`;

const Hero = () => {
  return(
    <StyledBenefits>
      <h3>Experience the <span>Ultimate</span><br></br>Sound Advantage</h3>
      <div className='card-container'>
        <BCard
          icon={mute}
          title='Tap to Mute'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'>
        </BCard>
        <BCard
          icon={volume}
          title='Crisp Audio'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'>
        </BCard>
        <BCard
          icon={shapes}
          title='Sturdy Design'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'>
        </BCard>
      </div>
      <Button text="I'm In!" page='/product'/>
    </StyledBenefits>
  );
};

export default Hero;