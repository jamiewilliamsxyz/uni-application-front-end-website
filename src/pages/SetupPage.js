import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import video from '../assets/video.mp4';
import styled from 'styled-components';

const StyledSetupPage = styled.div`
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

  video {
    margin-top: 6rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    box-shadow: 0px 5px 10px rgba(253, 55, 40, 0.6);
    transition: 0.5s;
    width: clamp(300px, 80vw, 800px);
    height: auto;
  }

  video:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }

  .btn-container {
    margin-bottom: 4rem;
    margin-top: 4.4rem;
  }

  @media (max-width: 450px) {
    h3 {
      line-height: 1;
    }
  }
`;

function SetupPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledSetupPage>
        <div className="titles">
          <h3>Setup Guide</h3>
          <h4>Set Up Your HyperX<br></br>Quadcast in Minutes</h4>
        </div>
        <video controls src={video} />
        <div className="btn-container">
          <Button text="Buy Now" page="/product" />
        </div>
      </StyledSetupPage>
    </motion.div>
  );
}

export default SetupPage;
