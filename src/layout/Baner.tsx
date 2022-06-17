import { Box, Flex, Image } from "@chakra-ui/react";
import imgBanner from "../public/girl-shop.jpeg";

export const Baner = () => {
  return (
    <Flex h="400px" mt="5" flexDir={{ base: "column", md: "row" }}>
      <Flex
        flexDir="column"
        alignContent="center"
        ml={{ base: "auto", md: "100px" }}
        mr={{ base: "auto" }}
        whiteSpace="nowrap"
        mt="100px"
      >
        <Flex>
          <Box fontSize="5xl">New Collection</Box>
        </Flex>
        <Flex>
          <Box fontSize="5xl" ml={{ base: "auto", sm: "50px" }}>
            Available Now!
          </Box>
        </Flex>
      </Flex>
      <Box ml="auto" mr={{ base: "auto", md: "50px" }} mt="30px">
        <Image borderRadius="100px" h="400px" width="600px" src={imgBanner} />
      </Box>
    </Flex>
  );
};
