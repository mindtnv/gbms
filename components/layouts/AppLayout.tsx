import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import AppNavBar from "../AppNavBar";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Box as="main" pb={28}>
      <AppNavBar />
      <Container maxW="container.md" pt={28} px={3}>
        {children}
      </Container>
    </Box>
  );
};

export default AppLayout;
