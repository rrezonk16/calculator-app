import React from "react";
import profile from "./Photo.png";
import tmdb from "./TMDB.png";
import cv from "./CV.png";
const Dev = () => {
  return (
    <div className=" mx-10 my-10 md:flex-row md:gap-0 gap-10 mb-32 flex flex-col justify-evenly">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div class="flex flex-col items-center py-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={profile}
            alt="Rrezon"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900">Rrezon Krasnqi</h5>
          <span class="text-sm text-gray-500">Web Developer</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://www.linkedin.com/in/rrezon-krasniqi/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Add friend
            </a>
            <a
              href="https://www.linkedin.com/in/rrezon-krasniqi/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
            >
              Message
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="https://rrezonkrasniqi.netlify.app/">
          <img class="rounded-t-lg" src={cv} alt="" />
        </a>
        <div class="p-5">
          <a href="https://rrezonkrasniqi.netlify.app/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Made by Rrezon Krasniqi
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 ">
            This is one of my personal projects made in React and Tailwind
          </p>
          <a
            href="https://rrezonkrasniqi.netlify.app/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Portfolio
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              API provided by "The Movie Database"
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            This is where you will find the definitive list of currently
            available methods for our movie, tv, actor and image API.
          </p>
          <a
            href="https://www.themoviedb.org/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            More
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dev;
