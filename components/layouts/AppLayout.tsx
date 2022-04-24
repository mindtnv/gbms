import { Box, Container } from "@chakra-ui/react";
import AppFooter from "../AppFooter";
import { ReactElement } from "react";
import AppNavBar from "../AppNavBar";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Box as="main">
      <AppNavBar />
      <Container maxW="container.md" pt={28} px={6} mb={20}>
        {children}
      </Container>
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
