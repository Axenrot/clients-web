"use client";
import React, { useEffect } from "react";
import {
  IClient,
  countryOptions,
  titleJson,
  titleOptions,
} from "@/types/client";
import { Avatar, Button, Input, Select, Tooltip } from "rizzui";
import { RiPencilFill } from "react-icons/ri";
import { chainReveal } from "@/utils/animations";
import { GoPlus } from "react-icons/go";
import { MdAlternateEmail, MdBusinessCenter } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { capitalizeThis } from "@/utils/utils";

const ClientsList = ({
  clients = [],
  country,
  setCountry,
  title,
  setTitle,
  showAddForm,
  handleAddFormSubmit,
  loading,
}: {
  clients?: Array<IClient>;
  country: any;
  setCountry: React.Dispatch<any>;
  title: any;
  setTitle: React.Dispatch<any>;
  handleAddFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  showAddForm: boolean;
  loading: boolean;
}) => {
  useEffect(() => {
    chainReveal();
  }, [clients]);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        {showAddForm && (
          <form
            onSubmit={handleAddFormSubmit}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 p-2 rounded-md gap-2 flex-row bg-neutral-light/80 dark:bg-zinc-950/80 fadein"
          >
            <Input
              placeholder="Name"
              name="name"
              id="name"
              inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              className="group h-[30px]"
              suffix={
                <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              }
              variant="text"
            />
            <Input
              placeholder="Email"
              name="email"
              id="email"
              inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              className="group h-[30px]"
              suffix={
                <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              }
              variant="text"
            />
            <Input
              placeholder="Phone"
              name="phone"
              id="phone"
              inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              className="group h-[30px]"
              suffix={
                <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              }
              variant="text"
            />
            <Input
              placeholder="Address"
              name="address"
              id="address"
              inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              className="group h-[30px]"
              suffix={
                <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              }
              variant="text"
            />
            <Select
              placeholder="Country"
              name="country"
              id="country"
              value={country}
              onChange={setCountry}
              options={countryOptions}
              className={"h-[30px]"}
              selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              optionClassName="transition-all duration-100"
              variant="text"
            />

            <span className="flex gap-2 xl:col-span-2">
              <Select
                placeholder="Title"
                name="title"
                id="title"
                value={title}
                onChange={setTitle}
                options={titleOptions}
                className={"h-[30px]"}
                selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
                optionClassName="transition-all duration-100"
                variant="text"
              />
              <Button
                type="submit"
                className="w-fit p-2 aspect-square dark:bg-primary bg-primary-dark text-primary dark:text-primary-dark"
              >
                <GoPlus className="text-2xl hover:text-blue transition-all duration-200 hover:scale-105" />
              </Button>
            </span>
          </form>
        )}

        {!loading && clients.length > 0 ? (
          clients.map((client: any) => (
            <div
              key={client.id}
              className="reveal-item grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 p-3 py-4 rounded-md gap-3 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
            >
              <div className="cursor-default h-[30px] flex gap-3 items-center justify-start font-semibold truncate">
                <Avatar name={client.name} size="sm" rounded="md" />
                {capitalizeThis(client.name)}
              </div>
              <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-sm lg:text-md truncate">
                <MdAlternateEmail size={20} />
                {client.email}
              </div>
              <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md truncate">
                <FaPhone size={20} />
                {client.phone}
              </div>
              <div className="cursor-default h-[30px] flex w-full gap-2 items-center justify-start font-light text-xs lg:text-sm capitalize">
                <IoMdPin size={20} />

                {client.address.toLowerCase().length > 20 ? (
                  <Tooltip
                    content={capitalizeThis(client.address)}
                    color="secondary"
                  >
                    <span className="relative flex flex-col">
                      <p className="truncate mb-1">
                        {`${client.address.toLowerCase().substring(0, 20)}...`}
                      </p>
                      <p className="absolute top-[80%] text-xs text-zinc-800 dark:text-gray-300">
                        {client.country}
                      </p>
                    </span>
                  </Tooltip>
                ) : (
                  <span className="relative flex flex-col">
                    <p className="truncate mb-1">
                      {client.address.toLowerCase()}
                    </p>
                    <p className="absolute top-[80%] text-xs text-zinc-800 dark:text-gray-300">
                      {client.country}
                    </p>
                  </span>
                )}
              </div>

              <div className="xl:col-span-2 cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md">
                <MdBusinessCenter />{" "}
                {`${titleJson[String(client.title)] || client.title}`}
              </div>
            </div>
          ))
        ) : clients.length == 0 && !loading ? (
          <div className="flex-1 flex w-full h-full items-center justify-center font-bold text-3xl">
            No clients yet, try adding some above
          </div>
        ) : (
          <>{ghostClientsList()}</>
        )}
      </div>
    </div>
  );
};

export default ClientsList;

function ghostClientsList() {
  const ghostArr = new Array(20).fill("");

  return ghostArr.map((_, index: number) => {
    return (
      <div
        key={`ghots-${index}`}
        className="reveal-item grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 p-3 py-4 rounded-md gap-3 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
      >
        <div className="cursor-default h-[30px] flex gap-3 items-center justify-start font-semibold truncate">
          <Avatar name={"Yuri Leon"} size="sm" rounded="md" />
          <span className=" bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-full h-[12px] rounded-md" />
        </div>
        <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-sm lg:text-md truncate">
          <MdAlternateEmail size={20} />
          <span className=" bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-full h-[12px] rounded-md" />
        </div>
        <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md truncate">
          <FaPhone size={20} />
          <span className=" bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-full h-[12px] rounded-md" />
        </div>
        <div className="cursor-default h-[30px] flex w-full gap-2 items-center justify-start font-light text-xs lg:text-sm capitalize">
          <IoMdPin size={20} />

          <span className="relative flex flex-col w-full">
            <span className="bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-full h-[12px] rounded-md" />
            <span className="absolute top-[110%] bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-2/3 h-[9px] rounded-md " />
          </span>
        </div>

        <div className="xl:col-span-2 cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md">
          <MdBusinessCenter />
          <span className=" bg-zinc-700/30 dark:bg-zinc-100/50 animate-pulse w-full h-[12px] rounded-md" />
        </div>
      </div>
    );
  });
}
