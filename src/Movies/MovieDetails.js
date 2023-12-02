import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import plus from "../plus.svg";
import minus from "../minus.svg";
import Loading from "../Loading/Loading";
import logo from "../Loading/Loader.png";
const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // Base URL for images

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [numTickets, setNumTickets] = useState(1);
  const [showMovieTrailer, setShowMovieTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGY2NjMzMGQwYTI1ZDNhMTk4OThjNGU3NmJhNDk0ZCIsInN1YiI6IjY0MmQ2OTVlNTRhOGFjMGIzNDg0OGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejjVsib_TIM3-7xEd4WTXJ7j7YwHHNT9qh3iAd-KstY",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const trailer = data.results.find(
            (result) => result.type === "Trailer" && result.site === "YouTube"
          );

          if (trailer) {
            setTrailerKey(trailer.key);
          }
        } else {
          console.error("Failed to fetch movie trailer");
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    fetchMovieTrailer();
  }, [id]);

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

        const data = await response.json();
        if (data && data.id) {
          setMovieData(data);
        } else {
          const randomId = Math.floor(Math.random() * 400000);
          window.location.href = `/movies/${randomId}`;
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const isNew = () => {
    if (movieData && movieData.release_date) {
      const releaseDate = new Date(movieData.release_date);
      const currentDate = new Date();
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

      return releaseDate >= threeMonthsAgo;
    }
    return false;
  };

  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className="mb-20 ">
      {movieData ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="px-4 pt-2 text-2xl font-bold">{movieData.title}</p>
            <p className="px-4 pb-2 text-lg text-gray-400 ">
              {movieData.tagline}
            </p>

            <div className="flex flex-row">
              <img
                src={
                  movieData.poster_path
                    ? `${baseImageUrl}${movieData.poster_path}`
                    : logo
                }
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
                <button
                  onClick={() => setShowMovieTrailer(true)}
                  className="px-4 py-2 m-4 rounded-lg shadow-2xl hover:shadow-none bg-stone-600 text-slate-100"
                >
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

          {isNew() && (
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
          )}

          {showMovieTrailer && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none p-4">
              <div className="relative  w-full md:w-2/5 mx-auto my-6">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/* Header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Movie Trailer</h3>
                    <button
                      onClick={() => setShowMovieTrailer(false)}
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* Body */}
                  <div className="relative p-6 flex-auto">
                    {trailerKey ? (
                      <iframe
                        title="Movie Trailer"
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    ):(
                      <p>No trailer found :(</p>
                    )}
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      onClick={() => setShowMovieTrailer(false)}
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetails;
