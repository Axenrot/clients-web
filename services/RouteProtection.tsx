"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, ReactNode } from "react";
import { AuthContext } from "@/context/Auth";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  sub: string;
  email: string;
  iat: string;
}

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { logout } = useContext(AuthContext) ?? {};
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token) as DecodedToken;
      const isExpired = Date.now() >= decodedToken.exp * 1000;
      if (isExpired) {
        if (logout) {
          logout();
          // clear the session and redirect to login page
          router.push("/login");
        }
      }
    }
  }, [token, logout, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
