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
import Logo from "../components/Logo";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import AppBlock from "../components/AppBlock";
import Perks from "../components/Perks";
import Tasks from "../components/Tasks";
import AppNavBarLink from "../components/AppNavBarLink";
import PageHeader from "../components/PageHeader";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>gbms | Главная</title>
      </Head>

      <VStack spacing={12} divider={<StackDivider />}>
        <PageHeader duration={1}>
          <Logo />
          <Box>
            <Heading as="h2" textAlign="center" mb={[4, 0]}>
              gbms aka godblessmysoul
            </Heading>
            <Text align="center">
              Fullstack JS/TS/.NET developer | Design stealer
            </Text>
          </Box>
        </PageHeader>

        <AppBlock delay={0.05}>
          <Heading as="h3" mb={4}>
            О себе
          </Heading>
          <Text>
            19 лет, живу в Твери. Люблю решать проблемы кодом и автоматизировать
            рутинные задачи. Скромный, ответственный, самоорганизованный,
            коммуникабельный, стрессоустойчивый, конкурентоспособный,
            конструктивный, разносторонний, усидчивый, умный, креативный,
            красивый{" "}
            <AppNavBarLink href="/bio" textDecoration="underline">
              ...
            </AppNavBarLink>
          </Text>
        </AppBlock>

        <Flex direction={["column", "row"]} justify="space-between" w="100%">
          <AppBlock delay={0.2} minW={["100%", 325]} width="auto">
            <Perks />
          </AppBlock>
          <Divider my={[12, 0]} display={["block", "none"]} />
          <AppBlock delay={0.2} minW={["100%", 275]} width="auto">
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
            <Text>Как со мной связаться. Где меня найти.</Text>
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
