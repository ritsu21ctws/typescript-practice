import React, { memo } from "react";
import { Routes, Route } from "react-router";

import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { Setting } from "@/components/pages/Setting";
import { UserManagement } from "@/components/pages/UserManagement";
import { Page404 } from "@/components/pages/Page404";

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home">
        <Route index element={<Home />} />
        <Route path="setting" element={<Setting />} />
        <Route path="user_management" element={<UserManagement />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});