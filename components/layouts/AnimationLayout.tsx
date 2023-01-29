import { ChakraProps } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";

export type AnimationLayoutProps = {
  route: string;
  children: ReactElement | ReactElement[] | string;
} & ChakraProps;

const AnimationLayout = ({ route, children }: AnimationLayoutProps) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: -0 },
  };

  return (
    <AnimatePresence
      initial
      onExitComplete={() => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.15, type: "easeInOut" }}
        style={{ position: "relative" }}
        key={route}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationLayout;
