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
    <div className="flex flex-col gap-6 h-full p-6 lg:p-16 leading-tight tracking-tight">
      <h1 className="font-semibold text-3xl w-fit pb-2">{title}</h1>
      <span className="flex-1 overflow-y-auto scroll">{children}</span>
    </div>
  );
}
