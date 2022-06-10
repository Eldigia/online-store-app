import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useShopContext } from "../context/ShopContext";
import { Button } from "./Button";
import { Input } from "./Input";

export interface IFormValues {
  name: string;
  email: string;
  password: string;
  checked: boolean;
}

export const SignInModal = ({ isOpen, onClose }: Omit<ModalProps, "children">) => {
  const { registerUser } = useShopContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (user) => {
    registerUser(user);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ModalOverlay />
        <ModalContent p="10">
          <ModalHeader>Create Account</ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "none" }} mr="5" mt="5" />
          <ModalBody>
            <Text>Create you account to track your online orders and enjoy a fast check-out</Text>
            <FormControl isInvalid={!!errors.name}>
              <Input
                placeholder="Name *"
                type="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Minimum length should be 3" },
                })}
              />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <Input
                placeholder="E-mail address *"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." },
                })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <Input
                placeholder="Password *"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 4, message: "Minimum length should be 4" },
                })}
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.checked}>
              <Checkbox
                type="checked"
                mt="5"
                colorScheme="pink"
                {...register("checked", {
                  required: "Please accept the privacy policy",
                })}
              >
                I have read and understood the Privacy Notice
              </Checkbox>
              <FormErrorMessage>{errors.checked && errors.checked.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" w="100%" my="3" variant="pink">
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
