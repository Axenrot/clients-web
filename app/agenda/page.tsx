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

const DynamicProtectedRoute = dynamic(
  () => import("@/services/RouteProtection"),
  {
    ssr: false, // This ensures the component is only loaded on the client-side
  }
);

export default function Agenda() {
  const { user } = useContext(AuthContext) ?? {};
  const [clients, setClients] = useState<IClient[]>([]);
  async function search(query: string) {
    api.get(`/client/list/?search=${query}`).then((response: any) => {
      setClients(response.data);
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
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white dark:bg-primary-dark shadow-lg shadow-black/20 rounded-xl border-2 border-primary/10 dark:border-primary-dark/30">
          <Menu />
          <div className="relative flex flex-col w-full gap-2">
            <Layout title="Clients Agenda">
              <DynamicProtectedRoute>
                <SearchFilters search={search} />
                <ClientsList clients={clients} />
              </DynamicProtectedRoute>
            </Layout>
          </div>
        </div>
      </div>
    </main>
  );
}
