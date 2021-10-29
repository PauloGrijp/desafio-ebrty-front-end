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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;    
  }
  
  .react-modal-content {
    max-width: 576px;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
`;

export const Container = styled.main`
  display: flex;

  height: 100vh;
  width: 100vw;
`;