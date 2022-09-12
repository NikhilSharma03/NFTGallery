import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ddd",
  primary: "#7c1dc1",
  primaryDark: "#58138a",
};

export const darkTheme = {
  body: "#222",
  primary: "#7c1dc1",
  primaryDark: "#58138a",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`;
