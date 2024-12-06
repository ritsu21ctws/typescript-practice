import React, { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export const MenuIconButton: React.FC = memo(React.forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...props}
      aria-label="メニューボタン"
      size="sm"
      bg="teal.500"
      display={{ base: "block", md: "none"}}
    >
      <RxHamburgerMenu />
    </IconButton>
  );
}));