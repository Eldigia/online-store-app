import {
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
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useShopContext } from "../context/ShopContext";
import { Button } from "./Button";
import { Input } from "./Input";

export interface IFormValues {
  name: string;
  email: string;
}

export const UpdateUserModal = ({ isOpen, onClose }: Omit<ModalProps, "children">) => {
  const { user } = useShopContext();

  const {
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (user) => {
    console.log(user);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ModalOverlay />
        <ModalContent p="10">
          <ModalHeader>Update your personal information</ModalHeader>
          <ModalCloseButton mt="5" mr="5" />
          <ModalBody>
            <Text>Provide your new information below</Text>
            <Input placeholder={user?.displayName || ""} type="name" />
            <Input placeholder={user?.email || ""} type="email" />
          </ModalBody>

          <ModalFooter>
            <Button type="submit" w="100%" my="3" variant="pink">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
