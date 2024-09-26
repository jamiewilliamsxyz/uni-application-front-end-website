import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import michero from '../../images/michero.png'

const StyledHero = styled.div`
  background-color: #121212;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16%;
  padding: 0rem 2rem 3rem 2rem;
  position: relative;

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  h1 {
    margin-top: 12%;
    font-size: 4.75rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 6.5rem;
    margin-top: 0.15rem;
  }

  .img-container {
    display: flex;
    height: 100%;
    width: auto;
    justify-content: center;
    align-items: center;
    margin-top: 4.5rem;
  }

  img {
    width: 84%;
    height: auto;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;

    .hero-container {
      align-items: center;
      text-align: center;
    }

    h2 {
      margin-bottom: 5rem;
    }
    
    .img-container {
      margin-top: 8rem;
    }

    img{
      width: 50%;
    }
  }

  @media (max-width:400px) {
    h1 {
      font-size: 4.3rem;
    }
  }
`;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return(
    <StyledHero>
      <div className='hero-container'>
        <h1>HyperX QuadCast</h1>
        <h2>Modern Gaming Microphone</h2>
        <Button text='Buy Now' page='/product'/>
      </div>
      <div className='img-container'>
        <motion.img
          src={michero}
          alt='HyperX QuadCast Microphone'
          style={{ y }}
        />
      </div>
    </StyledHero>
  );
};

export default Hero;