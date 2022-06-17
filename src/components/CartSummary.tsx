import { Divider, Flex, Text } from "@chakra-ui/react";
import { useShopContext } from "../context/ShopContext";
import { Button } from "./Button";

export const CartSummary = () => {
  const { cartItems } = useShopContext();
  const shippingCost = 9.95;

  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  let sum = 0;
  cartItems.map(({ item, quantity }) => {
    let sumObject = quantity * item.price;
    return (sum += sumObject);
  });

  return (
    <Flex flexDir="column" boxShadow="base" p="5" w="100%" h="250px">
      <Text fontWeight="bold" fontSize="2xl">
        Summary
      </Text>
      <Flex justifyContent="space-between">
        <Text fontSize="md" py="2">
          Sub total
        </Text>
        <Text fontSize="md" py="2">
          {formatter.format(sum)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="md" py="2">
          Shipping
        </Text>
        <Text fontSize="md" py="2">
          {formatter.format(shippingCost)}
        </Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontSize="md" pt="2" pb="4">
          Total
        </Text>
        <Text fontSize="md" py="2">
          {formatter.format(sum + shippingCost)}
        </Text>
      </Flex>
      <Button variant="pink" w="100%">
        Proceed to checkout
      </Button>
    </Flex>
  );
};
