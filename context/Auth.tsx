"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any | null;
  token: string | null;
  login: (token: string, user: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user"); // Use sessionStorage here
    const storedToken = sessionStorage.getItem("token"); // Use sessionStorage here
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = (newToken: string, newUser: any) => {
    sessionStorage.setItem("token", newToken); // Use sessionStorage here
    sessionStorage.setItem("user", JSON.stringify(newUser)); // Use sessionStorage here
    setUser(newUser);
    setToken(newToken);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
    setToken(null);
    router.push("/login"); // Add this line to redirect
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
