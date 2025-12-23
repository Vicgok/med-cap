import { useState } from "react";

const categories = ["All", "Vitamins", "Pain relief", "Diabetes", "Heart"];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="px-4 pb-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? "bg-[#2E7D32] text-white"
                : "border border-[#E5E7EB] text-[#1B1F23] bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
