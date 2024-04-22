"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/Auth";
import { useRouter } from "next/navigation";
import api from "@/services/Api";
import { shoot } from "@/services/SwalCall";

const LoginRegister: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { login } = useContext(AuthContext) ?? {};

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      const { access_token } = response.data;
      delete response.data.access_token;
      login?.(access_token, response.data);
      router.push("/");
      console.log("success");

      shoot("Welcome my friend! :)");
    } catch (error) {
      shoot("Couldn't login, please try again", "error");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api
        .post("/auth/register", {
          email,
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
    <div className="flex-1 w-full h-screen items-center justify-center bg-neutral-dark flex p-24">
      {isLogin ? (
        // Login Form
        <form
          className="bg-white p-6 rounded-lg shadow-lg shadow-black/20"
          onSubmit={handleLoginSubmit}
        >
          <h2 className="text-2xl font-bold text-dark mb-4">Welcome Back!</h2>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-dark font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-dark font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-sky hover:bg-sea text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-4 text-sky hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </form>
      ) : (
        // Registration Form
        <form
          className="bg-white p-6 rounded-lg shadow-lg shadow-black/20"
          onSubmit={handleRegisterSubmit}
        >
          <h2 className="text-2xl font-bold text-dark mb-4">
            Create Your Account
          </h2>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-dark font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-dark font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Confirm Password input */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-dark font-medium mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* First Name input */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-dark font-medium mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Last Name input */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-dark font-medium mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-sky hover:bg-sea text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-4 text-sky hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;
