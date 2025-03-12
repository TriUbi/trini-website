import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: linear-gradient(150deg, rgb(28, 58, 109), rgb(5, 21, 55));
    color: white;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
    text-shadow: 0 0 20px rgb(0, 0, 0);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
