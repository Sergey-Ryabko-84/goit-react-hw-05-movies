import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from 'api/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { HomeWrapper, ListLink, Title } from './Home.styled';

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
    <HomeWrapper>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
            <li key={id}>
              <ListLink to={`movies/${id}`} state={{ from: location }}>
                <p>{title}</p>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
                  }
                  alt={title}
                  width={180}
                />
              </ListLink>
            </li>
          ))}
        </ul>
      )}
    </HomeWrapper>
  );
};

export default Home;
