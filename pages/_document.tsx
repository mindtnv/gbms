import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body style={{ overflowY: "scroll" }}>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
