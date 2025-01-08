import React, { useState } from "react";

function Sidebar({ isDarkMode }) {
  const favorites = [
    { name: "r/funnymore", count: 12 },
    { name: "r/breakingnews", count: 8 },
    { name: "r/lovestory", count: 4 },
  ];
  const feeds = [
    { name: "r/moviev", count: 5 },
    { name: "r/gaming", count: 7 },
    { name: "r/pics", count: 10 },
    { name: "r/gifs", count: 6 },
  ];
  const communities = [
    { name: "r/funnymore", count: 15 },
    { name: "r/breakingnews", count: 9 },
    { name: "r/gaming", count: 20 },
  ];

  const [activeFilter, setActiveFilter] = useState(""); // Empty string for placeholder

  const categories = {
    Favorites: favorites,
    Feeds: feeds,
    Communities: communities,
  };

  const filteredCategories =
    activeFilter === "" || activeFilter === "All"
      ? categories
      : { [activeFilter]: categories[activeFilter] };

  return (
    <aside
      className={`${
        isDarkMode
          ? "text-white border-gray-700"
          : "text-gray-800 border-gray-200"
      } w-60 p-6 border-r h-full`}
    >
      {/* Dropdown Filter */}
      <div className="mb-6">
        <select
          alt="Filter by"
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className={`w-full p-2 rounded-lg ${
            isDarkMode
              ? "bg-white-800 text-gray-300"
              : "bg-white-100 text-gray-700"
          } focus:outline-none focus:ring-2 focus:ring-orange-500`}
        >
          <option value="">Filter by</option>
          {["Favorites", "Feeds", "Communities", "All"].map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      {/* Filtered Categories */}
      <div>
        {Object.keys(filteredCategories).map((section) => (
          <div
            key={section}
            className={`mb-6 pb-4 border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`font-bold text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {section}
              </h3>
              {/* All text beside each section */}
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                All
              </span>
            </div>

            {/* Section Items */}
            {filteredCategories[section].map((category, index) => (
              <div
                key={index}
                className={`flex items-center justify-between mb-4 p-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* Profile Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {category.name.charAt(2).toUpperCase()}
                  </div>
                  <span>{category.name}</span>
                </div>
                {/* Count in Gray Tab */}
                <div
                  className={`bg-gray-300 text-gray-800 rounded-full py-0.5 px-2 text-xs font-medium ${
                    isDarkMode ? "bg-gray-600 text-gray-300" : ""
                  }`}
                >
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
