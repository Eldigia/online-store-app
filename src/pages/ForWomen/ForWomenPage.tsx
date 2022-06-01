import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ItemCard } from "../../components/ItemCard";
import { useShopContext } from "../../context/ShopContext";
import { Sorting } from "../../layout/Sorting";

export const ForWomenPage = () => {
  const { items } = useShopContext();

  return (
    <Flex flexDir="column" mx="20">
      <Sorting />
      <Grid templateColumns="repeat(4,1fr)" px="5">
        {items.map((item) => {
          if (item.category === "women's clothing") {
            return (
              <GridItem key={item.title}>
                <ItemCard item={item} category="forwomen" />
              </GridItem>
            );
          }
        })}
      </Grid>
    </Flex>
  );
};