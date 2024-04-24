"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/Auth";
import { useRouter } from "next/navigation";
import api from "@/services/Api";
import toast from "react-hot-toast";
import LoginForm from "@/app/components/Login";
import RegisterForm from "@/app/components/Register";

const Home: React.FC = () => {
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
        sessionStorage.setItem("email", email.value);
        sessionStorage.setItem("password", password.value);
      } else {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("password");
      }
      router.push("/agenda");

      toast.success("Welcome my friend! :)");
    } catch (error) {
      toast.error("Credentials invalid");
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
          email: email.value,
          confirmEmail: confirmEmail.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
          firstName: firstName.value,
          lastName: lastName.value,
        })
        .then(() => {
          toast.success(
            firstName
              ? "Now you can login properly!"
              : `Now you can login properly ${firstName}!`
          );
          setIsLogin(true);
        });
    } catch (error) {
      toast.error("Couldn't register, please try again");
    }
  };

  return (
    <div className="flex-1 w-full min-h-screen items-center justify-center flex text-primary-dark dark:text-primary p-24">
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

export default Home;
