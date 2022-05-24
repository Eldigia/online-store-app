import { Flex, Image, Text } from "@chakra-ui/react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";

export const ItemCard = ({ item }: any) => {
  const { title, price, image, id } = item;

  const { setWishlist, wishlist } = useShopContext();

  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  const handleClick = () => {
    if (wishlist.includes(item)) {
      const newArray = wishlist.filter((wishlistItem) => wishlistItem !== item);
      console.log("henlo:", newArray);
      setWishlist(newArray);
    } else {
      setWishlist([...wishlist, item]);
      console.log(wishlist);
    }
    console.log(item);
  };

  return (
    <Flex
      minW="250px"
      backgroundColor="#FFFFFF"
      borderRadius="5px"
      boxShadow="base"
      p="5"
      mx="5"
      my="5"
      _hover={{ boxShadow: "xl" }}
      position="relative"
    >
      <Flex position="absolute" right="6" _hover={{ color: "#dd3575" }} onClick={handleClick}>
        {wishlist.includes(item) ? <IoHeart size="1.6rem" color="#dd3575" /> : <IoHeartOutline size="1.6rem" />}
      </Flex>
      <Flex mx="auto">
        <Link to={`/forman/${id}`}>
          <Flex flexDir="column" alignItems="center">
            <Image fit="contain" w="200px" h="200px" src={image} />
            <Text fontWeight="semibold" mt="4" h="50px" overflow="hidden" textAlign="center">
              {title}
            </Text>
            <Text fontSize="xl">{formatter.format(price)}</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
