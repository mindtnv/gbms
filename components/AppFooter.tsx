import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

const AppFooter = () => {
  return (
    <Box
      as="footer"
      w="100%"
      px={3}
      py={5}
      bg={useColorModeValue("#ffffff60", "#20202080")}
      css={{ backdropFilter: "blur(8px)" }}
      zIndex={10}
      bottom={0}
      position="absolute"
    >
      <Container maxW="container.lg">
        <Text align="center">
          🛠 Builded by <strong>gbms</strong> with <strong>Next</strong>/
          <strong>Chakra UI</strong>
        </Text>
      </Container>
    </Box>
  );
};

export default AppFooter;
