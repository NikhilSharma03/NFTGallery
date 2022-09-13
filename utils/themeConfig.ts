import { createGlobalStyle } from "styled-components";
import { extendTheme } from "@chakra-ui/react";
import { SCThemeType } from "./../types/theme";

export const SCTheme = {
  body: "#222",
  text: "#ddd",
  primary: "#7c1dc1",
  primaryDark: "#58138a",
};

export const GlobalStyles = createGlobalStyle<{ theme: SCThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body} !important;
    transition: all 0.50s linear;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

export const chakraTheme = extendTheme({
  colors: {
    body: "#222",
    text: "#ddd",
    primary: "#7c1dc1",
    primaryDark: "#58138a",
  },
});
