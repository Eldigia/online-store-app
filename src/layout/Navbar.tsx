import { Box, Divider, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

import imgNavbar from "../public/lotus-flower.png";

export function Navbar() {
  return (
    <Flex w="100%" flexDir="column" backgroundColor="#FFFFFF">
      <Flex h="80px" justifyContent="space-between" mx="120px" alignContent="center">
        <Flex my="auto">
          <NavLink to="/">
            <Image boxSize="80px" src={imgNavbar} />
          </NavLink>
        </Flex>
        <Flex my="auto" fontSize="18px">
          <NavLink to="/forwoman">
            <Box mx="10px">For Woman</Box>
          </NavLink>
          <NavLink to="/forman">
            <Box mx="10px">For Man</Box>
          </NavLink>
          <NavLink to="/accesories">
            <Box mx="10px">Accesories</Box>
          </NavLink>
        </Flex>

        <Flex my="auto" fontSize="18px">
          <NavLink to="/wishlist">
            <Box display="inline-flex" mx="10px" alignItems="center">
              <Box mr="5px">
                <IoHeartOutline size="1.4em" width="" />
              </Box>
            </Box>
          </NavLink>
          <NavLink to="/cart">
            <Box display="inline-flex" mx="10px" alignItems="center">
              <Box mr="5px">
                <BsCart3 size="1.3em" />
              </Box>
            </Box>
          </NavLink>
          <NavLink to="/account">
            <Box display="inline-flex" ml="10px" alignItems="center">
              <Box mr="5px">
                <BiUser size="1.3em" />
              </Box>
              <Box>Account</Box>
            </Box>
          </NavLink>
        </Flex>
      </Flex>
      <Divider />
    </Flex>
  );
}
