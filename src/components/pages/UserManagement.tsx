import React, { memo, useCallback, useEffect, useState } from "react";
import { Center, Flex, HStack, Spinner } from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";
import { UserDetailModal } from "@/components/organisms/user/UserDetailModal";
import { useAllUsers } from "@/hooks/useAllUsers";


export const UserManagement: React.FC = memo(() => {
  const [open, setOpen] = useState(false);
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => setOpen(true), []);

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
                onClick={onClickUser}
              />
            </Flex>
          )) }
        </HStack>
      ) }
      <UserDetailModal open={open} setOpen={setOpen} />
    </>
  );
});