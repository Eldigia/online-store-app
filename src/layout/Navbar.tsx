import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

import imgNavbar from "../public/lotus-flower.png";
import { useShopContext } from "../context/ShopContext";
import { Badge } from "../components/Badge";

export function Navbar() {
  const { wishlist, cartItems } = useShopContext();

  let sum = 0;
  cartItems.map(({ quantity }) => {
    let sumObject = quantity;
    return (sum += sumObject);
  });

  return (
    <Flex w="100%" flexDir="column" backgroundColor="#FFFFFF">
      <Flex h="80px" justifyContent="space-between" mx="120px" alignContent="center">
        <Flex my="auto" fontSize="18px">
          <NavLink to="/forwoman">
            <Text mr="10px">For Woman</Text>
          </NavLink>
          <NavLink to="/forman">
            <Text mx="10px">For Man</Text>
          </NavLink>
          <NavLink to="/accesories">
            <Text mx="10px">Accesories</Text>
          </NavLink>
        </Flex>
        <Flex my="auto">
          <NavLink to="/">
            <Image boxSize="80px" src={imgNavbar} />
          </NavLink>
        </Flex>

        <Flex my="auto" fontSize="18px">
          <NavLink to="/wishlist">
            <Box display="inline-flex" mx="10px" alignItems="center" position="relative" mr="10px">
              <IoHeartOutline size="1.4em" width="" />
              {!!wishlist.length && <Badge>{wishlist.length}</Badge>}
            </Box>
          </NavLink>
          <NavLink to="/cart">
            <Box display="inline-flex" mx="10px" alignItems="center" position="relative" mr="10px">
              <BsCart3 size="1.3em" />
              {!!cartItems.length && <Badge>{sum}</Badge>}
            </Box>
          </NavLink>
          <NavLink to="/account">
            <Box display="inline-flex" ml="10px" alignItems="center">
              <Box mr="5px">
                <BiUser size="1.3em" />
              </Box>
              <Text>Account</Text>
            </Box>
          </NavLink>
        </Flex>
      </Flex>
      <Divider />
    </Flex>
  );
}
