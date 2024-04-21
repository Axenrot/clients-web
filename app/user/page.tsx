import Menu from "@/components/Menu";
import { ReactNode } from "react";

export default function User({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen bg-neutral-dark flex-col items-center justify-between">
      <div className="flex text-black w-full container p-3 min-h-screen">
        <div className="flex-1 flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white shadow-lg shadow-black/30 rounded-xl border-gray-gray1/60 text-black">
          <Menu />
          <div className="relative flex flex-col w-full gap-2 p-3 overflow-y-auto scroll2 lg:p-7 border-gray-gray2 bg-gradient-to-tl from-gray-gray1/50 to-gray-gray2">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
