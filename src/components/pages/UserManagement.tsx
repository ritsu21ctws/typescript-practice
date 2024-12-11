import React, { memo } from "react";
import { Flex, HStack } from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";

export const UserManagement: React.FC = memo(() => {
  return (
    <HStack wrap='wrap' p={{ base: 4, md: 10 }}>
      <Flex align='flex-start'>
        <UserCard
          imageUrl="https://picsum.photos/200"
          userName="userName"
          fullName="fullName"
        />
      </Flex>
    </HStack>
  );
});