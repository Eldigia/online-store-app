import { Box, Collapse, Divider, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { IoHeartOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useShopContext } from "../../context/ShopContext";
import { Rating } from "../../components/Rating";

export const ItemPage = () => {
  const { items } = useShopContext();
  const { isOpen, onToggle } = useDisclosure();
  const params = useParams();

  const locations = useLocation();
  const location = locations.pathname.split("/")[1];

  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  const targetItem = items.filter(function (item) {
    return parseInt(item.id) === parseInt(params.itemId);
  });

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

  return (
    <Flex flexDir="row" h="100%">
      <Flex w="45%" justifyContent="center" ml="10" my="10">
        <Image h="550px" src={targetItem[0].image} />
      </Flex>
      <Flex w="50%" flexDir="column" p="10">
        <Link to={`/${location}`}>
          <Text mb="5">{getPreviousPageName()}</Text>
        </Link>
        <Text fontSize="3xl" mb="5">
          {targetItem[0].title}
        </Text>
        <Rating rating={targetItem[0].rating} />
        <Text fontWeight="bold" fontSize="2xl" my="10">
          {formatter.format(targetItem[0].price)}
        </Text>
        <Flex flexDir="row" mb="10">
          <Button variant="pink" mr="2">
            Add to Cart
          </Button>
          <Button variant="white">
            <IoHeartOutline size="1.4em" />
            <Text ml="1">Add to wishlist</Text>
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
            {targetItem[0].description}
          </Flex>
        </Collapse>
        <Divider w="90%" />
      </Flex>
    </Flex>
  );
};
