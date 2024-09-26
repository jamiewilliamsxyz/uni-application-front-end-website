import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Button from '../components/ui/Button';
import micproduct from '../images/micproduct.png'
import michero from '../images/michero.png'
import micfeatures from '../images/micfeatures.png'
import taptomutemic from '../images/taptomutemic.png'

const StyledProductPage = styled.div`
  color: white;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 8rem;

  h3 {
    font-size: clamp(2.2rem, 6.8vw, 4rem);
    text-align: center;
  }

  h4 {
    font-size: 2.75rem;
    font-weight: 600;
    text-align: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    font-size: clamp(2.2rem, 80%, 4rem);
    margin: 2rem 2rem 7rem 2rem;
    gap: 12%;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: clamp(2.2rem, 44%, 4rem);
  }

  ul {
    font-size: 1.25rem;
  }

  img {
    width: clamp(5rem, 140%, 30rem);
    height: auto;
    object-fit: contain
  }

  .price {
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
    background: linear-gradient(to right, #C8102E, #FD3728 50%, #FF5722);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .box-container {
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30rem;
  }

  .box {
    color: #121212;
    background-color: white;
    border-radius: 1rem;
    width: 5.5rem;
    height: 5.5rem;
    padding: 0.5rem;
    box-shadow: 0px 5px 10px rgba(253, 55, 40, 0.6);
    transition: 0.3s;
  }

  .box:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);
  }

  .box:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .box-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain
  }

  .main-product-img {
    width: clamp(5rem, 30rem, 30rem);
    height: 30rem;
    object-fit: contain;
  }

  .note {
    font-size: 0.88rem;
    color: #545454;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1rem;
  }

  .popup-container {
    position: relative;
    transition: all 0.2s;
  }
  
  .popup {
    width: 20rem;
    height: auto;
    text-align: center;
    background-color: #FFFFFF;
    color: #141414;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.3em 0.6em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 1rem;

  }
  
  .popup::before {
    background-color: #FFFFFF;
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
  }
  
  .popup-container:hover .popup {
    top: -100%;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }


  @media (max-width: 900px) {
    .row {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5%;
      margin-top: 20%;
    }

    .main-product-img {
      align-self: center;
      width: clamp(4rem, 20rem, 30rem);
      height: 22rem;
      object-fit: contain;
    }

    ul {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 450px) {
    ul {
      width: 60%;
      align-self: center;
    }
    .box-container {
      width: 23rem;
      height: 23rem;
      margin-top: 0rem;
      gap: 1rem;
    }
  }

  @media (max-width: 389px) {
    .box-container {
      display: none;
    }
  }
`;

function ProductPage() {
  const [currentImage, setCurrentImage] = useState(micproduct);

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 0.5 }}
  >
    <StyledProductPage>
      <h3>Upgrade Your Gaming<br></br>Experience</h3>
      <div className='row'>
        <div class='column'>
          <img src={currentImage} alt='product' className='main-product-img'/>
          <div className='box-container'>
            <div className='box' onClick={() => handleImageChange(micproduct)}>   
              <img src={micproduct} className='box-img' alt='product'/>
            </div>
            <div className='box' onClick={() => handleImageChange(micfeatures)}>   
              <img src={micfeatures} className='box-img' alt='product'/>
            </div>
            <div className='box' onClick={() => handleImageChange(taptomutemic)}>   
              <img src={taptomutemic} className='box-img' alt='product'/>
            </div>
            <div className='box' onClick={() => handleImageChange(michero)}>   
              <img src={michero} className='box-img' alt='product'/>
            </div>
          </div>
        </div>
        <div className='column'>
          <h4>HyperX<br></br>QuadCast</h4>
          <ul classname='description'>
            <li>QuadCast includes a built-in anti-vibration shock mount, internal pop filter, and an adapter for most stands</li>
            <li>Quickly check mic status with the LED indicator, and tap-to-mute to prevent audio accidents</li>
            <li>Set mic input levels with the conveniently-located gain control, and monitor sound via headphone jack</li>
            <li>Ideal standalone condenser microphone for streamers who want quality sound</li>
            <li>It is Discord and TeamSpeak certified and compatible with PC, PS4, PS5 and Mac</li>
          </ul>
          <p className='price'>£69.99</p>
        </div>
      </div>
      <div class="popup-container">
        <span class="popup">This is a front-end project for my portfolio. Purchasing is not available.</span>
        <span class="text"><Button text='Purchase' page='/product'/></span>
      </div>
      <a href='https://amzn.to/3XSvDzC' className='note'>Buy on Amazon</a>
    </StyledProductPage>
  </motion.div>
  );
}

export default ProductPage;