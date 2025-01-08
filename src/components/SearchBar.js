import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-6">
      <input
        type="text"
        placeholder="Search Reddit..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-redditBlue"
      />
      <button
        type="submit"
        className="bg-redditOrange text-white px-4 py-2 rounded-r-md hover:bg-orange-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
