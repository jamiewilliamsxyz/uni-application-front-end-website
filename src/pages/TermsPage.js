import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import text from '../assets/text.json';

const StyledTermsPage = styled.div`
  display: flex;
  flex-direction: column;
  background: #141414;
  color: white;

  h3 {
    font-size: clamp(2.2rem, 6.8vw, 4.75rem);
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 0rem;
  }

  h4 {
    font-size: clamp(1rem, 2.275vw, 1.5rem);
    font-weight: 600;
    text-align: center;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .text {
    margin-top: 7rem;
    margin-bottom: 7rem;
    width: clamp(20rem, 60%, 55rem);
  }
`;

function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
  >
      <StyledTermsPage>
        <h3>Our terms of service</h3>
        <h4>Read our terms below to learn more about<br></br>your rights and responsibilities</h4>
        <div className='container'>
          <div className='text'>
            <p><u>Updated August 4th, 2024</u></p>
            <p>{text.placeholderText}</p>
            <p><i>Thank you for reading</i></p>
          </div>
        </div>
      </StyledTermsPage> 
    </motion.div>
  );
}

export default TermsPage; 