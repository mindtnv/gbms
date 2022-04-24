import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Tasks = () => {
  return (
    <>
      <Box mb={4}>
        <Heading as="h3">Что хочу</Heading>
      </Box>
      <UnorderedList>
        <ListItem>
          Пожать 50/60/70/80/90/<strong>100</strong>/110/120/130/140кг от груди
        </ListItem>
        <ListItem>
          Создать альтернативу <strong>Anki</strong>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Tasks;
