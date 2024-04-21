import ClientsList from "@/components/ClientsList";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import SearchFilters from "@/components/SearchFilters";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-neutral-dark flex-col items-center justify-between">
      <div className="flex text-black w-full container p-3 h-screen">
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/30 rounded-xl border-gray-gray1/60 text-black">
          <Menu />
          <div className="relative flex flex-col w-full gap-2 border-gray-gray2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
            <Layout title="Clients Agenda">
              <SearchFilters />
              <ClientsList
                clients={[
                  {
                    id: 1,
                    createdAt: "2024-04-19T02:49:32.753Z",
                    updatedAt: "2024-04-19T02:49:32.753Z",
                    title: "CEO",
                    country: "Brazil",
                    name: "Yuri  Leon",
                    email: "yuri@email.com",
                    phone: "123-456-230",
                    address: "Rua Antônio Barros Cavaalcanti",
                    userId: 1,
                  },
                  {
                    id: 8,
                    createdAt: "2024-04-21T04:30:41.987Z",
                    updatedAt: "2024-04-21T04:30:41.987Z",
                    title: "CEO",
                    country: "Brazil",
                    name: "Erika",
                    email: "erika@gmail.com",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 9,
                    createdAt: "2024-04-21T04:34:43.777Z",
                    updatedAt: "2024-04-21T04:34:43.777Z",
                    title: "CEO",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@gmail.comjklj",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 11,
                    createdAt: "2024-04-21T04:35:03.994Z",
                    updatedAt: "2024-04-21T04:35:03.994Z",
                    title: "CEO",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@gmail.com",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 13,
                    createdAt: "2024-04-21T04:38:19.617Z",
                    updatedAt: "2024-04-21T04:38:19.617Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.com",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 14,
                    createdAt: "2024-04-21T04:42:44.949Z",
                    updatedAt: "2024-04-21T04:42:44.949Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.co",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 16,
                    createdAt: "2024-04-21T04:49:02.731Z",
                    updatedAt: "2024-04-21T04:49:02.731Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.col",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 18,
                    createdAt: "2024-04-21T05:01:10.283Z",
                    updatedAt: "2024-04-21T05:01:10.283Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.comm",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 20,
                    createdAt: "2024-04-21T05:22:12.390Z",
                    updatedAt: "2024-04-21T05:22:12.390Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.commlll",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                  {
                    id: 3,
                    createdAt: "2024-04-19T02:50:28.383Z",
                    updatedAt: "2024-04-21T06:29:15.436Z",
                    title: "Manager",
                    country: "Brazil",
                    name: "Livia",
                    email: "livia@email.comavs",
                    phone: "123-456-230",
                    address: "Rua Santos Dumont, 1000",
                    userId: 1,
                  },
                ]}
              />
            </Layout>
          </div>
        </div>
      </div>
    </main>
  );
}
