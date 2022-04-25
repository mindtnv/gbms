import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../public/logo.jpg";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import AppBlock from "../components/AppBlock";
import Perks from "../components/Perks";
import Tasks from "../components/Tasks";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>gbms - Главная</title>
      </Head>
      <VStack spacing={12} divider={<StackDivider />}>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{
            default: { duration: 1 },
          }}
        >
          <Box>
            <Flex justify="center" w="100%" mb={8}>
              <Image
                alt="logo"
                src={logo}
                width={250}
                height={250}
                layout="fixed"
                style={{ borderRadius: "100%" }}
              />
            </Flex>
            <Box>
              <Heading as="h2" textAlign="center" mb={[4, 0]}>
                gbms aka godblessmysoul
              </Heading>
              <Text align="center">
                Fullstack JS/TS/.NET developer | Design stealer
              </Text>
            </Box>
          </Box>
        </motion.div>

        <AppBlock delay={0.05}>
          <Heading as="h2" mb={4}>
            О себе
          </Heading>
          <Text>
            19 лет, живу в Твери. Люблю решать проблемы кодом и автоматизировать
            задачи. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam commodi consequatur eligendi enim facilis fuga ipsum
            laudantium non numquam odit pariatur possimus quae, quidem ratione
            voluptas. Aliquid et eum numquam!
          </Text>
        </AppBlock>

        <Flex direction={["column", "row"]}>
          <AppBlock delay={0.2}>
            <Perks />
          </AppBlock>
          <Divider my={[12, 0]} display={["block", "none"]} />
          <AppBlock delay={0.2}>
            <Tasks />
          </AppBlock>
        </Flex>

        <AppBlock delay={0.5}>
          <Box mb={4}>
            <Heading as="h3" mb={4}>
              Мои проекты
            </Heading>
            <Text>Полный список всех проектов с моим участием</Text>
          </Box>
          <Link href="/projects" passHref>
            <Button as="a" colorScheme="purple">
              Моё портфолио
            </Button>
          </Link>
        </AppBlock>

        <AppBlock delay={0.5}>
          <Box mb={4}>
            <Heading as="h3" mb={4}>
              Ссылки
            </Heading>
          </Box>
          <Link href="/links" passHref>
            <Button as="a">Полный список</Button>
          </Link>
        </AppBlock>
      </VStack>
    </>
  );
};

export default Home;
