import { Badge as ChakraBadge, BadgeProps, Flex } from "@chakra-ui/react";

export const Badge = (props: BadgeProps) => {
  return (
    <Flex position="absolute" top="-2" right="-1">
      <ChakraBadge backgroundColor="#dd3575" color="white" borderRadius="25px" fontWeight="normal" {...props} />
    </Flex>
  );
};
