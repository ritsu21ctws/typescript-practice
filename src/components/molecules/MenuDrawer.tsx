import React, { memo } from "react";
import { Button } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuDrawer: React.FC<Props> = memo((props) => {
  const { open, setOpen } = props;
  return (
    <DrawerRoot placement="start" size="xs" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIconButton/>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" bg="gray.100" color="gray.800">TOP</Button>
          <Button w="100%" bg="gray.100" color="gray.800">ユーザー一覧</Button>
          <Button w="100%" bg="gray.100" color="gray.800">設定</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
});