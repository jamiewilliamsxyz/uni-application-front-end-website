import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: "Inter", sans-serif;
  }
  p, h1, h2, h3, h4, h5 {
    cursor: default;
  }
`;

export default GlobalStyle;