import { Flex, Text } from "@chakra-ui/react";
import { CartSummary } from "../../components/CartSummary";
import { ItemCart } from "../../components/ItemCart";
import { useShopContext } from "../../context/ShopContext";

export const CartPage = () => {
  const { cartItems } = useShopContext();

  return (
    <Flex mx={{ base: "20px", md: "120px" }} flexDir="column">
      <Flex>
        <Text my="15px" fontWeight="bold" fontSize="3xl" w="100%">
          Shopping Cart
        </Text>
      </Flex>
      {!!cartItems.length ? (
        <Flex mb="10" flexDir={{ base: "column", md: "row" }}>
          <Flex w={{ base: "100%", md: "70%" }} flexDir="column" boxShadow="base" p="5" mr="8">
            {cartItems.map((cartItem) => {
              return <ItemCart key={cartItem.item.id} item={cartItem.item} quantity={cartItem.quantity} />;
            })}
          </Flex>
          <Flex mt={{ base: "10", md: "0" }} w={{ base: "100%", md: "30%" }}>
            <CartSummary />
          </Flex>
        </Flex>
      ) : (
        <Flex mt="15px">
          <Text>You have no items in your cart</Text>
        </Flex>
      )}
    </Flex>
  );
};
