"use client";
import { Dispatch, SetStateAction } from "react";
import { GoPlus } from "react-icons/go";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Input } from "rizzui";
import { capitalizeThis } from "@/utils/utils";

const SearchFilters = ({
  search,
  handleAddClient,
  filterTerm,
  setFilterTerm,
}: {
  search: (arg0: string) => void;
  handleAddClient: () => void;
  filterTerm: string;
  setFilterTerm: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col md:justify-between mb-4">
      <span className="flex flex-row gap-6 p-3 justify-end fadein">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            search(filterTerm);
          }}
        >
          <Input
            placeholder="Search something..."
            value={filterTerm}
            onChange={(e) => {
              setFilterTerm(capitalizeThis(e.target.value));
            }}
            inputClassName="font-semibold"
            variant="text"
            suffix={
              <div className="flex gap-0 items-center justify-center">
                <button
                  type="button"
                  className="flex items-center justify-center h-9 w-9"
                  onClick={() => {
                    setFilterTerm("");
                    search("");
                  }}
                >
                  <IoClose className="text-lg cursor-pointer hover:text-red transition-all duration-200 hover:rotate-90" />
                </button>
                <button
                  type="submit"
                  className="flex items-center justify-center h-9 w-9"
                >
                  <IoSearchOutline className="text-lg cursor-pointer hover:text-secondary transition-all duration-200 hover:rotate-6" />
                </button>
              </div>
            }
          />
        </form>

        <button onClick={handleAddClient}>
          <GoPlus className="text-2xl hover:text-blue transition-all duration-200 hover:scale-105" />
        </button>
      </span>
    </div>
  );
};

export default SearchFilters;
