"use client";
import toast from "react-hot-toast";
import { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import api from "@/services/Api";
import { Button, Input, Select } from "rizzui";
import { RiPencilFill } from "react-icons/ri";
import { countryOptions, titleOptions } from "@/types/client";

const SearchFilters = ({ search }: { search: (arg0: string) => void }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState<any>(null);
  const [country, setCountry] = useState<any>(null);

  const handleAddClient = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const address = form.elements.namedItem("address") as HTMLInputElement;

    const newClient = {
      name: name.value,
      email: email.value,
      title: title.value,
      country: country.value,
      phone: phone.value,
      address: address.value,
    };
    try {
      await api.post("/client/create", newClient).then(async () => {
        search(filterTerm);
        toast.success(`Client added successfully!`);
        name.value = "";
        email.value = "";
        phone.value = "";
        address.value = "";
        setTitle(null);
        setCountry(null);
      });
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message)) {
        error!.response?.data.message.forEach((message: string) =>
          toast.error(message)
        );
      } else if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Couldn't handle this, please try again");
      }
    }
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col md:justify-between mb-4">
      <span className="flex flex-row gap-6 p-3 justify-end">
        <form
          action=""
          onSubmit={(e) => {
            search(filterTerm);
            toast("Hello!", {
              icon: "👏",
            });
          }}
        >
          <Input
            placeholder="Search something..."
            value={filterTerm}
            onChange={(e) => {
              setFilterTerm(e.target.value);
            }}
            variant="text"
            suffix={
              <button type="submit">
                <IoSearchOutline className="text-lg cursor-pointer hover:text-secondary transition-all duration-200 hover:rotate-6" />
              </button>
            }
          />
        </form>

        <button onClick={handleAddClient}>
          <GoPlus className="text-2xl hover:text-blue transition-all duration-200 hover:scale-105" />
        </button>
      </span>
      {showAddForm && (
        <form
          onSubmit={handleAddFormSubmit}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 p-2 rounded-md gap-2 flex-row bg-neutral-light/80 dark:bg-zinc-950/80"
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
    </div>
  );
};

export default SearchFilters;
