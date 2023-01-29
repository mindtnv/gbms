import { Project } from "../types";
import { Box, ChakraProps, Heading, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";

export type ProjectInlineLinkProps = {
  project: Project;
  target?: string;
} & ChakraProps;

const ProjectInlineLink = ({
  project,
  target = "_blank",
  ...props
}: ProjectInlineLinkProps) => {
  return (
    <Box w="100%" {...props}>
      <Link legacyBehavior href={project.href} scroll={false} passHref>
        <LinkBox cursor="pointer" as="a" target={target}>
          <Box>
            <Heading mb={1} as="h4" size="lg">
              {project.title}
            </Heading>
            <Text fontSize={14}>{project.description}</Text>
          </Box>
        </LinkBox>
      </Link>
    </Box>
  );
};

export default ProjectInlineLink;
