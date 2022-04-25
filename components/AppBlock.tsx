import { Box, ChakraProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export type AppBlockProps = {
  children: ReactElement | Array<ReactElement> | string;
  delay: number;
  // animate?: AnimationControls | TargetAndTransition | VariantLabels;
  // transition?: Transition;
} & ChakraProps;

const AppBlock = ({ children, delay, ...props }: AppBlockProps) => {
  return (
    <Box width="100%" {...props}>
      <motion.div
        animate={{ opacity: [0, 1], y: [30, 0] }}
        transition={{
          default: { duration: 0.3, delay: delay },
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default AppBlock;