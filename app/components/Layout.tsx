import { AuthContext } from "@/context/Auth";
import { useContext } from "react";

export default function Layout({
  title = "Page Title",
  children,
}: Readonly<{
  children?: React.ReactNode;
  title?: string;
}>) {
  // const { token } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-6 h-full p-3 lg:p-8">
      <h1 className="text-dark font-semibold text-3xl border-b border-neutral-dark/50 w-fit pb-2">
        {title}
      </h1>
      {/* <p>{token}</p> */}
      <span className="flex-1 overflow-y-auto scroll">{children}</span>
    </div>
  );
}
