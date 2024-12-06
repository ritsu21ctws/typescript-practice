import React, { memo, useState } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";

export const Header: React.FC = memo(() => {
  const [ open, setOpen ] = useState(false);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link color="gray.50">ユーザー一覧</Link>
          </Box>
            <Link color="gray.50">設定</Link>
        </Flex>
        <MenuDrawer open={open} setOpen={setOpen} />
      </Flex>
    </>
  );
});