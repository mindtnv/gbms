import {
  Box,
  Heading,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import AppBlock from "../components/AppBlock";
import Project from "../components/Project";
import PageHeader from "../components/PageHeader";
import Head from "next/head";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>gbms | Проекты</title>
      </Head>

      <VStack spacing={12} divider={<StackDivider />}>
        <PageHeader duration={0.6}>
          <Heading textAlign="center" as="h2" mb={[0, 2]}>
            Проекты
          </Heading>
          <Text align="center">Список всех проектов с моим участием</Text>
        </PageHeader>

        <AppBlock delay={0.05}>
          <Box mb={8}>
            <Heading as="h3" mb={4}>
              Основные проекты
            </Heading>
            <Text>
              Проекты на которые я потратил много времени и пользуюсь ими /
              поддерживаю их в настоящем.
            </Text>
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX={5} spacingY="3rem">
            <Project
              href="https://mindtnv.gitlab.io/deadinsidenickgenerator/"
              image="/deadinsidegenerator.png"
              title="Дед инсайд генератор ников"
              summary="Генерирует ники для мёртвых внутри ноулайферов."
            />
          </SimpleGrid>
        </AppBlock>

        <AppBlock delay={0.2}>
          <Box mb={8}>
            <Heading as="h3" mb={4}>
              Пет проекты
            </Heading>
            <Text>
              Проекты, созданные мной ради развлечения / в учебных целях.
            </Text>
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX={5} spacingY="3rem">
            <Project
              href="https://mindtnv.gitlab.io/deadinsidenickgenerator/"
              image="/deadinsidegenerator.png"
              title="Дед инсайд генератор ников"
              summary="Генерирует ники для мёртвых внутри ноулайферов."
            />
            <Project
              href="https://mindtnv.gitlab.io/deadinsidenickgenerator/"
              image="/deadinsidegenerator.png"
              title="Дед инсайд генератор ников"
              summary="Генерирует ники для мёртвых внутри ноулайферов."
            />
            <Project
              href="https://mindtnv.gitlab.io/deadinsidenickgenerator/"
              image="/deadinsidegenerator.png"
              title="Дед инсайд генератор ников"
              summary="Генерирует ники для мёртвых внутри ноулайферов."
            />
          </SimpleGrid>
        </AppBlock>

        <AppBlock delay={0.35}>
          <Box mb={8}>
            <Heading as="h3" mb={4}>
              Поделки
            </Heading>
            <Text>
              Проекты, созданные мной ради развлечения / в учебных целях.
            </Text>
          </Box>
        </AppBlock>
      </VStack>
    </>
  );
};

export default ProjectsPage;
