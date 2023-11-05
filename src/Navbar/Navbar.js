import React, { useState } from "react";
import spark from "../Navbar/spark.png";
import dev from "./dev.svg";
import "../Loading/Loading.css";
import newIcon from "./new.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const genres = [
    { id: "28", name: "Action" },
    { id: "12", name: "Adventure" },
    { id: "16", name: "Animation" },
    { id: "35", name: "Comedy" },
    { id: "80", name: "Crime" },
    { id: "99", name: "Documentary" },
    { id: "18", name: "Drama" },
    { id: "10751", name: "Family" },
    { id: "14", name: "Fantasy" },
    { id: "36", name: "History" },
    { id: "27", name: "Horror" },
    { id: "10402", name: "Music" },
    { id: "9648", name: "Mystery" },
    { id: "10749", name: "Romance" },
    { id: "878", name: "Science Fiction" },
    { id: "10770", name: "TV Movie" },
    { id: "53", name: "Thriller" },
    { id: "10752", name: "War" },
    { id: "37", name: "Western" },
  ];

  const toggleSettingsModal = () => {
    setSettingsModalOpen(!isSettingsModalOpen);
  };

  const closeSettingsModal = () => {
    setSettingsModalOpen(false);
  };

  const navigateTo = (url) => {
    window.location.href = url;
  };
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
          <div className="hidden md:block">
          <div className="flex flex-row gap-6 ">
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover-bg-gray-50 group"
            onClick={() => navigateTo("/")}
          >
            <svg
              className="w-5 h-5 text-white cursor-pointer fill-current "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
</button>

            <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover-bg-gray-50 group"
            onClick={() => navigateTo("/new-releases")}
          >
            <img
              alt="icons"
              src={newIcon}
              className="w-6 h-6 cursor-pointer"
            />
  </button>
<div className="">
            <button
              onClick={() => navigateTo("/movies/1234")}
              data-tooltip-target="tooltip-new"
              type="button"
              className="  inline-flex items-center justify-center h-10 px-3 font-medium text-white ease-out bg-blue-600 border-2 border-blue-600 rounded-full hover:border-2 hover:border-yellow-300 group focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
             RANDOM <img alt="icons" src={spark} className="w-5 h-5 ml-2 " />
            </button>
          </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover-bg-gray-50 group"
            onClick={toggleSettingsModal}
          >
            {" "}
            <svg
              className="w-5 h-5 mb-1 text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <span className="sr-only">Settings</span>
          </button>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover-bg-gray-50 group"
            onClick={() => navigateTo("/developer")}
            >
          <img
              alt="icons"
              src={dev}
              className="w-5 h-5 mb-1 text-white-500 "
            />
          </button>
          </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative mx-auto text-gray-600 ">
              <input
                className="w-48 h-10 px-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-lg md:w-56 focus:outline-none"
                type="search"
                name="search"
                placeholder="Search movies"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleEnterKey}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 mt-3 mr-4"
                onClick={handleSearchClick}
              >
                <svg
                  className="w-4 h-4 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>

              
            </div>
          </div>
        </div>
      </nav>
      {isSettingsModalOpen && (
        <div class="modal-for-genre">
          <div class="modal-for-genre-content">
            <div>
              <ul>
                {genres.map((genre) => (
                     <Link to={`/genre/${genre.id}`}>
                  <li
                    className="p-2 my-2 border-2 hover:bg-gray-500 text-white border-gray-200 rounded-md"
                    key={genre.id}
                    onClick={closeSettingsModal}
                  >
                 {genre.name}
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
