import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import FAQBlock from '../ui/FAQBlock'
import arrow from '../../images/arrow.svg'

const StyledFAQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121212;
  padding: 0.5rem 2rem 3rem 2rem;

  h3 {
    color: white;
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
  }

  .faq-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: 1.25rem;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .note {
    color: white;
    font-size: 1.1rem;
  }

  .arrow {
    width: 1.6rem;
    height: auto;
    margin-bottom: 1rem;
    margin-top: 0.25rem;
  }

  Button {
    font-size: 1.4rem;
  }
`;

const FAQ = () => {
  return(
    <StyledFAQ>
      <h3>Common Questions<br></br>& Answers</h3>
      <div className='faq-container'>
        <FAQBlock
          question='How do I set up the HyperX Quadcast microphone?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        />
        <FAQBlock
          question='What polar patterns does the HyperX Quadcast have?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        />
        <FAQBlock
          question='Does the HyperX Quadcast come with a pop filter?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        />
        <FAQBlock
          question='What is the HyperX Quadcast microphone compatible with?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        />
      </div>
      <div className='cta-container'>
        <p className='note'>Any More Questions?</p>
        <motion.img
          src={arrow}
          alt='arrow'
          className='arrow'

          animate={{
            y: [0, -8, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
        <Button text='Contact Us' page='/contact'/>
      </div>
    </StyledFAQ>
  );
};

export default FAQ;