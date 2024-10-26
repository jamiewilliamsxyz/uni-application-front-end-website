import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../images/logo.webp';
import menu from '../../images/menu.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;


  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 10rem;
    height: auto;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: #171717;
      margin: 0.3rem 0;
      transition: all 0.3s ease;
    }
  }

  .nav-link-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
  }

  li {
    margin-right: 5rem;
  }

  .menu-img {
    width: 2.2rem;
    height: auto;
  }

  @media (max-width: 720px) {
    .hamburger {
      display: flex;
    }

    .nav-link-container {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 999;
      padding: 1rem 0;
    }

    ul {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }
`;

const StyledNLink = styled(Link)`
  text-decoration: none;
  color: #121212;
  transition: color 0.2s ease;
  font-size: 1.25rem;

  &:hover {
    color: #C8102E;
    transition: color 0.2s ease;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledNav isOpen={isOpen}>
      <div className='img-container'>
        <Link to='/'><img src={logo} alt='HyperX Logo'/></Link>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <img src={menu} className='menu-img' alt='menu'/>
      </div>
      <motion.div
        className='nav-link-container'
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li><StyledNLink to="/">Home</StyledNLink></li>
          <li><StyledNLink to="/product">Product</StyledNLink></li>
          <li><StyledNLink to="/setup">Setup</StyledNLink></li>
          <li><StyledNLink to="/contact">Contact</StyledNLink></li>
        </ul>
      </motion.div>
    </StyledNav>
  );
};

export default Nav;
