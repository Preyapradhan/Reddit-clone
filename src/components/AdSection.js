import React from "react";
import { RedditLogo } from "./Redditlogo";

function AdSection({ isDarkMode }) {
  return (
    <aside
      className={`${
        isDarkMode
          ? "text-white border-gray-700"
          : "text-gray-800 border-gray-200"
      } w-full max-w-[320px] sm:max-w-[380px] p-6 border-l h-full flex flex-col`}
    >
      {/* Ad Image */}
      <div className="text-center mb-6">
        <img src="/redditsales.jpg" alt="Summer Sale" className="w-full" />
      </div>

      {/* Ad Text Section with circular gray design in the background */}
<div className="flex-grow mb-6">
  <div
    className={`bg-white p-6 text-center mb-8 shadow-md rounded-lg relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    style={{
      backgroundImage: isDarkMode
        ? 'radial-gradient(circle, rgba(169, 169, 169, 0.3) 20%, transparent 20%)'
        : 'radial-gradient(circle, rgba(169, 169, 169, 0.1) 20%, transparent 20%)',
      backgroundSize: '30px 30px',
      backgroundPosition: '0 0, 15px 15px',
    }}
  >
    <div className="flex justify-center items-center gap-2 mb-3">
      <RedditLogo className="w-8 h-8" />
      <span
        className={`font-bold text-xl ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
      >
        reddit
      </span>
    </div>
    <h3
      className={`font-medium mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-800"}`}
    >
      Advertise on Reddit
    </h3>

    {/* Ad Button */}
    <button
      className={`${
        isDarkMode
          ? "border-redditOrange text-redditOrange bg-gray-800 hover:bg-redditOrange hover:text-white"
          : "border-redditOrange text-redditOrange bg-white hover:bg-redditOrange hover:text-white"
      } px-6 py-2 rounded-lg border font-medium`}
    >
      Get Started
    </button>
  </div>
</div>

      {/* Footer Section with Links */}
      <div className="mt-auto border-t pt-6 text-gray-200 dark:text-gray-200">
        <ul className="grid grid-cols-2 gap-4 mb-7">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              About
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Advertise
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Reddit Blog
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Reddit App
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Careers
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Reddit Hits
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a
              href="/"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-redditOrange`}
            >
              Help
            </a>
          </li>
        </ul>

        {/* Footer */}
        <div className=" text-sm mt-8 md:mt-1 lg:mt-1 border-t pt-4">
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <span className="ml-0">&copy; 2020</span>
            <span className="ml-28 text-gray-500">Privacy Terms</span>
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AdSection;
