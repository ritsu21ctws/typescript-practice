import React, { memo } from "react";
import { Button } from "@/components/ui/button"

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: React.FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}>
        { children }
      </Button>
  );
});