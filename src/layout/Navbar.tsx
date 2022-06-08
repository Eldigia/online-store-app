import { Box, Divider, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
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
    <Flex flexDir="column">
      <Grid templateColumns="repeat(3, 1fr)" mx="120">
        <GridItem fontSize="18px" my="auto" display="inline-flex" whiteSpace="nowrap">
          <NavLink to="/forwomen">
            <Text mr="10px">For Women</Text>
          </NavLink>
          <NavLink to="/formen">
            <Text mx="10px">For Men</Text>
          </NavLink>
          <NavLink to="/accesories">
            <Text mx="10px">Accesories</Text>
          </NavLink>
        </GridItem>
        <GridItem mx="auto">
          <NavLink to="/">
            <Image boxSize="80px" src={imgNavbar} />
          </NavLink>
        </GridItem>

        <GridItem my="auto" fontSize="18px" ml="auto">
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
        </GridItem>
      </Grid>
      <Divider />
    </Flex>
  );
}
