"use client";

import { useState, useEffect } from "react";
import { AiFillLock } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

import CollapseButton from "./CollapseButton";
import SideButton from "./SideButton";
import Modal from "../Modal";
// import Hubbi from "../../../assets/Hubbi";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function SideBar() {
  const [openModal, setOpenModal] = useState(false);
  // const history = useHistory();
  const { width } = useWindowDimensions();
  const [expand, setExpand] = useState(width < 768 ? false : true);
  function toggleExpand() {
    setExpand(!expand);
  }

  useEffect(() => {
    if (width < 768) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }, [width]);

  const btnHoverColor = "hover:bg-gray-200/10";

  return (
    <div
      className={`${
        expand ? "w-[218px]" : "w-[72px]"
      } flex flex-col justify-between h-full px-2 py-2 bg-gray-gray1 bg-sky transition-all duration-300`}
    >
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-start py-6 mb-1 border-b h-9 border-gray-200/10">
          {/* <Hubbi
            full={expand ? true : false}
            width={80}
            height={80}
            className={`${!expand && "w-14 absolute left-3"}`}
          /> */}

          <CollapseButton expand={expand} toggleExpand={toggleExpand} />
        </div>

        <ul
          className={`w-full transition-all duration-300 flex flex-col gap-2 fadein`}
        >
          <SideButton
            icon={<FaCloudUploadAlt size={25} className="fadein" />}
            name="Upload de catálogos"
            to="/upload-de-catalogos"
            expand={expand}
            hoverColor={btnHoverColor}
          />
          <SideButton
            icon={<BsFileEarmarkSpreadsheet size={25} className="fadein" />}
            name="Produtos"
            to="/meus-produtos"
            expand={expand}
            hoverColor={btnHoverColor}
          />
          <SideButton
            icon={<AiFillLock size={25} className="fadein" />}
            name="Chave API"
            to="/chave-api"
            expand={expand}
            hoverColor={btnHoverColor}
          />
        </ul>
      </div>

      <div className="flex flex-col pt-2 border-t border-gray-200/10">
        {/* <UserDropdown expand={expand} hoverColor={btnHoverColor} /> */}
      </div>

      {openModal && (
        <Modal
          close={() => setOpenModal(false)}
          title="Deseja realmente sair?"
          buttonIs={true}
          funcButton={() => {}}
        />
      )}
    </div>
  );
}
