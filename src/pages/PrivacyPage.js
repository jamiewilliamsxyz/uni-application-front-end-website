import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import text from '../assets/text.json';

const StyledPrivacyPage = styled.div`
  display: flex;
  flex-direction: column;
  background: #191919;
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
    margin-top: 10%;
    margin-bottom: 7rem;
    width: clamp(20rem, 60%, 55rem);
  }
`;

function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
  >
      <StyledPrivacyPage>
        <h3>Our commitment to<br></br>protecting your privacy</h3>
        <h4>Learn more about how HyperX collects<br></br>and uses data</h4>
        <div className='container'>
          <div className='text'>
            <p><u>Updated September 19th, 2024</u></p>
            <p>{text.placeholderText}</p>
            <p><i>Thank you for reading</i></p>
          </div>
        </div>
      </StyledPrivacyPage> 
    </motion.div>
  );
}

export default PrivacyPage; 