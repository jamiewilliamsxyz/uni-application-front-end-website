import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../images/youtube.svg';
import x from '../../images/x.svg';
import instagram from '../../images/instagram.svg';
import smallLogo from '../../images/smalllogo.png';

const StyledFooter = styled.footer`
  background-color: white;
  color: #191919;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);

  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    flex-wrap: wrap;
  }

  .block {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.5rem 0;
    width: 100%;
  }

  .social-icon {
    cursor: pointer;
    width: 2rem;
    margin: 0 0.5rem;
  }

  .logo {
    width: 6.5rem;
    height: auto;
  }

  p {
    text-align: center;
    color: grey;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
    }

    .block {
      flex-direction: column;
    }

    .social-icon {
      width: 1.5rem;
      margin: 0.5rem;
    }

    .logo {
      margin: 1rem 0;
      width: 5rem;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .footer-container {
      padding: 0.5rem;
    }

    .social-icon {
      width: 1.25rem;
    }

    .logo {
      width: 4.5rem;
    }

    p {
      font-size: 0.65rem;
    }
  }
`;

const StyledFLink = styled(Link)`
  text-decoration: none;
  color: #121212;
  transition: color 0.2s ease;
  font-size: 1rem;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #C8102E;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
        <div className='block'>
          <Link to='/'><img src={smallLogo} alt='hyperx logo' className='logo' /></Link>
        </div>
      <div className='footer-container'>
        <div className='block'>
          <a href='https://www.youtube.com/c/hyperx' target='_blank' rel="noreferrer">
            <img src={youtube} alt='youtube' className='social-icon' />
          </a>
          <a href='https://x.com/HyperX' target='_blank' rel="noreferrer">
            <img src={x} alt='x' className='social-icon' />
          </a>
          <a href='https://www.instagram.com/hyperx' target='_blank' rel="noreferrer">
            <img src={instagram} alt='instagram' className='social-icon' />
          </a>
        </div>
        <div className='block links'>
          <StyledFLink to="/contact">Contact</StyledFLink>
          <StyledFLink to="/terms">Terms</StyledFLink>
          <StyledFLink to="/privacy">Privacy</StyledFLink>
        </div>
      </div>
      <p>© 2024 HyperX - All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
