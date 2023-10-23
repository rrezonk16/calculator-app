import React, { useState } from "react";
import search from "./search.svg";
import spark from "./spark.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      // Navigate to the desired URL when the search button is clicked
      window.location.href = `/movie-search/?searchterm=${searchTerm}&genre=${selectedGenre}`;
    } else {
      setIsInputVisible(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    setSelectedGenre(selectedGenreId);

    // Redirect immediately when a genre is selected
    window.location.href = `/genre/${selectedGenreId}`;
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      // Navigate to the desired URL when Enter is pressed
      window.location.href = `/movie-search/?searchterm=${searchTerm}&genre=${selectedGenre}`;
    }
  };

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 400000);
    window.location.href = `/movies/${randomNum}`;
  };

  return (
    <div>
      <nav className="relative p-4 bg-white border-gray-200 dark:bg-blue-800 dark:border-gray-900 md:px-9">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              WatchMe
            </span>
          </a>

          {/* <div className="flex items-center">
            {!isInputVisible && (
              <button
                onClick={generateRandomNumber}
                className="flex items-center gap-2 px-4 py-1 mr-4 font-bold text-blue-500 bg-white rounded"
              >
                <span className="flex-grow">Random</span>
                <img className="w-5" src={spark} alt="Spark Icon" />
              </button>
            )}

            {isInputVisible && (
              <input
                type="text"
                className="w-40 px-3 py-1 mr-2 border border-gray-300 rounded-md md:w-auto focus:outline-none"
                placeholder="Search movies"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleEnterKey}
                autoFocus
              />
            )}


            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className="hidden w-40 px-2 py-1 mr-2 rounded-md md:w-auto focus:outline-none md:block"
            >
              <option value="">All Genres</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Music</option>
              <option value="9648">Mystery</option>
              <option value="10749">Romance</option>
              <option value="878">Science Fiction</option>
              <option value="10770">TV Movie</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>
            </select>

            <img
              src={search}
              alt="search"
              className="w-6 h-6 cursor-pointer"
              onClick={handleSearchClick}
            />
          </div>
        */}</div> 
      </nav>
    </div>
  );
};

export default Navbar;
