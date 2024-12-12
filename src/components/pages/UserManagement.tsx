import React, { memo, useEffect } from "react";
import { Center, Flex, HStack, Spinner } from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";
import { useAllUsers } from "@/hooks/useAllUsers";

export const UserManagement: React.FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <>
      { loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <HStack wrap="wrap" p={{ base: 4, md: 10 }}>
          { users.map((user) => (
            <Flex align='flex-start' key={user.id} mx="auto">
              <UserCard
                imageUrl="https://picsum.photos/200"
                userName={user.username}
                fullName={user.name}
              />
            </Flex>
          )) }
        </HStack>
      ) }
    </>
  );
});