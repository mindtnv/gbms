import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement } from "react";

export type AppNavBarLinkProps =
  | {
      href: string;
      children: ReactElement | string;
      target?: string;
    }
  | LinkProps;

const AppNavBarLink = ({
  href,
  children,
  target,
  ...props
}: AppNavBarLinkProps) => {
  return (
    <NextLink href={href ?? ""} scroll={false} passHref>
      <Link target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

export default AppNavBarLink;
