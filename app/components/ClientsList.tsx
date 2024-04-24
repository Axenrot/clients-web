"use client";
import { AuthContext } from "@/context/Auth";
import api from "@/services/Api";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IClient, countryOptions, titleOptions } from "@/types/client";
import { Avatar, Button, Input, Select } from "rizzui";
import { RiPencilFill } from "react-icons/ri";

const ClientsList = ({
  clients = [],
  country,
  setCountry,
  title,
  setTitle,
  showAddForm,
  handleAddFormSubmit,
}: {
  clients?: Array<IClient>;
  country: any;
  setCountry: React.Dispatch<any>;
  title: any;
  setTitle: React.Dispatch<any>;
  handleAddFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  showAddForm: boolean;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <div className="hidden lg:grid lg:grid-cols-6 p-2 rounded-md gap-2 flex-row">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Address</div>
          <div>Title</div>
          <div>Country</div>
        </div>

        {showAddForm && (
          <form
            onSubmit={handleAddFormSubmit}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 p-2 rounded-md gap-2 flex-row bg-neutral-light/80 dark:bg-zinc-950/80 fadein"
          >
            <Input
              placeholder="Name"
              name="name"
              id="name"
              inputClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              className="group"
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
              className="group"
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
              className="group"
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
              className="group"
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
              selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              optionClassName="transition-all duration-100"
              variant="text"
            />
            <Select
              placeholder="Title"
              name="title"
              id="title"
              value={title}
              onChange={setTitle}
              options={titleOptions}
              selectClassName="hover:outline-none outline-none border-0 cursor-pointer shadow-none hover:border-0 focus:ring-0 focus:outline-none focus:border-0 focus:shadow-none"
              optionClassName="transition-all duration-100"
              variant="text"
            />

            <Button
              type="submit"
              className="col-span-2 md:col-span-3 lg:col-span-1 dark:bg-primary bg-primary-dark text-primary dark:text-primary-dark"
            >
              Add
            </Button>
          </form>
        )}

        {clients.map((client: any) => (
          <div
            key={client.id}
            className="reveal-item grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-3 py-4 rounded-md gap-2 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
          >
            <div className="flex gap-3 items-center justify-start font-semibold">
              <Avatar name={client.name} size="sm" rounded="md" />
              {client.name}
            </div>
            <div className="flex gap-2 items-center justify-start font-semibold">
              {client.email}
            </div>
            <div className="flex gap-2 items-center justify-start font-semibold">
              {client.phone}
            </div>
            <div className="flex gap-2 items-center justify-start font-semibold">
              {client.address}
            </div>
            <div className="flex gap-2 items-center justify-start font-semibold">
              {client.country}
            </div>
            <div className="flex gap-2 items-center justify-start font-semibold">
              {client.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsList;
