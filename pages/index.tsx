import {
  Box,
  Heading,
  VStack,
  Text,
  StackDivider,
  Avatar,
  Flex,
  Center,
  Fade,
  SlideFade,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <VStack spacing={12} divider={<StackDivider></StackDivider>}>
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{
        default: { duration: 1 },
      }}
    >
      <Box>
        <Flex justify="center" w="100%" mb={8}>
          <Avatar src="/logo.jpg" width={48} height={48}></Avatar>
        </Flex>
        <Heading as="h2">
          <Center>gbms aka godblessmysoul</Center>
        </Heading>
        <Text align="center">
          Fullstack JS/TS/.NET developer | Design stealer
        </Text>
      </Box>
    </motion.div>
    <motion.div
      animate={{ opacity: [0, 1], y: [30, 0] }}
      transition={{
        default: { duration: 0.3, delay: 0.05 },
      }}
    >
      <Box>
        <Heading as="h2">Тесты</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eveniet ipsa quia autem tempore numquam cum velit harum? Temporibus
          quaerat ipsa aliquid maiores culpa deleniti officiis sapiente iusto
          veritatis molestias?
        </Text>
      </Box>
    </motion.div>

    <motion.div
      animate={{ opacity: [0, 1], y: [30, 0] }}
      transition={{
        default: { duration: 0.3, delay: 0.2 },
      }}
    >
      <Box>
        <Heading as="h2">О себе</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          culpa, fuga laboriosam quae alias expedita aperiam cupiditate adipisci
          nesciunt eligendi. Aliquam illum autem maxime cupiditate nihil
          quaerat, similique sint culpa.
        </Text>
      </Box>
    </motion.div>

    <motion.div
      animate={{ opacity: [0, 1], y: [30, 0] }}
      transition={{
        default: { duration: 0.3, delay: 0.45 },
      }}
    >
      <Box>
        <Heading as="h2">Мои проекты</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          dolor nisi commodi accusantium aspernatur earum qui quis nihil dolorum
          molestias! Nulla assumenda earum fugiat molestiae magnam illo itaque
          laboriosam tenetur?
        </Text>
      </Box>
    </motion.div>
  </VStack>
);

export default Home;
