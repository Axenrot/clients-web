import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideButton({
  name = "",
  icon = <></>,
  to = "",
  onClick = () => {},
  expand = false,
}) {
  const pathname = usePathname();

  return to ? (
    <Link
      href={to}
      className={`flex flex-nowrap gap-2 p-2 items-center whitespace-nowrap overflow-hidden ease-out rounded-md transition-all duration-500 font-semibold ${
        pathname == to && `font-bold bg-gray-200/10`
      } ${!expand ? "justify-center w-12 aspect-square" : "py-3"}`}
    >
      {icon}
      {expand && <p className="fadein">{name}</p>}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center p-2 whitespace-nowrap rounded-md transition-all duration-300 font-semibold ${
        pathname == to && `font-bold bg-gray-200/10`
      } ${!expand ? "w-12 justify-center aspect-square" : "py-3"}`}
    >
      {icon}
      {expand && <p className="fadein">{name}</p>}
    </button>
  );
}
