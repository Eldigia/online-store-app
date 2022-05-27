import { Flex, Image, Select, Text } from "@chakra-ui/react";
import { IoTrashOutline } from "react-icons/io5";
import { Product, useShopContext } from "../context/ShopContext";
import { Button } from "./Button";

type Props = {
  item: Product;
  quantity: number;
};

export const ItemCart = ({ item, quantity }: Props) => {
  const { title, image, price } = item;
  const { cartItems, setCartItems } = useShopContext();

  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  const handleDeleteItemFromCart = () => {
    const newArray = cartItems.filter((i) => i.id !== item.id);
    return setCartItems(newArray);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cartItems];
    newCartItems[targetItemIndex].quantity = parseInt(e.target.value);
    return setCartItems(newCartItems);
  };

  const selectValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Flex my="5" justifyContent="space-between">
      <Image fit="contain" w="120px" h="120px" src={image} />
      <Flex flexDir="column" w="50%" mr="10%" justifyContent="space-between">
        <Text>{title}</Text>
        <Button variant="white" justifyContent="flex-start" onClick={handleDeleteItemFromCart}>
          <IoTrashOutline />
          Delete
        </Button>
      </Flex>
      <Flex flexDir="column" alignItems="end" justifyContent="space-between">
        <Select borderColor="#333" borderRadius="0" value={quantity} onChange={handleAmountChange}>
          {selectValues.map((selectValue) => (
            <option key={selectValue} value={selectValue}>
              {selectValue}
            </option>
          ))}
        </Select>
        <Text fontWeight="bold">{formatter.format(price * quantity)}</Text>
      </Flex>
    </Flex>
  );
};
