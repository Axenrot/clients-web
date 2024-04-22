import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feenix Clients",
  description: "Feenix Challenge, Clients CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-[url('/feenixbg.png')] bg-cover`}
        >
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
