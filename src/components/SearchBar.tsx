import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg flex items-center px-3 py-2 shadow-sm">
        <Search size={20} className="text-[#6B7280] mr-2" />
        <input
          type="text"
          placeholder="Search medicines"
          className="flex-1 outline-none text-sm text-[#1B1F23] placeholder:text-[#6B7280]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
