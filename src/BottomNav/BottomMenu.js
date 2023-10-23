import React, { useState } from "react";
import spark from "../Navbar/spark.png";
import trending from "./trending.svg";
import "../Loading/Loading.css";
import newIcon from "./new.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BottomMenu = () => {
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
  return (
    <div>
      {isSettingsModalOpen && (
        <div class="modal-for-genre">
          <div class="modal-for-genre-content">
            <div>
              <ul>
                {genres.map((genre) => (
                     <Link to={`/genre/${genre.id}`}>
                  <li
                    className="p-2 my-2 border-2 border-gray-200 rounded-md"
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

      <div className="fixed z-50 block w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 md:hidden">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            onClick={() => navigateTo("/")}
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            onClick={() => navigateTo("/new-releases")}
            data-tooltip-target="tooltip-wallet"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <img
              alt="icons"
              src={newIcon}
              className="w-6 h-6 mb-1 text-gray-500 group-hover:text-blue-600"
            />
            <span className="sr-only">new-releases</span>
          </button>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          >
            new-releases
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center animate-bounce">
            <button
              onClick={() => navigateTo("/movies/1234")}
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none "
            >
              <img alt="icons" src={spark} className="w-5 h-5 " />
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover-bg-gray-50 group"
            onClick={toggleSettingsModal}
          >
            {" "}
            <svg
              className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600 "
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
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-profile"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 group"
          >
            <img
              alt="icons"
              src={trending}
              className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600 "
            />
            <span className="sr-only">Profile</span>
          </button>
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
