import { Button, ChakraProps, ThemeTypings } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

export type ResourceLinkProps = {
  href: string;
  bgColor: string;
  hoverBgColor: string;
  icon: ReactElement;
  colorScheme?: ThemeTypings["colorSchemes"];
  children?: ReactElement | Array<ReactElement> | string;
} & ChakraProps;

const ResourceLink = ({
  href,
  bgColor,
  hoverBgColor,
  icon,
  colorScheme = "blue",
  children,
  ...props
}: ResourceLinkProps) => {
  return (
    // @ts-ignore
    <Link legacyBehavior href={href.toString()} passHref {...props}>
      <Button
        as="a"
        target="_blank"
        colorScheme={colorScheme}
        bgColor={bgColor}
        _hover={{ bgColor: hoverBgColor }}
        leftIcon={icon}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ResourceLink;
