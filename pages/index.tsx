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
import Link from "next/link";
import AppBlock from "../components/AppBlock";
import SkillsList from "../components/SkillsList";
import TasksList from "../components/TasksList";
import AppNavBarLink from "../components/AppNavBarLink";
import PageHeader from "../components/PageHeader";
import { Skill } from "../types";
import tasksData from "../data/index/tasks.json";
import skillsData from "../data/index/skills.json";
import { NextSeo } from "next-seo";

export type HomePageProps = {
  tasks: string[];
  skills: Skill[];
};

const Home: NextPage<HomePageProps> = ({ tasks, skills }: HomePageProps) => {
  return (
    <>
      <NextSeo
        title="gbms | Главная"
        description="Я gbms. Люблю решать проблемы кодом и автоматизировать рутинные задачи. Список моих проектов и целей."
      />
      
      <VStack spacing={12} divider={<StackDivider />} width="100%">
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
            20 лет, живу в Твери. Люблю решать проблемы кодом и автоматизировать
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
            <SkillsList skills={skills} />
          </AppBlock>
          <Divider my={[12, 0]} display={["block", "none"]} />
          <AppBlock delay={0.2} minW={["100%", 275]} width="auto">
            <TasksList tasks={tasks} />
          </AppBlock>
        </Flex>
      
        <AppBlock delay={0.5}>
          <Box mb={4}>
            <Heading as="h3" mb={4}>
              Мои проекты
            </Heading>
            <Text>Полный список всех проектов с моим участием</Text>
          </Box>
          <Link legacyBehavior href="/projects" passHref scroll={false}>
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
          <Link legacyBehavior href="/links" passHref scroll={false}>
            <Button as="a">Полный список</Button>
          </Link>
        </AppBlock>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      tasks: tasksData.data,
      skills: skillsData.data,
    },
  };
}

export default Home;
