"use client";
import toast from "react-hot-toast";
import { Dispatch, SetStateAction } from "react";
import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "rizzui";

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
    </div>
  );
};

export default SearchFilters;
