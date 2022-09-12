import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ddd",
};

export const darkTheme = {
  body: "#222",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`;
