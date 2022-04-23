import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1">GBMS Project</Heading>
    </Container>
  );
};

export default Home;
