"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/Auth";
import { useRouter } from "next/navigation";
import api from "@/services/Api";
import { shoot } from "@/services/SwalCall";
import LoginForm from "@/app/components/Login";
import RegisterForm from "@/app/components/Register";

const LoginRegister: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const { login } = useContext(AuthContext) ?? {};

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Acesse os elementos do formulário
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const remember = form.elements.namedItem("remember") as HTMLInputElement;

    try {
      const response = await api.post("/auth/login", {
        email: email.value,
        password: password.value,
      });
      const { access_token } = response.data;
      delete response.data.access_token;
      // setting token and user context props
      login?.(access_token, response.data);

      // remember button config
      if (remember.checked) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      router.push("/");

      shoot("Welcome my friend! :)");
    } catch (error) {
      shoot("Couldn't login, please try again", "error");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const confirmEmail = form.elements.namedItem(
      "confirmEmail"
    ) as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const confirmPassword = form.elements.namedItem(
      "confirmPassword"
    ) as HTMLInputElement;
    const firstName = form.elements.namedItem("firstName") as HTMLInputElement;
    const lastName = form.elements.namedItem("lastName") as HTMLInputElement;

    try {
      await api
        .post("/auth/register", {
          email,
          confirmEmail,
          password,
          confirmPassword,
          firstName,
          lastName,
        })
        .then(() => {
          shoot(
            firstName
              ? "Now you can login properly!"
              : `Now you can login properly ${firstName}!`
          );
          setIsLogin(true);
        });
    } catch (error) {
      shoot("Couldn't register, please try again", "error");
    }
  };

  return (
    <div className="flex-1 w-full h-screen items-center justify-center flex p-24">
      {isLogin ? (
        // Login Form
        <LoginForm
          handleLoginSubmit={handleLoginSubmit}
          setIsLogin={setIsLogin}
        />
      ) : (
        <RegisterForm
          handleRegisterSubmit={handleRegisterSubmit}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
};

export default LoginRegister;
