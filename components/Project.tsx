import Link from "next/link";
import { Box, ChakraProps, LinkBox, Text } from "@chakra-ui/react";
import Image from "next/image";

export type ProjectProps = {
  href: string;
  image: string;
  title: string;
  summary: string;
  target?: string;
} & ChakraProps;

const Project = ({
  href,
  image,
  title,
  summary,
  target = "_blank",
  ...props
}: ProjectProps) => {
  return (
    <Box w="100%" textAlign="center" {...props}>
      <Link href={href} scroll={false} passHref>
        <LinkBox cursor="pointer" as="a" target={target}>
          <Image
            src={image}
            alt={image}
            width="100%"
            height={55}
            layout="responsive"
            objectFit="contain"
            style={{ borderRadius: ".5rem" }}
          />
          <Box>
            <Text mt={2} fontSize={20} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={14}>{summary}</Text>
          </Box>
        </LinkBox>
      </Link>
    </Box>
  );
};

export default Project;
