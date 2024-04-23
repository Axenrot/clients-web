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
export default function Home() {
  const [filterTerm, setFilterTerm] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex text-black w-full container p-3 h-screen">
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/20 rounded-xl border-gray-gray1/60 text-black">
          <Menu />
          <div className="relative flex flex-col w-full gap-2 border-gray-gray2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
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
