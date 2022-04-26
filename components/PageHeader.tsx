import { Box, ChakraProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export type PageHeaderProps = {
  duration: number;
  children: ReactElement | ReactElement[] | string;
} & ChakraProps;

const PageHeader = ({ duration, children, ...props }: PageHeaderProps) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{
        default: { duration: duration },
      }}
    >
      <Box {...props}>{children}</Box>
    </motion.div>
  );
};

export default PageHeader;
