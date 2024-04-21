"use client";
import { useState } from "react";
import { FaMagnet, FaPlus } from "react-icons/fa";

const SearchFilters = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    title: "",
    country: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const handleAddClient = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    // Add the new client to the list (you'll need to implement this logic)
    // ...
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col md:justify-between mb-4">
      <span className="flex flex-row gap-6 justify-end">
        <div className="flex items-center">
          <input
            type="search"
            value={filterTerm}
            onChange={handleFilterChange}
            placeholder="Search clients..."
            className="py-2 pl-10 text-sm text-gray-700"
          />
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            <FaMagnet className="text-lg" />
            Filter
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddClient}
          >
            <FaPlus className="text-lg" />
            Add Client
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
