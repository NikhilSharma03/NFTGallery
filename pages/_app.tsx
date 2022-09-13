import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/layout";
import { SCTheme, chakraTheme, GlobalStyles } from "../utils/themeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={SCTheme}>
      <ChakraProvider theme={chakraTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
