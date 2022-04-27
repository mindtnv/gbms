import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Center flexDirection="column" height="50vh">
      <Box mb={2}>
        <Heading textAlign="center" as="h2" size="2xl">
          404
        </Heading>
      </Box>
      <Box>
        <Text textAlign="center" fontSize="xl">
          Страница не найдена 👽
        </Text>
      </Box>
    </Center>
  );
}
