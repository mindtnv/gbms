import {
  Box,
  Heading,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AppBlock from "../components/AppBlock";
import Project from "../components/Project";

const ProjectsPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>gbms - Проекты</title>
      </Head>
      <VStack spacing={12} divider={<StackDivider />}>
        <Box>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{
              default: { duration: 0.6 },
            }}
          >
            <Heading textAlign="center" as="h2" mb={[0, 2]}>
              Проекты
            </Heading>
            <Text align="center">Список всех проектов с моим участием</Text>
          </motion.div>
        </Box>

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
