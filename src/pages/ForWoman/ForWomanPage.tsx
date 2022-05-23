import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ItemCard } from "../../components/ItemCard";
import { useShopContext } from "../../context/ShopContext";
import { Sorting } from "../../layout/Sorting";

export const ForWomanPage = () => {
  const { items } = useShopContext();

  return (
    <Flex flexDir="column" backgroundColor="#f7f9fa">
      <Sorting />
      <Grid templateColumns="repeat(4,1fr)" px="5">
        {items.map(({ category, title, id, price, description, image }) => {
          if (category === "women's clothing") {
            return (
              <GridItem key={title}>
                <Link to={`/forwoman/${id}`}>
                  <ItemCard title={title} price={price} description={description} image={image} />
                </Link>
              </GridItem>
            );
          }
        })}
      </Grid>
    </Flex>
  );
};
