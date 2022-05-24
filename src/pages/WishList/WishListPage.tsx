import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ItemCard } from "../../components/ItemCard";
import { useShopContext } from "../../context/ShopContext";

export const WishListPage = () => {
  const { wishlist } = useShopContext();

  return (
    <>
      <Flex flexDir="column">
        <Flex mx="120px">
          <Text mt="15px" fontWeight="bold" fontSize="3xl" w="100%">
            Wish list
          </Text>
        </Flex>
        <Flex flexDir="column" mx="20">
          <Grid templateColumns="repeat(4,1fr)" px="5">
            {wishlist.map((item) => {
              return (
                <GridItem key={item.title}>
                  <ItemCard item={item} />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};
