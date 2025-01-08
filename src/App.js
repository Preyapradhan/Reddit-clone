import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Posts from "./components/PopularPosts";
import Sidebar from "./components/Sidebar";
import AdSection from "./components/AdSection";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply the theme to the root HTML element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      {/* Header Component */}
      <Header
        onSearch={handleSearch}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        isOnline={true}
      />

      <div className="flex justify-center pt-16">
        {/* Sidebar */}
        <div className="w-1/8 hidden lg:block pr-4 bg-gray-100 dark:bg-gray-800">
          <Sidebar isDarkMode={isDarkMode} />
        </div>

        {/* Posts Section */}
        <div className="flex-1 max-w-3xl px-4">
          <Posts searchQuery={searchQuery} />
        </div>

        {/* AdSection */}
        <div className="w-1/4 hidden lg:block pl-4 bg-gray-100 dark:bg-gray-800">
          <AdSection isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
