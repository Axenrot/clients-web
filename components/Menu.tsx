"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiContactsBook3Fill,
  RiUserFill,
  RiHealthBookFill,
} from "react-icons/ri";

const Menu = () => {
  const pathname = usePathname();

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
          onClick={() => {
            console.log(pathname);
          }}
          data-selected={pathname == "/"}
          className="data-[selected=true]:text-sea hover:text-sea transition-all duration-200"
        />
      </Link>
      <Link href={"/login"}>
        <RiHealthBookFill
          size={25}
          data-selected={pathname == "/"}
          className="data-[selected=true]:text-sea hover:text-sea transition-all duration-200"
        />
      </Link>
    </div>
  );
};

export default Menu;
