import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import { searchMovie } from 'api/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { MoviesWrapper, ListLink, Input, Button, Form } from './Movies.styled';

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
    <MoviesWrapper>
      <Form onSubmit={onSubmitForm}>
        <Input type="text" name="input" />
        <Button type="submit"><BsSearch /></Button>
      </Form>
      {loading && <Loader />}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <ListLink to={`${id}`} state={{ from: location }}>
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
      {movies.length === 0 && searchQuery !== '' && (
        <p>
          No movie was found for your query "<span>{searchQuery}</span>".
        </p>
      )}
    </MoviesWrapper>
  );
};

export default Movies;