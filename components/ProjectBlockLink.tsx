import Link from "next/link";
import {
  AspectRatio,
  Box,
  ChakraProps,
  Heading,
  LinkBox,
  Text,
} from "@chakra-ui/react";
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
    <Box
      w="100%"
      textAlign={["center", "left", "center"]}
      {...props}
      position="relative"
    >
      <Link href={project.href} scroll={false} passHref>
        <LinkBox
          cursor="pointer"
          as="a"
          target={project.href[0] === "h" ? "_blank" : "_parent"}
        >
          <AspectRatio maxW="350" ratio={1.5} display="block">
            <Image
              priority
              src={project.image}
              alt={project.image}
              layout="fill"
              style={{ borderRadius: ".5rem" }}
            />
          </AspectRatio>
          <Box width="100%">
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
