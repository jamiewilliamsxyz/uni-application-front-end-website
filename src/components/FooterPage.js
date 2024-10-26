import React from 'react';
import styled from 'styled-components';
import text from '../assets/text.json';

const StyledFooterPage = styled.div`
  color: white;
  background-color: #191919;
  height: 100vh;


  h3 {
    font-size: 4.75rem;
    line-height: 0rem;
    text-align: center;
    margin-top: 6rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const FooterPage = ({ title, subtitle, date}) => {
  return (
    <StyledFooterPage>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{date}</p>
      <p>{text.placeholderText}</p>
    </StyledFooterPage>
  );
};

export default FooterPage;
