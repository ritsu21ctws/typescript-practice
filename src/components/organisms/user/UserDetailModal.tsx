import React, { memo } from "react";
import { Input, Stack } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field";
import { User } from "@/types/api/user";

type Props = {
  user: User | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { user, open, setOpen } = props;
  return (
    <DialogRoot lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <DialogContent pb={6}>
        <DialogHeader>
          <DialogTitle>ユーザー詳細</DialogTitle>
        </DialogHeader>
        <DialogBody mx={4}>
          <Stack gap={4}>
            <Field label="名前">
              <Input value={user?.username} readOnly />
            </Field>
            <Field label="フルネーム">
              <Input value={user?.name} readOnly />
            </Field>
            <Field label="MAIL">
              <Input value={user?.email} readOnly />
            </Field>
            <Field label="TEL">
              <Input value={user?.phone} readOnly />
            </Field>
          </Stack>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});