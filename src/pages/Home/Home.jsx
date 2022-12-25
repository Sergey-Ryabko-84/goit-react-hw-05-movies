import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'api/moviesApi';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetchTrending()
      .then(response => {
        setTrendingMovies(response.results);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {/* <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
                  }
                  alt={title}
                  width={60}
                /> */}
                <p>{title}</p>
                {/* <p>vote_average: {vote_average}</p> */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
