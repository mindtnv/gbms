import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/layouts/AppLayout";
import Fonts from "../components/Fonts";
import theme from "../theme";
import AnimationLayout from "../components/AnimationLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppLayout>
        <AnimationLayout route={router.route}>
          <Component {...pageProps} />
        </AnimationLayout>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
