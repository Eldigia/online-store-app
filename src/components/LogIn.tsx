import { Divider, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useShopContext } from "../context/ShopContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignInModal } from "./SignInModal";

export interface LogInFormValues {
  email: string;
  password: string;
}

export const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logInUser } = useShopContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogInFormValues>();

  const onSubmit: SubmitHandler<LogInFormValues> = ({ email, password }) => {
    logInUser({ email, password });
  };

  return (
    <Flex flexDir="column" alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Text textAlign="center" mt="10" fontWeight="bold" fontSize="3xl">
          Log in
        </Text>
        <Flex flexDir="row" alignItems="center" display="unset">
          <Input
            placeholder="E-mail address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." },
            })}
          />
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <Button type="submit" mt="10" variant="pink" w="100%">
            Log in
          </Button>
        </Flex>
        <Divider mt="10" />
        <Text textAlign="center" mt="10" fontWeight="bold">
          Not a member yet?
        </Text>
        <Button onClick={onOpen} mt="10" variant="white" w="100%" border="1px">
          Join us!
        </Button>
        <SignInModal isOpen={isOpen} onClose={onClose} />
      </form>
    </Flex>
  );
};
