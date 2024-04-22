"use client";
import Image from "next/image";
import logo from "@/public/logo-vertical.svg";
import { Dispatch, SetStateAction } from "react";

const LoginForm = ({
  handleLoginSubmit,
  setIsLogin,
}: {
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const savedEmail = localStorage.getItem("email") || "";
  const savedPassword = localStorage.getItem("password") || "";

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-dark"
      >
        <Image
          width={100}
          height={100}
          className="mr-2"
          src={logo}
          alt="Feenix Logo"
        />
      </a>
      <div className="w-full bg-white rounded-lg shadow -0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl">
            Sign in to your account
          </h1>
          <form onSubmit={handleLoginSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-dark"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={savedEmail}
                className="bg-gray-50 border border-gray-300 text-dark sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="your@email.here"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-dark"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                defaultValue={savedPassword}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-dark sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    defaultChecked={!!(savedPassword && savedEmail)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 ">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                disabled
                className="text-sm font-medium text-sky disabled:opacity-50 hover:underline "
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-sky hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-medium text-primary-600 hover:underline "
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