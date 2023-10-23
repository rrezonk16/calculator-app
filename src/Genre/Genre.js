import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL for images

const Genre = () => {
  const { id } = useParams(); // Retrieve the genre ID from URL params
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1); // Track the current page
  const [genreName, setGenreName] = useState(''); // State for genre name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,
          {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGY2NjMzMGQwYTI1ZDNhMTk4OThjNGU3NmJhNDk0ZCIsInN1YiI6IjY0MmQ2OTVlNTRhOGFjMGIzNDg0OGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejjVsib_TIM3-7xEd4WTXJ7j7YwHHNT9qh3iAd-KstY'
            },
          }
        );

        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          console.error('Error fetching movie data');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (id) {
      fetchData();

      // Map the genre ID to a genre name (you can expand this mapping)
      switch (id) {
        case '28':
          setGenreName('Action');
          break;
        case '12':
          setGenreName('Adventure');
          break;
        case '16':
          setGenreName('Animation');
          break;
        case '35':
          setGenreName('Comedy');
          break;
        case '80':
          setGenreName('Crime');
          break;
        case '99':
          setGenreName('Documentary');
          break;
        case '18':
          setGenreName('Drama');
          break;
        case '10751':
          setGenreName('Family');
          break;
        case '14':
          setGenreName('Fantasy');
          break;
        case '36':
          setGenreName('History');
          break;
        case '27':
          setGenreName('Horror');
          break;
        case '10402':
          setGenreName('Music');
          break;
        case '9648':
          setGenreName('Mystery');
          break;
        case '10749':
          setGenreName('Romance');
          break;
        case '878':
          setGenreName('Science Fiction');
          break;
        case '10770':
          setGenreName('TV Movie');
          break;
        case '53':
          setGenreName('Thriller');
          break;
        case '10752':
          setGenreName('War');
          break;
        case '37':
          setGenreName('Western');
          break;
        default:
          setGenreName('Unknown Genre');
      }
      
    }
  }, [id, page]);

  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second loading delay
  }, []);

  return (
    <div>
    {isLoading ? (
      <Loading />
    ) : (
        <div>
      <h1 className="px-4 py-4 text-2xl font-bold movie-card md:px-9">
        Movies in the Genre: {genreName}
      </h1>
      <div className="flex flex-wrap border-t-2">
        {movies.map((movie) => (
          <div key={movie.id} className="w-1/2 px-4 py-4 md:w-1/4 xl:w-1/6 movie-card md:p-9">
            <a href={`/movies/${movie.id}`}>
              <div className="movie-card-inner">
                <div className="movie-card-front">
                  <img
                    src={`${baseImageUrl}${movie.poster_path}`}
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
      <div className="text-center my-4">
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
        
        )}
    </div>
  );
};

export default Genre;
