import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import AppBlock from "../components/AppBlock";
import { FaGithub, FaGitlab, FaSteam, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import ResourceLink from "../components/ResourceLink";
import { NextPage } from "next";
import PageHeader from "../components/PageHeader";
import { NextSeo } from "next-seo";

const LinkPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="gbms | Ссылки"
        description="Как со мной свзяться. Где меня найти."
      />
      <VStack spacing={12} divider={<StackDivider />} width="100%">
        <PageHeader duration={0.6}>
          <Heading textAlign="center" as="h2" mb={[0, 2]}>
            Ссылки
          </Heading>
          <Text align="center">Как со мной связаться. Где меня найти.</Text>
        </PageHeader>
        <AppBlock delay={0.05} width="100%">
          <Box>
            <Heading as="h3" mb={5} textAlign="center">
              Социальные сети
            </Heading>
            <Stack justify="center" spacing={2} direction={["column", "row"]}>
              <ResourceLink
                href="https://t.me/godblessmysoul"
                bgColor="#0088cc"
                hoverBgColor="#00A3F5"
                icon={<FaTelegramPlane />}
              >
                Telegram
              </ResourceLink>
              <ResourceLink
                href="https://vk.com/id202727701"
                bgColor="4C75A3"
                hoverBgColor="#5982B1"
                icon={<ChatIcon />}
              >
                ВКонтакте
              </ResourceLink>

              <Link
                legacyBehavior
                href="https://steamcommunity.com/id/godblessmysoul1/"
                passHref
              >
                <Button
                  as="a"
                  target="_blank"
                  colorScheme="blue"
                  bgColor="#1b2838"
                  _hover={{ bgColor: "#283B53" }}
                  leftIcon={<FaSteam />}
                >
                  Steam
                </Button>
              </Link>
            </Stack>
          </Box>
        </AppBlock>

        <AppBlock delay={0.2}>
          <Box>
            <Heading as="h3" mb={4} textAlign="center">
              Код
            </Heading>
            <Stack justify="center" spacing={2} direction={["column", "row"]}>
              <ResourceLink
                href="https://github.com/mindtnv"
                bgColor="#333333"
                hoverBgColor="#474747"
                icon={<FaGithub />}
              >
                GitHub
              </ResourceLink>
              <ResourceLink
                href="https://gitlab.com/mindtnv"
                bgColor="#FC6D27"
                hoverBgColor="#FD935E"
                icon={<FaGitlab />}
              >
                GitLab
              </ResourceLink>
            </Stack>
          </Box>
        </AppBlock>
      </VStack>
    </>
  );
};

export default LinkPage;
