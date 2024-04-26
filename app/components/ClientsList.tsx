"use client";
import React, { useState } from "react";
import {
  IClient,
  countryOptions,
  titleJson,
  titleOptions,
} from "@/types/client";
import { Avatar, Button, Input, Select, Tooltip } from "rizzui";
import { RiPencilFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { MdAlternateEmail, MdBusinessCenter, MdEdit } from "react-icons/md";
import { FaPhone, FaTrashAlt, FaUser } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { capitalizeThis } from "@/utils/utils";
import toast from "react-hot-toast";
import api from "@/services/Api";
import { IoCheckmark, IoClose } from "react-icons/io5";

const ClientsList = ({
  clients = [],
  setClients,
  country,
  setCountry,
  title,
  setTitle,
  showAddForm,
  setShowAddForm,
  handleAddFormSubmit,
  loading,
  setLoading,
}: {
  clients?: Array<IClient>;
  setClients: React.Dispatch<any>;
  country: any;
  setCountry: React.Dispatch<any>;
  title: any;
  setTitle: React.Dispatch<any>;
  handleAddFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setShowAddForm: React.Dispatch<any>;
  showAddForm: boolean;
  loading: boolean;
  setLoading: React.Dispatch<any>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [edit, setEdit] = useState(null);

  function clientForm() {
    return (
      <form
        onSubmit={
          edit == null
            ? handleAddFormSubmit
            : () => {
                updateClient(edit);
              }
        }
        className="fadeinright flex col-span-full p-1 gap-2 rounded-md bg-neutral-light/80 dark:bg-zinc-950/80 fadein"
      >
        <span className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-1 gap-2 items-center">
          <Input
            required
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            prefix={
              <FaUser
                size={20}
                data-filled={!!name}
                className="opacity-30 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            suffix={
              <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
            }
            variant="text"
          />
          <Input
            required
            placeholder="Email"
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            prefix={
              <MdAlternateEmail
                size={20}
                data-filled={!!email}
                className="opacity-30 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            suffix={
              <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
            }
            variant="text"
          />
          <Input
            placeholder="Phone"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            prefix={
              <FaPhone
                size={20}
                data-filled={!!phone}
                className="opacity-30 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            suffix={
              <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
            }
            variant="text"
          />
          <Input
            required
            placeholder="Address"
            name="address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            prefix={
              <IoMdPin
                size={20}
                data-filled={!!address}
                className="opacity-30 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            suffix={
              <RiPencilFill className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
            }
            variant="text"
          />
          <Select
            placeholder="Country"
            name="country"
            id="country"
            aria-required={true}
            value={country}
            onChange={setCountry}
            options={countryOptions}
            prefix={
              <IoMdPin
                size={20}
                data-filled={!!country}
                className="opacity-30 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            optionClassName="transition-all duration-100"
            variant="text"
          />
          <Select
            placeholder="Title"
            name="title"
            id="title"
            aria-required={true}
            value={title}
            onChange={setTitle}
            options={titleOptions}
            prefix={
              <MdBusinessCenter
                size={20}
                data-filled={!!title}
                className="opacity-30 xl:col-span-2 data-[filled=true]:opacity-100 data-[filled=true]:text-purple transition-all duration-200"
              />
            }
            selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
            optionClassName="transition-all duration-100"
            variant="text"
          />
        </span>

        <span className="flex flex-col xl:flex-row py-2">
          {edit && (
            <Button
              type="button"
              variant="text"
              onClick={() => {
                setEdit(null);
              }}
              className="self-end h-full w-[32px] my-auto p-1 aspect-square"
            >
              <IoClose
                size={30}
                className="hover:text-purple transition-all duration-200 hover:scale-105"
              />
            </Button>
          )}
          <Button
            type="submit"
            variant="text"
            className="self-end h-full w-[32px] my-auto p-1 aspect-square"
          >
            {edit ? (
              <IoCheckmark
                size={30}
                className="hover:text-purple transition-all duration-200 hover:scale-105"
              />
            ) : (
              <GoPlus
                size={30}
                className="hover:text-purple transition-all duration-200 hover:scale-105"
              />
            )}
          </Button>
        </span>
      </form>
    );
  }

  async function updateClient(client: any) {
    setLoading(true);
    api.patch(`/client/update/${client.id}`).then((response: any) => {
      setClients(response.data);
      setLoading(false);
    });
  }

  async function deleteClient(id: number) {
    api.delete(`/client/${id}`).then((response: any) => {
      setClients(clients.filter((client) => client.id != id));
      toast.success("Client deleted successfully!");
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        {showAddForm && !edit && clientForm()}

        {!loading && clients.length > 0 ? (
          clients.map((client: any) =>
            edit == client ? (
              clientForm()
            ) : (
              <div
                key={client.id}
                id={`client-${client.id}`}
                data-client={JSON.stringify(client)}
                data-edit={edit == client}
                className="relative group fadeinright grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 p-3 py-4 data-[edit=true]:py-0 data-[edit=true]:px-0 rounded-md gap-3 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
              >
                <>
                  <div className="cursor-default h-[30px] flex gap-3 items-center justify-start font-semibold">
                    <Avatar name={client.name} size="sm" rounded="md" />
                    {client.name.toLowerCase().length > 16 ? (
                      <Tooltip
                        content={capitalizeThis(client.name)}
                        color="secondary"
                      >
                        <p className="truncate">
                          {`${capitalizeThis(
                            client.name.toLowerCase().substring(0, 16)
                          )}...`}
                        </p>
                      </Tooltip>
                    ) : (
                      <span className="relative flex flex-col">
                        <p className="truncate">
                          {capitalizeThis(client.name)}
                        </p>
                      </span>
                    )}
                  </div>
                  <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-sm lg:text-md truncate">
                    <MdAlternateEmail size={20} data-filled={!!title} />
                    {client.email.toLowerCase().length > 16 ? (
                      <Tooltip
                        content={client.email.toLowerCase()}
                        color="secondary"
                      >
                        <p className="truncate">
                          {`${client.email.toLowerCase().substring(0, 16)}...`}
                        </p>
                      </Tooltip>
                    ) : (
                      <span className="relative flex flex-col">
                        <p className="truncate">{client.email}</p>
                      </span>
                    )}
                  </div>
                  <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md truncate">
                    <FaPhone size={20} data-filled={!!title} />
                    {client.phone}
                  </div>
                  <div className="cursor-default h-[30px] flex w-full gap-2 items-center justify-start font-light text-xs lg:text-sm capitalize">
                    <IoMdPin size={20} data-filled={!!title} />

                    {client.address.toLowerCase().length > 20 ? (
                      <Tooltip
                        content={capitalizeThis(client.address)}
                        color="secondary"
                      >
                        <span className="relative flex flex-col">
                          <p className="truncate mb-1">
                            {`${client.address
                              .toLowerCase()
                              .substring(0, 20)}...`}
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
                  <span className="justify-between flex gap-2 col-span-2 w-full">
                    <div className="cursor-default h-[30px] flex gap-2 items-center justify-start font-light text-xs sm:text-sm lg:text-md">
                      <MdBusinessCenter size={20} data-filled={!!title} />{" "}
                      {`${titleJson[String(client.title)] || client.title}`}
                    </div>

                    <MdEdit
                      size={20}
                      onClick={() => {
                        setShowAddForm(false);
                        setEdit(client);
                      }}
                      className="group-hover:opacity-100 opacity-0 cursor-pointer absolute top-2 right-12 hover:text-purple transition-all duration-200 hover:scale-105"
                    />

                    <FaTrashAlt
                      size={20}
                      onClick={() => {
                        deleteClient(client.id);
                      }}
                      className="group-hover:opacity-100 opacity-0 cursor-pointer absolute top-2 right-4 hover:text-purple transition-all duration-200 hover:scale-105"
                    />
                  </span>
                </>
              </div>
            )
          )
        ) : clients.length == 0 && !loading ? (
          <div className="flex-1 flex w-full min-h-[400px] items-center justify-center font-bold opacity-70 animate-pulse text-3xl">
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
        className="fadeinright grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 p-3 py-4 rounded-md gap-3 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
      >
        <div className="cursor-default h-[30px] flex gap-3 items-center justify-start font-semibold">
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
