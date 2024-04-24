import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/Auth";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feenix - Agenda",
  description: "Feenix Challenge, Clients CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url('/feenixbg.png')] min-h-screen bg-fixed bg-cover`}
      >
        <AuthProvider>{children}</AuthProvider>
        <Toaster
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "white",
              border: "1px solid #e7e7e7",
              color: "#101828",
              fontWeight: "600",
            },
          }}
        />
      </body>
    </html>
  );
}
