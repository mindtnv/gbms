import { Box, Container } from "@chakra-ui/react";
import AppFooter from "../AppFooter";
import { ReactElement } from "react";
import AppNavBar from "../AppNavBar";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Box as="main" minH="100vh" position="relative">
      <AppNavBar />
      <Container maxW="container.md" pt={28} px={6} pb={36}>
        {children}
      </Container>
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
