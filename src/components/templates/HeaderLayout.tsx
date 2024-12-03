import React, { memo } from "react";
import { Header } from "../organisms/layout/Hader";

type Props = {
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
});