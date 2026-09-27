import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    color: #000000;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    font: inherit;
    cursor: pointer;
    outline: none;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;
