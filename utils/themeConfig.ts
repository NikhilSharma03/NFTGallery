import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./../types/theme";

export const lightTheme = {
  body: "#ddd",
  text: "#222",
  primary: "#7c1dc1",
  primaryDark: "#58138a",
};

export const darkTheme = {
  body: "#222",
  text: "#ddd",
  primary: "#7c1dc1",
  primaryDark: "#58138a",
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`;
