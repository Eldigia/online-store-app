import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ItemCard } from "../../components/ItemCard";
import { useShopContext } from "../../context/ShopContext";
import { Sorting } from "../../layout/Sorting";

export const ForManPage = () => {
  const { items } = useShopContext();

  return (
    <Flex flexDir="column" backgroundColor="#f7f9fa">
      <>
        <Sorting />

        {console.log(items)}

        <Grid templateColumns="repeat(4,1fr)" px="5">
          {items.map(({ category, title, id, price, description, image}) => {
            if (category === "men's clothing") {
              return (
                <GridItem key={title}>
                  <Link to={`/forman/${id}`}>
                    <ItemCard title={title} price={price} description={description} image={image} />
                  </Link>
                </GridItem>
              );
            }
          })}
        </Grid>
      </>
    </Flex>
  );
};
