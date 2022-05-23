import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = (props: ButtonProps) => {
  return <ChakraButton h="10" w="40" fontSize="sm" {...props} />;
};
