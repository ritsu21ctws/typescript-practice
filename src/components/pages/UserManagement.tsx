import React, { memo, useCallback, useEffect, useState } from "react";
import { Center, Flex, HStack, Spinner } from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";
import { UserDetailModal } from "@/components/organisms/user/UserDetailModal";
import { useAllUsers } from "@/hooks/useAllUsers";
import { useSelectUser } from "@/hooks/useSelectUser";
import { useLoginUser } from "@/hooks/useLoginUser";

export const UserManagement: React.FC = memo(() => {
  const [open, setOpen] = useState(false);
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, setOpen });
  }, [users, onSelectUser, setOpen]);

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
                id={user.id}
                imageUrl="https://picsum.photos/200"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </Flex>
          )) }
        </HStack>
      ) }
      <UserDetailModal user={selectedUser} open={open} setOpen={setOpen} />
    </>
  );
});