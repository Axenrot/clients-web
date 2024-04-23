"use client";
import Layout from "@/app/components/Layout";
import Menu from "@/app/components/Menu";
import { AuthContext } from "@/context/Auth";
import api from "@/services/Api";

import toast from "react-hot-toast";
import { IUpdateUser } from "@/types/user";
import { useContext } from "react";
import { Button, Input, Password } from "rizzui";
import dynamic from "next/dynamic";
const DynamicProtectedRoute = dynamic(
  () => import("@/services/RouteProtection"),
  {
    ssr: false, // This ensures the component is only loaded on the client-side
  }
);

export default function User() {
  const { user, login, token } = useContext(AuthContext) ?? {};

  const userUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const email = form.elements.namedItem("email") as HTMLInputElement;
      const confirmEmail = form.elements.namedItem(
        "confirmEmail"
      ) as HTMLInputElement;
      const password = form.elements.namedItem("password") as HTMLInputElement;
      const confirmPassword = form.elements.namedItem(
        "confirmPassword"
      ) as HTMLInputElement;
      const firstName = form.elements.namedItem(
        "firstName"
      ) as HTMLInputElement;
      const lastName = form.elements.namedItem("lastName") as HTMLInputElement;

      let data: IUpdateUser = {
        email: email.value,
        confirmEmail: confirmEmail.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        firstName: firstName.value,
        lastName: lastName.value,
      };
      Object.keys(data).forEach((key) => {
        if (data[key] == user[key] || !data[key]) {
          delete data[key];
        }
      });

      await api.patch("/auth", data).then((response) => {
        if (login && token) {
          login(token, response.data);
        }
        toast.success(
          firstName ? "Info updated!" : `Info updated, ${firstName}!`
        );
      });
    } catch (error) {
      toast.error("Couldn't handle this, please try again");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex text-black w-full container p-3 min-h-screen">
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/20 rounded-xl border-gray-gray1/60 text-black">
          <Menu />
          <div className="relative flex flex-col w-full gap-2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
            <Layout title="Update User">
              <DynamicProtectedRoute>
                <form
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={userUpdate}
                >
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="your@email.here"
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />
                  <Input
                    type="email"
                    label="Confirm Email"
                    name="confirmEmail"
                    id="confirmEmail"
                    placeholder="your@email.here"
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />

                  <Password
                    label="Password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />

                  <Password
                    label="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />

                  <Input
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder={user?.last_name || "John"}
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />

                  <Input
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder={user?.last_name || "Doe"}
                    labelClassName="text-primary"
                    className="text-primary/90"
                  />

                  {/* Register Button */}
                  <span className="flex items-center justify-center col-span-2">
                    <Button type="submit" variant="solid" className="lg:w-1/2">
                      Save
                    </Button>
                  </span>
                </form>
              </DynamicProtectedRoute>
            </Layout>
          </div>
        </div>
      </div>
    </main>
  );
}
