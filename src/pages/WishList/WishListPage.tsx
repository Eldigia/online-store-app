import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ItemCard } from "../../components/ItemCard";
import { useShopContext } from "../../context/ShopContext";

export const WishListPage = () => {
  const { wishlist } = useShopContext();

  function getCategoryName(category: string) {
    if (category === "women's clothing") {
      return "forwomen";
    }
    if (category === "men's clothing") {
      return "formen";
    } else {
      return "accesories";
    }
  }

  return (
    <Flex flexDir="column">
      <Flex mx="120px">
        <Text mt="15px" fontWeight="bold" fontSize="3xl" w="100%">
          Wish list
        </Text>
      </Flex>
      {!!wishlist.length ? (
        <Flex flexDir="column" mx="20">
          <Grid templateColumns={{ xl: "repeat(4,1fr)", lg: "repeat(3,1fr)", sm: "repeat(2,1fr)" }} px="5">
            {wishlist.map((item) => {
              return (
                <GridItem key={item.title}>
                  <ItemCard item={item} category={getCategoryName(item.category)} />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      ) : (
        <Flex mx="120px" mt="15px">
          <Text>There are no favorite products</Text>
        </Flex>
      )}
    </Flex>
  );
};
