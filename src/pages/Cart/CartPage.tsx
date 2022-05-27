import { Flex, Text } from "@chakra-ui/react";
import { CartSummary } from "../../components/CartSummary";
import { ItemCart } from "../../components/ItemCart";
import { useShopContext } from "../../context/ShopContext";

export const CartPage = () => {
  const { cartItems } = useShopContext();

  return (
    <Flex flexDir="column">
      <Flex mx="120px">
        <Text my="15px" fontWeight="bold" fontSize="3xl" w="100%">
          Shopping Cart
        </Text>
      </Flex>
      {!!cartItems.length ? (
        <Flex mx="120px" mb="10">
          <Flex w="70%" flexDir="column" boxShadow="base" p="5" mr="8">
            {cartItems.map((cartItem) => {
              return <ItemCart key={cartItem.item.id} item={cartItem.item} quantity={cartItem.quantity} />;
            })}
          </Flex>
          <Flex w="30%">
            <CartSummary />
          </Flex>
        </Flex>
      ) : (
        <Flex mx="120px" mt="15px">
          <Text>You have no items in your cart</Text>
        </Flex>
      )}
    </Flex>
  );
};
