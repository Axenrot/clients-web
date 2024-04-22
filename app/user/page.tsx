"use client";
import Layout from "@/app/components/Layout";
import Menu from "@/app/components/Menu";
import { AuthContext } from "@/context/Auth";
import api from "@/services/Api";
import ProtectedRoute from "@/services/RouteProtection";
import { shoot } from "@/services/SwalCall";
import { IUpdateUser } from "@/types/user";
import { useContext, useState } from "react";

export default function User() {
  const { user, login, token } = useContext(AuthContext) ?? {};
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");

  const userUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let data: IUpdateUser = {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
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
        shoot(firstName ? "Info updated!" : `Info updated, ${firstName}!`);
      });
    } catch (error) {
      shoot("Couldn't handle this, please try again", "error");
    }
  };
  return (
    <ProtectedRoute>
      <main className="flex min-h-screen bg-neutral-dark flex-col items-center justify-between">
        <div className="flex text-black w-full container p-3 min-h-screen">
          <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/20 rounded-xl border-gray-gray1/60 text-black">
            <Menu />
            <div className="relative flex flex-col w-full gap-2 border-gray-gray2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
              <Layout title="Update User">
                <form className="p-1" onSubmit={userUpdate}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-dark font-medium mb-2"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@new.email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky text-dark"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-dark font-medium mb-2"
                    >
                      Confirm Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@new.email"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
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
                      placeholder="*******"
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
                      placeholder="*******"
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
                      placeholder="John"
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
                      placeholder="Doe"
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
                    Save
                  </button>
                </form>
              </Layout>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
