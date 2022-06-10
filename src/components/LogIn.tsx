import { Divider, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignInModal } from "./SignInModal";

export interface IFormValues {
  email: string;
  password: string;
}

export const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (user) => {
    console.log(user);
  };

  return (
    <Flex flexDir="column" alignItems="center">
      <Text textAlign="center" mt="10" fontWeight="bold" fontSize="3xl">
        Log in
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex flexDir="column" alignItems="center" display="unset">
          <Input placeholder="E-mail address" />
          <Input placeholder="Password" />
          <Button type="submit" mt="10" variant="pink" w="100%">
            Log in
          </Button>
        </Flex>
      </form>
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
