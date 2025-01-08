import React from 'react';
import { Search, Home, BarChart2, Bell, Mail } from 'lucide-react';
import { RedditLogo } from './Redditlogo';

function Header({ onSearch, toggleTheme, isDarkMode, isOnline }) {
  return (
    <header
      className={`${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } border-b fixed w-full top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-8">
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <div className="flex items-center gap-2">
            <RedditLogo className="w-8 h-8" />
            <span
              className={`font-bold text-xl ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              reddit
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <a
              href="/"
              className={`flex items-center gap-2 ${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </a>
            <a
              href="/"
              className={`flex items-center gap-2 ${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <BarChart2 size={20} />
              <span>Popular</span>
            </a>
            <a
              href="/"
              className={`${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              All
            </a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
              size={20}
            />
            <input
              type="text"
              placeholder="Find community or post"
              className={`w-full ${
                isDarkMode
                  ? 'bg-gray-800 text-white focus:ring-blue-400'
                  : 'bg-gray-100 focus:ring-blue-500'
              } rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2`}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Right-Side Actions */}
        <div className="flex items-center gap-4">
          {/* Create Post Button */}
          <button
            className={`${
              isDarkMode
                ? 'bg-orange-600 hover:bg-orange-700'
                : 'bg-orange-500 hover:bg-orange-600'
            } text-white px-4 py-1.5 rounded-full font-medium hidden sm:block`}
          >
            Create Post
          </button>

          {/* Icons: Bell, Mail */}
          <Bell
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } cursor-pointer`}
            size={20}
          />
          <Mail
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } cursor-pointer`}
            size={20}
          />

          {/* User Profile */}
          <div className="relative">
            <img
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-300"
            />
            {isOnline && (
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"
                title="Online"
              ></span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
