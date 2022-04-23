import { Heading } from "@chakra-ui/react";
import AppNavBarLink from "./AppNavBarLink";

const AppNavBarLogo = () => {
  return (
    <AppNavBarLink href="/" _hover={{ textDecoration: "none" }}>
      <Heading as="h2" fontSize={26}>
        gbms
      </Heading>
    </AppNavBarLink>
  );
};

export default AppNavBarLogo;
