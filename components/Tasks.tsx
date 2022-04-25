import {
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Tasks = () => {
  const tasks = [
    "Пожать 100кг от гуди",
    "Построить бизнес",
    "Построить дом",
    "Посадить дерево",
    "Вырастить сына",
  ];
  return (
    <>
      <Box mb={4}>
        <Heading as="h3">Что хочу</Heading>
      </Box>
      <List spacing={4}>
        {tasks.map((task) => (
          <ListItem key={task}>
            <Center justifyContent="start">
              <ListIcon as={StarIcon} color="orange.500" />
              {task}
            </Center>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Tasks;
