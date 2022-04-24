import { Button, ThemeTypings } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { FaTelegramPlane } from "react-icons/fa";

export type ResourceLinkProps = {
  href: string;
  bgColor: string;
  hoverBgColor: string;
  icon: ReactElement;
  colorScheme?: ThemeTypings["colorSchemes"];
  children?: ReactElement | Array<ReactElement> | string;
};

const ResourceLink = ({
  href,
  bgColor,
  hoverBgColor,
  icon,
  colorScheme = "blue",
  children,
}: ResourceLinkProps) => {
  return (
    <Link href={href.toString()} passHref>
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
