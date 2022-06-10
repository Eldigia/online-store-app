import { Divider, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignInModal } from "./SignInModal";

export const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDir="column" alignItems="center">
      <Text textAlign="center" mt="10" fontWeight="bold" fontSize="3xl" w="100%">
        Log in
      </Text>
      <Input placeholder="E-mail address" w="40%" />
      <Input placeholder="Password" w="40%" />
      <Button mt="10" w="40%" variant="pink">
        Log in
      </Button>
      <Divider mt="10" w="40%" />
      <Text mt="10" fontWeight="bold">
        Not a member yet?
      </Text>
      <Button onClick={onOpen} mt="10" w="40%" variant="white" border="1px">
        Join us!
      </Button>
      <SignInModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
