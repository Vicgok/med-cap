import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "All Categories",
    "Vitamins",
    "Pain relief",
    "Heart",
    "Diabetes",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 pt-3 pb-2 bg-transparent">
      <div className="bg-white rounded-2xl shadow-md max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${
              isSearchExpanded
                ? "md:flex opacity-0 w-0 md:opacity-100 md:w-auto"
                : "opacity-100"
            }`}
          >
            <span className="text-lg font-semibold text-[#2E7D32]">MedCap</span>
          </div>

          <div
            className={`relative flex-shrink-0 transition-all duration-300 ${
              isSearchExpanded
                ? "md:block opacity-0 w-0 md:opacity-100 md:w-auto"
                : "opacity-100"
            }`}
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#1B1F23] hover:bg-[#EEF5F0] rounded-lg transition-colors"
            >
              <span className="hidden sm:inline">{selectedCategory}</span>
              <span className="sm:hidden">
                {selectedCategory === "All Categories"
                  ? "Categories"
                  : selectedCategory}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#6B7280] transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-2 z-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-[#EEF5F0] text-[#2E7D32] font-medium"
                        : "text-[#1B1F23] hover:bg-[#EEF5F0]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Search Bar - Always visible on desktop */}
          <div className="hidden md:flex flex-1 min-w-0">
            <div className="flex items-center bg-[#EEF5F0] rounded-full px-4 py-2 w-full">
              <Search size={20} className="text-[#6B7280] mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for medicines, health products"
                className="flex-1 bg-transparent outline-none text-sm text-[#1B1F23] placeholder:text-[#6B7280]"
              />
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ${
              isSearchExpanded ? "flex-1" : "flex-shrink-0"
            }`}
          >
            {isSearchExpanded ? (
              <div className="flex items-center bg-[#EEF5F0] rounded-full px-4 py-2 w-full">
                <Search
                  size={20}
                  className="text-[#6B7280] mr-3 flex-shrink-0"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for medicines, health products"
                  className="flex-1 bg-transparent outline-none text-sm text-[#1B1F23] placeholder:text-[#6B7280]"
                  onBlur={() => setIsSearchExpanded(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setIsSearchExpanded(true)}
                className="p-2 hover:bg-[#EEF5F0] rounded-lg transition-colors"
              >
                <Search size={24} className="text-[#1B1F23]" />
              </button>
            )}
          </div>

          <div
            className={`transition-all duration-300 ${
              isSearchExpanded ? "md:flex-1 hidden" : "flex-1 md:hidden"
            }`}
          ></div>

          <button
            className={`relative flex-shrink-0 transition-all duration-300 ${
              isSearchExpanded
                ? "md:block opacity-0 w-0 md:opacity-100 md:w-auto"
                : "opacity-100"
            }`}
          >
            <ShoppingCart size={24} className="text-[#1B1F23]" />
            <span className="absolute -top-1 -right-1 bg-[#2E7D32] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
