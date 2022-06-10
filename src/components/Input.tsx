import { forwardRef, Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const Input = forwardRef((props: InputProps, ref) => {
  return (
    <ChakraInput
      ref={ref}
      variant="unstyled"
      borderRadius="0"
      size="lg"
      borderBottom="1px"
      py="1"
      mt="7"
      _focus={{ borderColor: "#dd3575" }}
      _hover={{ borderColor: "#dd3575" }}
      {...props}
    />
  );
});
