import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import { SCTheme, chakraTheme, GlobalStyles } from "../utils/themeConfig";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={SCTheme}>
        <ChakraProvider theme={chakraTheme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
