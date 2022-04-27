import { CheckIcon } from "@chakra-ui/icons";
import { Center, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Skill } from "../types";

export type SkillsListProps = {
  skills: Skill[];
};

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <>
      <Heading as="h3" mb={4}>
        Что могу
      </Heading>
      <List spacing={4}>
        {skills.map((s) => (
          <ListItem key={s.title}>
            <Center justifyContent="start">
              <ListIcon as={CheckIcon} color={s.color} />
              {s.title}
            </Center>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SkillsList;
