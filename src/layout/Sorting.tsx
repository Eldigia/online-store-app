import { Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { Button } from "../components/Button";
import { useShopContext } from "../context/ShopContext";

export const Sorting = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { setSortType, sortType } = useShopContext();

  const sortKeys = [
    { name: "Newest", sort: "id" },
    { name: "Lowest Price", sort: "lowprice" },
    { name: "Highest Price", sort: "highprice" },
    { name: "Best Rating", sort: "rating" },
  ];

  return (
    <Flex alignItems="end" mt="5" flexDir="column">
      <Button onClick={onToggle} variant="white" mr="10" boxShadow="base" _focus={{ boxShadow: "base" }}>
        <BiSortAlt2 size="1.3em" />
        <Text fontSize="16">Sorting</Text>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Flex mt="3" mr="2" p="3" flexDir="row">
          {sortKeys.map(({ sort, name }) => {
            return (
              <Button
                variant={sort === sortType ? "pink" : "white"}
                boxShadow="base"
                mx="5"
                value={sort}
                onClick={(e) => {
                  setSortType(e.target.value);
                }}
              >
                {name}
              </Button>
            );
          })}
        </Flex>
      </Collapse>
    </Flex>
  );
};
