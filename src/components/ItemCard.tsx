import { Flex, Image, Text } from "@chakra-ui/react";
import { IoHeartOutline } from "react-icons/io5";

export const ItemCard = ({ title, price, image }: any) => {
  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  return (
    <Flex
      minW="250px"
      backgroundColor="#FFFFFF"
      border="1px solid #e9e9eb"
      borderRadius="5px"
      p="5"
      mx="5"
      my="5"
      _hover={{ boxShadow: "base" }}
      position="relative"
    >
      <Flex position="absolute" right="6">
        <IoHeartOutline size="1.6rem" />
      </Flex>
      <Flex flexDir="column" alignItems="center" mx="auto">
        <Image fit="contain" w="200px" h="200px" src={image} />
        <Text fontWeight="semibold" mt="4" h="50px" overflow="hidden" textAlign="center">
          {title}
        </Text>
        <Text fontSize="xl">{formatter.format(price)}</Text>
      </Flex>
    </Flex>
  );
};
