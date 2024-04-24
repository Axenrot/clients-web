import { useRouter } from "next/navigation";
import { useContext, useEffect, ReactNode, useState } from "react";
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
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof localStorage != "undefined") {
      setToken((localStorage.getItem("token") || "") as string);
    }
  }, []);
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token) as DecodedToken;
      const isExpired = Date.now() >= decodedToken.exp * 1000;
      if (isExpired) {
        if (logout) {
          logout();
          // clear the session and redirect to login page
          router.push("/");
        }
      }
    }
  }, [token, logout, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
