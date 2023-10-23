import Navbar from "./Navbar/Navbar";
import Movie from "./Movies/Movie";
import MovieDetails from "./Movies/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import MovieSearch from "./MovieSearch/MovieSearch";
import Genre from "./Genre/Genre";
import BottomMenu from "./BottomNav/BottomMenu";
import NewMovies from "./NewMovies/NewMovies";
import Sidebar from "./Sidebar/Sidebar";

const routes = [
  {
    path: "/",
    element: <Movie />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
  {
    path: "/genre/:id",
    element: <Genre />,
  },
  {
    path: "/movie-search",
    element: <MovieSearch />,
  },
  {
    path: "/new-releases",
    element: <NewMovies />,
  },

];
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your App component with Router */}
      <div className="App">
        <Sidebar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
