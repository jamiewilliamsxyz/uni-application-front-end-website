import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Form from '../components/sections/Form';

const StyledContactPage = styled.div`
  color: white;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 5rem;

  h3 {
    font-size: 3.75rem;
    line-height: 0rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .titles {
    margin-top: 2rem;
    text-align: center;
  }

  .form {
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    .form {
      margin-bottom: 4rem;
    }
    h3 {
      line-height: 1;
    }
  }
`;

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContactPage>
        <div className='titles'>
          <h3>Contact Us</h3>
          <h4>Looking for Support or Info?</h4>
        </div>
        <div className='form'>
          <Form />
        </div>
      </StyledContactPage>
    </motion.div>
  );
}

export default ContactPage;
