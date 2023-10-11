
import Navbar from './Navbar/Navbar';
import Movie from './Movies/Movie';
import MovieDetails from './Movies/MovieDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; // Import Router components
import MovieSearch from './MovieSearch/MovieSearch';


const routes = [
  {
    path: "/",
    element: <Movie />,
  },
  {
    path: "/movies/:id",
    element:<MovieDetails/>,
  },
  {
    path: "/movie-search",
    element:<MovieSearch/>,
  },

];
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your App component with Router */}
      <div className="App">
        <Navbar/>

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
