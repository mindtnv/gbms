import {
  Box,
  Heading,
  StackDivider,
  VStack,
  Text,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AppBlock from "../components/AppBlock";

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
          <Box mb={7}>
            <Heading as="h3">Основные проекты</Heading>
            <Text>
              Проекты на которые я потратил много времени и пользуюсь ими /
              поддерживаю их в настоящем.
            </Text>
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX={5} spacingY="3rem">
            <Box w="100%" textAlign="center">
              <Link href={`/works/1`} scroll={false} passHref>
                <LinkBox cursor="pointer">
                  <Image
                    src="/deadinsidegenerator.png"
                    alt="test"
                    className="grid-item-thumbnail"
                    width="100%"
                    height={55}
                    layout="responsive"
                    objectFit="contain"
                    style={{ borderRadius: ".5rem" }}
                  />
                  <LinkOverlay href={`/works/1`}>
                    <Text mt={2} fontSize={20}>
                      Дед инсайд генератор ников
                    </Text>
                  </LinkOverlay>
                  <Text fontSize={14}>Зачем? Ради развлечения.</Text>
                </LinkBox>
              </Link>
            </Box>
          </SimpleGrid>
        </AppBlock>

        <AppBlock delay={0.2}>
          <Box mb={7}>
            <Heading as="h3">Второстепенные проекты</Heading>
            <Text>
              Проекты, созданные мной ради развлечения / в учебных целях.
            </Text>
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX={5} spacingY="3rem">
            <Box w="100%" textAlign="center">
              <Link href={`/works/1`} scroll={false} passHref>
                <LinkBox cursor="pointer">
                  <Image
                    src="/deadinsidegenerator.png"
                    alt="test"
                    className="grid-item-thumbnail"
                    width="100%"
                    height={55}
                    layout="responsive"
                    objectFit="contain"
                    style={{ borderRadius: ".5rem" }}
                  />
                  <LinkOverlay href={`/works/1`}>
                    <Text mt={2} fontSize={20}>
                      Дед инсайд генератор ников
                    </Text>
                  </LinkOverlay>
                  <Text fontSize={14}>Зачем? Ради развлечения.</Text>
                </LinkBox>
              </Link>
            </Box>
            <Box w="100%" textAlign="center">
              <Link href={`/works/1`} scroll={false} passHref>
                <LinkBox cursor="pointer">
                  <Image
                    src="/deadinsidegenerator.png"
                    alt="test"
                    className="grid-item-thumbnail"
                    width="100%"
                    height={55}
                    layout="responsive"
                    objectFit="contain"
                    style={{ borderRadius: ".5rem" }}
                  />
                  <LinkOverlay href={`/works/1`}>
                    <Text mt={2} fontSize={20}>
                      Дед инсайд генератор ников
                    </Text>
                  </LinkOverlay>
                  <Text fontSize={14}>Зачем? Ради развлечения.</Text>
                </LinkBox>
              </Link>
            </Box>

            <Box w="100%" textAlign="center">
              <Link href={`/works/1`} scroll={false} passHref>
                <LinkBox cursor="pointer">
                  <Image
                    src="/deadinsidegenerator.png"
                    alt="test"
                    className="grid-item-thumbnail"
                    width="100%"
                    height={55}
                    layout="responsive"
                    objectFit="contain"
                    style={{ borderRadius: ".5rem" }}
                  />
                  <LinkOverlay href={`/works/1`}>
                    <Text mt={2} fontSize={20}>
                      Дед инсайд генератор ников
                    </Text>
                  </LinkOverlay>
                  <Text fontSize={14}>Зачем? Ради развлечения.</Text>
                </LinkBox>
              </Link>
            </Box>
          </SimpleGrid>
        </AppBlock>
      </VStack>
    </>
  );
};

export default ProjectsPage;
