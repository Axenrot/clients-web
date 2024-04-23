"use client";
import { AuthContext } from "@/context/Auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { BiSolidLogOut } from "react-icons/bi";
import { FaAddressBook, FaUser } from "react-icons/fa";
import { Avatar, Badge } from "rizzui";

const Menu = () => {
  const pathname = usePathname();
  const { logout } = useContext(AuthContext) ?? {};

  return (
    <div className="flex md:flex-col gap-12 justify-center items-center w-full h-[50px] md:h-full md:w-[50px] bg-neutral-primary/60 border-t md:border-t-0 md:border-r border-zinc-200/20 dark:border-black/10 px-3 md:px-0 md:py-3 shadow-sm bg-zinc-100/40 dark:bg-zinc-950/50">
      <div className="relative inline-flex mr-auto md:mr-0 mb-0 md:mb-auto">
        <Avatar
          name="Jane Doe"
          src="https://randomuser.me/api/portraits/women/40.jpg"
          rounded="md"
          className="aspect-square"
        />
        <Badge
          renderAsDot
          color="success"
          enableOutlineRing
          size="lg"
          className="absolute right-0 top-0 -translate-y-[25%]"
        />
      </div>
      <Link href={"/user"}>
        <FaUser
          size={20}
          data-selected={pathname == "/user"}
          className="data-[selected=true]:text-secondary hover:text-secondary transition-all duration-200"
        />
      </Link>
      <Link href={"/agenda"}>
        <FaAddressBook
          size={20}
          data-selected={pathname == "/"}
          className="data-[selected=true]:text-secondary hover:text-secondary transition-all duration-200"
        />
      </Link>

      <BiSolidLogOut
        size={25}
        onClick={() => {
          if (logout) logout();
        }}
        className="cursor-pointer ml-auto md:ml-0 mt-0 md:mt-auto hover:text-secondary transition-all duration-200"
      />
    </div>
  );
};

export default Menu;
