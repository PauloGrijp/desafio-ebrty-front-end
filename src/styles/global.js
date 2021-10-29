import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.background};

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }

  ul {
    list-style: none;
  }

  button, input {
    font: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Container = styled.main`
  display: flex;

  height: 100vh;
  width: 100vw;
`;