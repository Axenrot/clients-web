"use client";
import ClientsList from "@/app/components/ClientsList";
import Layout from "@/app/components/Layout";
import Menu from "@/app/components/Menu";
import SearchFilters from "@/app/components/SearchFilters";
import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AuthContext } from "@/context/Auth";
import api from "@/services/Api";
import { IClient } from "@/types/client";
import toast from "react-hot-toast";

const DynamicProtectedRoute = dynamic(
  () => import("@/services/RouteProtection"),
  {
    ssr: false, // This ensures the component is only loaded on the client-side
  }
);

export default function Agenda() {
  const { user } = useContext(AuthContext) ?? {};
  const [clients, setClients] = useState<IClient[]>([]);
  const [country, setCountry] = useState<any>(null);
  const [title, setTitle] = useState<any>(null);
  const [filterTerm, setFilterTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClient = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const address = form.elements.namedItem("address") as HTMLInputElement;

    const newClient = {
      name: name?.value || "",
      email: email?.value || "",
      title: title?.value || "",
      country: country?.value || "",
      phone: phone?.value || "",
      address: address?.value || "",
    };
    try {
      await api.post("/client/create", newClient).then((response: any) => {
        setClients((old) => [response.data, ...old]);
        toast.success(`Client added successfully!`);
        name.value = "";
        email.value = "";
        phone.value = "";
        address.value = "";
        setTitle(null);
        setCountry(null);
        setShowAddForm(false);
      });
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message)) {
        toast(`Fill all fields please!`, {
          icon: "ℹ️",
        });
      } else if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Couldn't handle this, please try again");
      }
    }
  };

  async function search(query: string) {
    setLoading(true);
    api.get(`/client/list/?search=${query}`).then((response: any) => {
      setClients(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (user) {
      search("");
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full container p-3 h-screen">
        <div className="flex-1 max-h-full flex flex-col-reverse md:flex-row w-full bg-white dark:bg-primary-dark shadow-lg shadow-black/20 rounded-xl border-2 border-primary/10 dark:border-primary-dark/30">
          <Menu />
          <div className="relative flex-1 flex flex-col w-full gap-2 max-h-[calc(100%-50px)] md:max-h-full">
            <Layout title="Clients Agenda">
              <DynamicProtectedRoute>
                <SearchFilters
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                  search={search}
                  handleAddClient={handleAddClient}
                />
                <ClientsList
                  country={country}
                  setCountry={setCountry}
                  title={title}
                  setTitle={setTitle}
                  showAddForm={showAddForm}
                  setShowAddForm={setShowAddForm}
                  clients={clients}
                  setClients={setClients}
                  loading={loading}
                  setLoading={setLoading}
                  handleAddFormSubmit={handleAddFormSubmit}
                />
              </DynamicProtectedRoute>
            </Layout>
          </div>
        </div>
      </div>
    </main>
  );
}
