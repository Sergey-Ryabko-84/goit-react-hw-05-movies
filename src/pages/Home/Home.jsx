import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchTrending } from 'api/moviesApi';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending()
      .then(response => setTrendingMovies(response.results))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul></ul>
    </>
  );
};

// Home.propTypes = {};
