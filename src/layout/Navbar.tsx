import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

import imgNavbar from "../public/lotus-flower.png";
import { useShopContext } from "../context/ShopContext";
import { Badge } from "../components/Badge";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export function Navbar() {
  const { wishlist, cartItems } = useShopContext();

  const categories = [
    { title: "For Women", path: "/forwomen" },
    { title: "For Men", path: "/formen" },
    { title: "Accesories", path: "/accesories" },
  ];

  let sum = 0;
  cartItems.map(({ quantity }) => {
    let sumObject = quantity;
    return (sum += sumObject);
  });

  return (
    <Flex flexDir="column">
      <Grid templateColumns="repeat(3, 1fr)" mx={{ base: "20px", md: "120px" }}>
        <GridItem fontSize="18px" my="auto" display="inline-flex" whiteSpace="nowrap">
          <Flex display={{ base: "none", sm: "flex" }}>
            {categories.map(({ title, path }) => {
              return (
                <NavLink to={path}>
                  <Text mr="10px">{title}</Text>
                </NavLink>
              );
            })}
          </Flex>
          <Menu>
            <MenuButton aria-label="Open menu" mr="auto" display={{ base: "flex", sm: "none" }}>
              <HiOutlineMenuAlt1 size="1.2rem" />
            </MenuButton>
            <MenuList>
              {categories.map(({ title, path }) => {
                return (
                  <MenuItem>
                    <NavLink to={path}>
                      <Text mr="10px">{title}</Text>
                    </NavLink>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem mx="auto">
          <NavLink to="/">
            <Image boxSize="80px" src={imgNavbar} />
          </NavLink>
        </GridItem>

        <GridItem my="auto" fontSize="18px" ml="auto" whiteSpace="nowrap">
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
