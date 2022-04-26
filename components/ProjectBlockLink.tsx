import Link from "next/link";
import { Box, ChakraProps, Heading, LinkBox, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Project } from "../types";

export type ProjectBlockLinkProps = {
  project: Project;
  target?: string;
} & ChakraProps;

const ProjectBlockLink = ({
  project,
  target = "_blank",
  ...props
}: ProjectBlockLinkProps) => {
  return (
    <Box w="100%" textAlign="center" {...props}>
      <Link href={project.href} scroll={false} passHref>
        <LinkBox cursor="pointer" as="a" target={target}>
          <Image
            src={project.image}
            alt={project.image}
            width="100%"
            height={55}
            layout="responsive"
            objectFit="contain"
            style={{ borderRadius: ".5rem" }}
          />
          <Box>
            <Heading mt={2} as="h4" size="md">
              {project.title}
            </Heading>
            <Text fontSize={14}>{project.description}</Text>
          </Box>
        </LinkBox>
      </Link>
    </Box>
  );
};

export default ProjectBlockLink;
