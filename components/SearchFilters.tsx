"use client";
import { shoot } from "@/services/SwalCall";
import { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const SearchFilters = ({
  filterTerm,
  setFilterTerm,
}: {
  filterTerm: string;
  setFilterTerm: Dispatch<SetStateAction<string>>;
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    title: "",
    country: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleAddClient = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.patch("/client/create", newClient).then(() => {
        shoot(`Client added successfully!`);
      });
    } catch (error) {
      shoot("Couldn't handle this, please try again", "error");
    }
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col md:justify-between mb-4">
      <span className="flex flex-row gap-6 justify-end">
        <div className="flex items-center">
          <input
            type="search"
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            placeholder="Search clients..."
            className="py-2 pl-10 text-sm text-gray-700 focus:outline-none"
          />
          <button className="text-dark font-bold hover:text-sea transition-all duration-200 hover:scale-105 hover:rotate-3">
            <IoSearchOutline className="text-lg" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="text-dark" onClick={handleAddClient}>
            <GoPlus className="text-2xl hover:text-sea transition-all duration-200 hover:scale-105 hover:rotate-180" />
          </button>
        </div>
      </span>
      {showAddForm && (
        <form onSubmit={handleAddFormSubmit} className="flex flex-row ml-4">
          <input
            type="text"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
            placeholder="Name"
            className="py-2 pl-10 text-sm text-gray-700"
          />
          <input
            type="text"
            value={newClient.title}
            onChange={(e) =>
              setNewClient({ ...newClient, title: e.target.value })
            }
            placeholder="Title"
            className="py-2 pl-10 text-sm text-gray-700"
          />
          <input
            type="text"
            value={newClient.country}
            onChange={(e) =>
              setNewClient({ ...newClient, country: e.target.value })
            }
            placeholder="Country"
            className="py-2 pl-10 text-sm text-gray-700"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchFilters;
