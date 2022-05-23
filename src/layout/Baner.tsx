import { Box, Flex, Image } from "@chakra-ui/react";
import imgBanner from "../public/girl-shop.jpeg";

export const Baner = () => {
  return (
    <Flex h="400px">
      <Flex flexDir="column" alignContent="center" ml="200px" mt="100px">
        <Flex>
          <Box fontSize="5xl">New Collection</Box>
        </Flex>
        <Flex>
          <Box fontSize="5xl" flexDir="row" ml="50px">
            Available Now!
          </Box>
        </Flex>
      </Flex>
      <Box ml="auto" mr="50px" mt="30px">
        <Image borderRadius="100px" h="400px" width="600px" src={imgBanner} />
      </Box>
    </Flex>
  );
};
