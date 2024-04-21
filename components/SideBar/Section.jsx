import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import { VscThreeBars } from "react-icons/vsc";
import { BiAddToQueue } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { CgRemoveR } from "react-icons/cg";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

export default function Collapse({
  title,
  subTitle1,
  link1,
  iconTitle,
  iconSubtitle1,
  subTitle2,
  iconSubtitle2,
  link3,
  subTitle3,
  iconSubtitle3,
  func2,
  size = 25,
  hoverColor = "hover:bg-green-300",
}) {
  const [isActivate, setIsActivate] = useState("hidden");

  function toogleCollapse() {
    setIsActivate(isActivate === "hidden" ? "block" : "hidden");
  }

  const icons = {
    VscThreeBars: <VscThreeBars size={size} />,
    BiAddToQueue: <BiAddToQueue size={size} />,
    FiExternalLink: <FiExternalLink size={size} />,
    BsFileEarmarkSpreadsheet: <BsFileEarmarkSpreadsheet size={size} />,
    CgRemoveR: <CgRemoveR size={size} />,
  };

  return (
    <div
      className={`${
        isActivate === "block"
          ? `${hoverColor.replace("hover:", "")} font-bold`
          : `${hoverColor} font-semibold`
      } flex transition-all duration-300 flex-col items-center w-full text-md text-gray-200  text-left h-fit rounded-md cursor-pointer select-none focus:outline-none`}
    >
      <div className="flex flex-row w-full h-14" onClick={toogleCollapse}>
        <div className="relative flex items-center w-full">
          <div className="flex flex-row items-center gap-1.5 pl-2">
            {icons[iconTitle]}
            <p className="">{title}</p>
          </div>
          <div
            className={`${
              isActivate === "block" ? "" : "md:opacity-0"
            } absolute flex items-center justify-end w-full h-full pr-3 text-white hover:opacity-100`}
          >
            <AiFillCaretRight
              className={
                isActivate === "block" ? "transform rotate-90" : "block"
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`${isActivate} relative w-full shadow-lg bg-gray-gray5 overflow-hidden`}
      >
        <Link
          to={link1}
          className="flex flex-row items-center gap-1.5 p-4 text-white hover:bg-gray-gray2"
        >
          {icons[iconSubtitle1]}
          {subTitle1}
        </Link>
        <button
          onClick={func2}
          className="w-full flex flex-row items-center gap-1.5 p-4 text-white hover:bg-gray-gray2 focus:outline-none"
        >
          {icons[iconSubtitle2]}
          {subTitle2}
        </button>
        <Link
          to={link3}
          className="flex flex-row items-center gap-1.5 p-4 text-white hover:bg-gray-gray2"
        >
          {icons[iconSubtitle3]}
          {subTitle3}
        </Link>
      </div>
    </div>
  );
}
