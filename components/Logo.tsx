import Image from "next/image";
import logo from "../public/logo.jpg";
import { Flex } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex justify="center" w="100%" mb={8}>
      <Image
        alt="logo"
        src={logo}
        width={250}
        height={250}
        layout="fixed"
        priority={true}
        style={{ borderRadius: "100%" }}
      />
    </Flex>
  );
};

export default Logo;
