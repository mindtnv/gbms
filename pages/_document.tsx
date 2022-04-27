import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body style={{ overflowY: "scroll" }}>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
