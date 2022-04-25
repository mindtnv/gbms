import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import AppNavBarLink from "./AppNavBarLink";
import AppNavBarLogo from "./AppNavBarLogo";

const AppNavBar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      px={3}
      py={5}
      bg={useColorModeValue("#ffffff60", "#20202080")}
      css={{ backdropFilter: "blur(8px)" }}
      zIndex={10}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between">
          <AppNavBarLogo />
          <HStack spacing={7} display={{ base: "none", sm: "flex" }}>
            <AppNavBarLink href="/projects">Проекты</AppNavBarLink>
            <AppNavBarLink href="/links">Ссылки</AppNavBarLink>
          </HStack>
          <Box display={{ base: "inline-block", sm: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <AppNavBarLink href="/" _hover={{ textDecoration: "none" }}>
                  <MenuItem>Главная</MenuItem>
                </AppNavBarLink>
                <AppNavBarLink
                  href="/projects"
                  _hover={{ textDecoration: "none" }}
                >
                  <MenuItem>Проекты</MenuItem>
                </AppNavBarLink>

                <AppNavBarLink
                  href="/links"
                  _hover={{ textDecoration: "none" }}
                >
                  <MenuItem>Ссылки</MenuItem>
                </AppNavBarLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AppNavBar;
