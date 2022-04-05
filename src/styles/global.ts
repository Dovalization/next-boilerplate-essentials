import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // REM = 1rem = 16px
  // font-size: 16px (Desktop)
  html {
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      // REM = 1rem = 15px 
      // font-size: 15px (Tablet)
      font-size: 93.75%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      // REM = 1rem = 14px
      // font-size: 14px (Mobile)
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text.dark};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 3px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.primary};
    }
    

    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    text-transform: uppercase;

    > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    text-transform: uppercase;
  }

  [disable] {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  z-index: 1;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1080px) {
    max-width: 85%;
  }

  @media (max-width: 720px) {
    max-width: 90%;
  }
`;
