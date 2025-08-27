import React from "react";
import AdminLogin from "./AdminLogin";
import { useAppSelector } from "@/hooks/redux";
import { selectedToken } from "@/store/slice/tokenSlice";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const token = useAppSelector(selectedToken);

  // Если не авторизован, показываем форму входа
  if (!token) {
    return <AdminLogin />;
  }

  // Если авторизован, показываем защищенный контент
  return <>{children}</>;
};

export default ProtectedAdminRoute;
