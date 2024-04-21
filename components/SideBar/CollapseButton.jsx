import { BsCaretLeftFill } from "react-icons/bs";

export default function CollapseButton({
  expand = false,
  toggleExpand = () => {},
}) {
  return (
    <label
      htmlFor="my-drawer"
      onClick={toggleExpand}
      className={`hidden md:flex absolute z-10 btn-square btn-xs btn overflow-hidden bg-gray-200 hover:bg-gray-gray4 -right-5`}
    >
      <BsCaretLeftFill
        className={`${
          !expand && "rotate-180 fadein"
        } transition-all duration-300 w-full h-full p-1`}
      />
    </label>
  );
}
