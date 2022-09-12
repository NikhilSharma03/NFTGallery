import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/layout";
import { lightTheme, darkTheme, GlobalStyles } from "../utils/themeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <ChakraProvider>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
