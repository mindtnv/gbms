import { CheckIcon } from "@chakra-ui/icons";
import { Center, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";

const Perks = () => {
  return (
    <>
      <Heading as="h3" mb={4}>
        Что могу
      </Heading>
      <List spacing={4}>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="green.500" />
            Backend .NET - ASP.NET Core, EF Core
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="green.500" />
            Frontend - React, NextJs, TS
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="green.500" />
            DevOps - Docker/Traefik/Prometheus
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="green.500" />
            Backend Node - NestJs, Prisma, TS
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="yellow.500" />
            Frontend Vue
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="red.500" />
            Вёрстка
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent="start">
            <ListIcon as={CheckIcon} color="red.500" />
            Дизайн
          </Center>
        </ListItem>
      </List>
    </>
  );
};

export default Perks;
