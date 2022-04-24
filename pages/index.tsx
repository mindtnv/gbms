import {
  Box,
  Heading,
  VStack,
  Text,
  StackDivider,
  Avatar,
  Flex,
  Center,
  ListItem,
  Button,
  UnorderedList,
  OrderedList,
  ListIcon,
  List,
  Divider,
} from "@chakra-ui/react";
import logo from "../public/logo.jpg";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import AppBlock from "../components/AppBlock";
import { CheckIcon } from "@chakra-ui/icons";
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
      <VStack spacing={12} divider={<StackDivider></StackDivider>}>
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
            19 лет, живу в Твери. Люблю TypeScript/.NET. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Id qui ad labore reiciendis odit,
            quaerat veritatis minus explicabo excepturi. Enim harum velit modi
            dolor expedita maxime autem nisi dicta vitae.
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
              Что уже сделал
            </Heading>
            <Text>Список того, что я хочу:</Text>
          </Box>
          <UnorderedList>
            <ListItem>
              Пожать 50/60/70/80/90/<strong>100</strong>/110/120/130/140кг от
              груди 💪
            </ListItem>
          </UnorderedList>
        </AppBlock>

        <AppBlock delay={0.5}>
          <Box mb={4}>
            <Heading as="h3" mb={4}>
              Мои проекты
            </Heading>
            <Text>
              Какой-то конкретной направленности в моих проектах нет. Занимаюсь
              чем угодно, главное, чтобы было интересно.
            </Text>
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
