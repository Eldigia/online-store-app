import { Box, Collapse, Divider, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useShopContext } from "../../context/ShopContext";
import { Rating } from "../../components/Rating";

export const ItemPage = () => {
  const { items, wishlist, setWishlist, cartItems, setCartItems } = useShopContext();
  const { isOpen, onToggle } = useDisclosure();
  const params = useParams();

  const locations = useLocation();
  const location = locations.pathname.split("/")[1];

  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  const targetItem = items.find(function (item) {
    if (!params.itemId) {
      return false;
    }
    return item.id === parseInt(params.itemId);
  });

  if (!targetItem) {
    return <Box>Page not found</Box>;
  }

  function getPreviousPageName() {
    if (location === "forwoman") {
      return "Woman";
    }
    if (location === "forman") {
      return "Man";
    }
    if (location === "accesories") {
      return "Accesories";
    }
  }

  const handleAddToCart = () => {
    const targetItemIndex = cartItems.findIndex((item) => item.id === targetItem.id);
    if (targetItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[targetItemIndex].quantity += 1;
      return setCartItems(newCartItems);
    }
    setCartItems([...cartItems, { id: targetItem.id, quantity: 1 }]);
  };

  const handleAddToWishList = () => {
    if (!wishlist.includes(targetItem)) {
      return setWishlist([...wishlist, targetItem]);
    }
    const newArray = wishlist.filter((wishlistItem) => wishlistItem.id !== targetItem.id);
    return setWishlist(newArray);
  };

  return (
    <Flex flexDir="row" h="100%">
      <Flex w="45%" justifyContent="center" ml="10" my="10">
        <Image h="550px" src={targetItem.image} />
      </Flex>
      <Flex w="50%" flexDir="column" p="10">
        <Link to={`/${location}`}>
          <Text mb="5">{getPreviousPageName()}</Text>
        </Link>
        <Text fontSize="3xl" mb="5">
          {targetItem.title}
        </Text>
        <Rating rating={targetItem.rating} />
        <Text fontWeight="bold" fontSize="2xl" my="10">
          {formatter.format(targetItem.price)}
        </Text>
        <Flex flexDir="row" mb="10">
          <Button variant="pink" mr="2" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="white" onClick={handleAddToWishList}>
            {wishlist.includes(targetItem) ? (
              <Flex>
                <IoHeart size="1.4rem" color="#dd3575" />
                <Text ml="1">In wishlist</Text>
              </Flex>
            ) : (
              <Flex>
                <IoHeartOutline size="1.4em" />
                <Text ml="1">Add to wishlist</Text>
              </Flex>
            )}
          </Button>
        </Flex>
        <Box onClick={onToggle} w="90%" cursor="pointer">
          <Divider />
          <Flex justifyContent="space-between" p="3">
            <Flex>
              <Text fontWeight="bold">Description</Text>
            </Flex>
            <Flex>
              <HiPlus />
            </Flex>
          </Flex>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Flex w="90%" p="3">
            {targetItem.description}
          </Flex>
        </Collapse>
        <Divider w="90%" />
      </Flex>
    </Flex>
  );
};
