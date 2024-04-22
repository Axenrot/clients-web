"use client";
import { AuthContext } from "@/context/Auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import {
  RiContactsBook3Fill,
  RiUserFill,
  RiLogoutBoxLine,
} from "react-icons/ri";

const Menu = () => {
  const pathname = usePathname();
  const { logout } = useContext(AuthContext) ?? {};

  return (
    <div className="flex md:flex-col gap-12 justify-center items-center w-full h-[50px] md:h-full md:w-[50px] bg-neutral-dark/60 border-t md:border-t-0 md:border-r border-zinc-300 shadow-sm p-3 text-dark">
      <Link href={"/user"}>
        <RiUserFill
          size={25}
          data-selected={pathname == "/user"}
          className="data-[selected=true]:text-sea hover:text-sea transition-all duration-200"
        />
      </Link>
      <Link href={"/"}>
        <RiContactsBook3Fill
          size={25}
          data-selected={pathname == "/"}
          className="data-[selected=true]:text-sea hover:text-sea transition-all duration-200"
        />
      </Link>

      <RiLogoutBoxLine
        size={25}
        onClick={() => {
          if (logout) logout();
        }}
        className="cursor-pointer hover:text-sea transition-all duration-200"
      />
    </div>
  );
};

export default Menu;