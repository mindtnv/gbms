import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/layouts/AppLayout";
import Fonts from "../components/Fonts";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
