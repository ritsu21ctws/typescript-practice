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

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { open, setOpen } = props;
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
              <Input value="name" readOnly />
            </Field>
            <Field label="フルネーム">
              <Input value="fullname" readOnly />
            </Field>
            <Field label="MAIL">
              <Input value="mail" readOnly />
            </Field>
            <Field label="TEL">
              <Input value="tel" readOnly />
            </Field>
          </Stack>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});