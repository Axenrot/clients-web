"use client";
import Image from "next/image";
import logo from "@/public/logo-vertical.svg";
import { Dispatch, SetStateAction } from "react";
import { Button, Input, Password } from "rizzui";

const RegisterForm = ({
  handleRegisterSubmit,
  setIsLogin,
}: {
  handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 fadein">
      <span className="flex select-none items-center mb-6 text-2xl font-semibold">
        <Image
          width={100}
          height={100}
          className="mr-2"
          src={logo}
          alt="Feenix Logo"
        />
      </span>
      <div className="w-full bg-white dark:bg-primary-dark rounded-xl shadow-xl shadow-black/20  sm:max-w-md xl:p-2">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>
          <form
            onSubmit={handleRegisterSubmit}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Input
              label="First Name"
              name="firstName"
              id="firstName"
              placeholder="John"
            />

            <Input
              label="Last Name"
              name="lastName"
              id="lastName"
              placeholder="Doe"
            />

            <Input
              type="email"
              label="Email"
              name="email"
              id="email"
              placeholder="your@email.here"
            />
            <Input
              type="email"
              label="Confirm Email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="your@email.here"
            />

            <Password
              label="Password"
              name="password"
              id="password"
              placeholder="••••••••"
            />

            <Password
              label="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
            />

            <span className="md:col-span-2 grid gap-6 grid-cols-1 md:grid-cols-2">
              <p className="text-sm font-light text-gray-700 dark:text-gray-200">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="font-medium text-primary-700 hover:text-blue hover:underline "
                >
                  Sign in
                </button>
              </p>
              <Button
                variant="solid"
                type="submit"
                className="w-full dark:bg-primary bg-primary-dark text-primary dark:text-primary-dark"
              >
                Register
              </Button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
