import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import plus from "../plus.svg";
import minus from "../minus.svg";


const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // Base URL for images




const MovieDetails = () => {
  const { id } = useParams(); // Retrieve the id from URL params
  const [movieData, setMovieData] = useState(null);
  const [numTickets, setNumTickets] = useState(1);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGY2NjMzMGQwYTI1ZDNhMTk4OThjNGU3NmJhNDk0ZCIsInN1YiI6IjY0MmQ2OTVlNTRhOGFjMGIzNDg0OGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejjVsib_TIM3-7xEd4WTXJ7j7YwHHNT9qh3iAd-KstY",
            },
          }
        );
        console.log("Movie details:", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Movie details data:", data);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      {movieData ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="px-4 pt-2 text-2xl font-bold">{movieData.title}</p>
            <p className="px-4 pb-2 text-lg text-gray-400 ">
              {movieData.tagline}
            </p>

            <div className="flex flex-row">
              <img
                src={`${baseImageUrl}${movieData.poster_path}`}
                alt="Movie Poster"
                className="w-1/4 mb-2 ml-4 rounded-lg shadow-2xl sm:w-1/6 md:w-1/3"
              />

              <div className="px-4">
                <p> {formatReleaseDate(movieData.release_date)}</p>

                {movieData.genres.map((genre) => (
                  <p>
                    <a
                      className="underline"
                      href="/movies/genre/genre.id"
                      key={genre.id}
                    >
                      #{genre.name}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full p-4 text-lg leading-tight text-justify text-gray-900 md:w-1/2">
              {movieData.overview}
            </div>
            <div className="flex flex-row">
              <div>
                <button className="px-4 py-2 m-4 rounded-lg shadow-2xl hover:shadow-none bg-stone-600 text-slate-100">
                  Watch trailer
                </button>
              </div>
              <div>
                <button className="px-4 py-2 mt-4 bg-blue-600 rounded-lg shadow-2xl md:hidden hover:shadow-none text-slate-100">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2">
            <span>Select cinema</span>
            <select className="block w-full px-4 py-2 mt-2 mb-4 bg-gray-200 rounded-lg shadow-2xl">
              <option>Choose cinema</option>
              <option>Cineplexx</option>
              <option>Cinemarine</option>
              <option>DokuKino</option>
            </select>

            <span>Select date</span>
            <select className="block w-full px-4 py-2 mt-2 mb-4 bg-gray-200 rounded-lg shadow-2xl">
              <option>Choose date</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Day after tomorrow</option>
            </select>

            <span>Select time</span>
            <select className="block w-full px-4 py-2 mt-2 mb-4 bg-gray-200 rounded-lg shadow-2xl">
              <option>Choose time</option>
              <option>18:00</option>
              <option>20:00</option>
              <option>22:00</option>
            </select>

            <div className="mt-4">
              <span className="text-lg font-medium">Number of tickets</span>
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setNumTickets(numTickets - 1)}
                  disabled={numTickets === 1}
                >
                  <img className="w-5" src={minus} alt="minus" />
                </button>
                <span className="mx-4 text-xl font-medium">{numTickets}</span>
                <button
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setNumTickets(numTickets + 1)}
                >
                  <img className="w-5" src={plus} alt="plus" />
                </button>
              </div>
            
          </div>

            <button className="px-4 py-2 mt-4 bg-blue-600 rounded-lg shadow-2xl hover:shadow-none text-slate-100">
              Buy now
            </button>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
