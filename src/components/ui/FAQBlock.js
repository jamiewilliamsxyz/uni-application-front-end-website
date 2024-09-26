import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import caret from '../../images/caret.svg';

const StyledFAQBlock = styled.div`
  color: #121212;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 0.75rem;
  width: clamp(20rem, 80%, 63rem);
  height: auto;
  padding: 0rem 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 6px 10px rgba(253, 55, 40, 0.5);
  transition: 0.2s;
  align-self: center;

  &:hover {
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }

  img {
    width: 1.5rem;
    height: auto;
    margin-right: 1rem;
  }

  h4 {
    cursor: pointer;
    font-size: 1.75rem;
    margin-left: 1rem;
  }

  .faq-header {
    display: flex;
    align-items: center;
  }

  .answer-container {
    max-height: 0;
    padding: 0 1rem;
    transition: max-height 0.6s ease, opacity 0.3s ease;
  }

  &.open .answer-container {
    max-height: 63rem;
  }

  p {
    cursor: pointer;
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;


const FAQBlock = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggle(){
    setIsOpen(!isOpen);
  };

  return(
    <StyledFAQBlock className={isOpen ? 'open' : ''} onClick={toggle}>
      <div className="faq-header">
        <motion.img
          src={caret}
          alt="faq toggle"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <h4>{question}</h4>
      </div>
      <div className="answer-container">
        <p>{answer}</p>
      </div>
    </StyledFAQBlock>

  );
};

export default FAQBlock;