import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { searchMovie } from 'api/moviesApi';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return setMovies([]);

    setLoading(true);
    searchMovie(searchQuery)
      .then(response => {
        setMovies(response.results);
        setLoading(false);
      })
      .catch(console.log);
  }, [searchQuery]);

  const onSubmitForm = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.input.value;
    if (query.trim() === '') toast.error('Enter your query!');
    setSearchParams(query.trim() !== '' ? { query } : {});
    e.currentTarget.reset();
  };

  return (
    <main>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {movies.length === 0 && searchQuery !== '' && (
        <p>
          No movie was found for your query "<span>{searchQuery}</span>".
        </p>
      )}
    </main>
  );
};

export default Movies;