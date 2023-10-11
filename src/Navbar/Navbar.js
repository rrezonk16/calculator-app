import React, { useState } from "react";
import search from "./search.svg";
import spark from "./spark.png";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleSearchClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      // Navigate to the desired URL when Enter is pressed
      window.location.href = `/movie-search/?searchterm=${searchTerm}`;
    }
  };

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 7000); // Change the range as needed
    window.location.href = `/movies/${randomNum}`;
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-blue-800 dark:border-gray-900 p-4 md:px-9 relative">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              WatchMe
            </span>
          </a>

          <div className="flex items-center">
            {!isInputVisible && (
            <button
            onClick={generateRandomNumber}
            className="bg-white text-blue-500 font-bold py-1 px-4 rounded mr-4 flex items-center gap-2"
          >
            <span className="flex-grow">Random</span>
            <img className="w-5" src={spark} alt="Spark Icon" />
          </button>
          
            )}

            {isInputVisible && (
              <input
                type="text"
                className="mr-2 border border-gray-300 rounded-md py-1 px-3 w-40 md:w-auto focus:outline-none"
                placeholder="Search movies"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleEnterKey}
                autoFocus
              />
            )}
            <img
              src={search}
              alt="search"
              className="w-6 h-6 cursor-pointer"
              onClick={handleSearchClick}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
