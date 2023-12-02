import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import logo from "../default.png";

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieSearch = () => {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchterm');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGY2NjMzMGQwYTI1ZDNhMTk4OThjNGU3NmJhNDk0ZCIsInN1YiI6IjY0MmQ2OTVlNTRhOGFjMGIzNDg0OGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejjVsib_TIM3-7xEd4WTXJ7j7YwHHNT9qh3iAd-KstY'
          },
          params: {
            query: searchTerm,
          },
        });
        console.log('Movie data:', response.data);
        setMovieData(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className='mb-20 '>
      <h1 className="px-4 py-4 text-2xl font-bold movie-card md:px-9">Search Results for "{searchTerm}"</h1>
      <div className="flex flex-wrap border-t-2">
        {movieData.map((movie) => (
          <div key={movie.id} className="w-1/2 px-4 py-4 md:w-1/4 xl:w-1/6 movie-card md:p-9">
            <a href={`/movies/${movie.id}`}>
              <div className="movie-card-inner">
                <div className="movie-card-front">
                <img
                    src={
                      movie.poster_path
                        ? `${baseImageUrl}${movie.poster_path}`
                        : logo
                    }
                    alt="Movie Poster"
                    className="w-full mb-2 rounded-lg"
                  />
                </div>
                <div className="movie-card-back">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-gray-700">Rating: {movie.vote_average}</p>
                  <p className="text-gray-700">{formatReleaseDate(movie.release_date)}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
