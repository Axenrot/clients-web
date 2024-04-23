"use client";
import ClientsList from "@/app/components/ClientsList";
import Layout from "@/app/components/Layout";
import Menu from "@/app/components/Menu";
import SearchFilters from "@/app/components/SearchFilters";
import { useState } from "react";
import dynamic from "next/dynamic";

const DynamicProtectedRoute = dynamic(
  () => import("@/services/RouteProtection"),
  {
    ssr: false, // This ensures the component is only loaded on the client-side
  }
);
export default function Agenda() {
  const [filterTerm, setFilterTerm] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full container p-3 h-screen">
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white dark:bg-primary-dark shadow-lg shadow-black/20 rounded-xl border-2 border-primary/10 dark:border-primary-dark/30">
          <Menu />
          <div className="relative flex flex-col w-full gap-2">
            <Layout title="Clients Agenda">
              <DynamicProtectedRoute>
                <SearchFilters
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                />
                <ClientsList
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                />
              </DynamicProtectedRoute>
            </Layout>
          </div>
        </div>
      </div>
    </main>
  );
}