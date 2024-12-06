import React, { memo } from "react";
import { Button, DrawerActionTrigger } from "@chakra-ui/react";
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
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: React.FC<Props> = memo((props) => {
  const { open, setOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <DrawerRoot placement="start" size="xs" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIconButton/>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <DrawerActionTrigger asChild>
            <Button w="100%" bg="gray.100" color="gray.800" onClick={onClickHome}>TOP</Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button w="100%" bg="gray.100" color="gray.800" onClick={onClickUserManagement}>ユーザー一覧</Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button w="100%" bg="gray.100" color="gray.800" onClick={onClickSetting}>設定</Button>
          </DrawerActionTrigger>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
});