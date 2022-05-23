import { Flex, Text } from "@chakra-ui/react";
import { HiOutlineStar, HiStar } from "react-icons/hi";

export const Rating = ({ rating }) => {
  const totalStars = 5;
  const activeStars = Math.round(rating.rate);

  return (
    <Flex flexDir="row">
      <Flex>
        {[...new Array(totalStars)].map((arr, index) => {
          return index < activeStars ? <HiStar size="1.4em" /> : <HiOutlineStar size="1.4em" />;
        })}
      </Flex>
      <Flex ml="3">
        <Text>({rating.count})</Text>
      </Flex>
    </Flex>
  );
};
