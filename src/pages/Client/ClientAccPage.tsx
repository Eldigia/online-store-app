import { Divider, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { IoLogOutOutline, IoMailOutline } from "react-icons/io5";
import { Button } from "../../components/Button";
import { LogIn } from "../../components/LogIn";
import { UpdateUserModal } from "../../components/UpdateUserModal";
import { useShopContext } from "../../context/ShopContext";

export const ClientAccPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useShopContext();

  function handleLogOut() {
    setUser(null);
  }

  return (
    <>
      {user ? (
        <Flex mx="120px" flexDir="column">
          <Flex>
            <Text my="15px" fontWeight="bold" fontSize="3xl" w="100%">
              Hello, {user.displayName}
            </Text>
            <Button variant="white" my="15px" pr="0" justifyContent="flex-end" onClick={handleLogOut}>
              <IoLogOutOutline size="2rem" />
              <Text>Log Out</Text>
            </Button>
          </Flex>
          <Text>You can view and update your profile details here.</Text>
          <Flex my="10" pl="10">
            <BiUser size="3em" />
            <Flex pl="10" flexDir="column">
              <Text fontWeight="bold">Name</Text>
              <Text>{user.displayName}</Text>
            </Flex>
            <Flex pr="5" ml="auto"></Flex>
          </Flex>
          <Divider />
          <Flex my="10" pl="10">
            <IoMailOutline size="3em" />
            <Flex pl="10" flexDir="column">
              <Text fontWeight="bold">Your e-mail</Text>
              <Text>{user.email}</Text>
            </Flex>
            <Flex pr="5" ml="auto"></Flex>
          </Flex>
          <Divider />
          <Flex my="10" pl="10">
            <HiOutlineLockClosed size="3em" />
            <Flex pl="10" flexDir="column">
              <Text fontWeight="bold">Your password</Text>
              <Text>********</Text>
            </Flex>
            <Flex pr="5" ml="auto"></Flex>
          </Flex>
          <Button mx="auto" mt="10" w="50%" onClick={onOpen} variant="pink">
            Edit
          </Button>
          <UpdateUserModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      ) : (
        <LogIn />
      )}
    </>
  );
};
