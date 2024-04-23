"use client";
import Image from "next/image";
import logo from "@/public/logo-vertical.svg";
import { Dispatch, SetStateAction } from "react";
import { Button, Input, Password, Switch } from "rizzui";

const LoginForm = ({
  handleLoginSubmit,
  setIsLogin,
}: {
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  let savedEmail = "";
  let savedPassword = "";

  if (typeof sessionStorage !== "undefined") {
    savedEmail = (sessionStorage.getItem("email") || "") as string;
    savedPassword = (sessionStorage.getItem("password") || "") as string;
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <span className="flex select-none items-center mb-6 text-2xl font-semibold">
        <Image
          width={100}
          height={100}
          className="mr-2"
          src={logo}
          alt="Feenix Logo"
        />
      </span>
      <div className="w-full bg-white  dark:bg-primary-dark rounded-xl shadow-xl shadow-black/20  sm:max-w-md xl:p-2">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>
          <form onSubmit={handleLoginSubmit} className="space-y-4 md:space-y-6">
            <Input
              type="email"
              label="Email"
              name="email"
              id="email"
              placeholder="your@email.here"
              defaultValue={savedEmail}
            />
            <Password
              label="Password"
              name="password"
              defaultValue={savedPassword}
              id="password"
              placeholder="••••••••"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <Switch
                  id="remember"
                  name="remember"
                  label="Remember me"
                  defaultChecked={!!(savedPassword && savedEmail)}
                />
              </div>
              <button
                disabled
                className="opacity-0 text-sm font-medium text-secondary disabled:opacity-0 hover:underline "
              >
                Forgot password?
              </button>
            </div>
            <Button
              variant="solid"
              type="submit"
              className="w-full dark:bg-primary bg-primary-dark text-primary dark:text-primary-dark font-bold"
            >
              Sign in
            </Button>
            <p className="text-sm font-light text-gray-700 dark:text-gray-200">
              Don’t have an account yet?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-medium transition-all duration-200 hover:text-blue hover:underline "
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
