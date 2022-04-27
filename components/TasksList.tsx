import {
  Box,
  Center,
  ChakraProps,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export type TasksListProps = {
  tasks: string[];
} & ChakraProps;

const TasksList = ({ tasks, ...props }: TasksListProps) => {
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

export default TasksList;
