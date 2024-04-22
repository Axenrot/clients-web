"use client";
import ClientsList from "@/components/ClientsList";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import ProtectedRoute from "@/services/RouteProtection";
import SearchFilters from "@/components/SearchFilters";
import { useState } from "react";

export default function Home() {
  const [filterTerm, setFilterTerm] = useState("");
  return (
    <ProtectedRoute>
      <main className="flex min-h-screen bg-neutral-dark flex-col items-center justify-between">
        <div className="flex text-black w-full container p-3 h-screen">
          <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/20 rounded-xl border-gray-gray1/60 text-black">
            <Menu />
            <div className="relative flex flex-col w-full gap-2 border-gray-gray2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
              <Layout title="Clients Agenda">
                <SearchFilters
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                />
                <ClientsList
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                />
              </Layout>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
