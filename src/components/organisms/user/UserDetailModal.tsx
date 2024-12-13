import React, { ChangeEvent, memo, useEffect } from "react";
import { Input, Stack } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field";
import { User } from "@/types/api/user";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isAdmin?: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { user, isAdmin = false, open, setOpen } = props;

  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>setPhone(e.target.value);

  const onClickUpdate = () => alert();

  return (
    <DialogRoot lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <DialogContent pb={2}>
        <DialogHeader>
          <DialogTitle>ユーザー詳細</DialogTitle>
        </DialogHeader>
        <DialogBody mx={4}>
          <Stack gap={4}>
            <Field label="名前">
              <Input value={username} onChange={onChangeUserName} readOnly={!isAdmin}/>
            </Field>
            <Field label="フルネーム">
              <Input value={name} onChange={onChangeName} readOnly={!isAdmin} />
            </Field>
            <Field label="MAIL">
              <Input value={email} onChange={onChangeEmail} readOnly={!isAdmin} />
            </Field>
            <Field label="TEL">
              <Input value={phone} onChange={onChangePhone} readOnly={!isAdmin} />
            </Field>
          </Stack>
        </DialogBody>
        {isAdmin && (
          <DialogFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </DialogFooter>
        )}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});