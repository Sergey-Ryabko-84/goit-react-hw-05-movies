import { getMovieDetails } from 'api/moviesApi';
import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(response => {
        setMovie(response);
        setLoading(false);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) return;
  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <main>
      <Link to={backLinkHref}>{'<- Go back'}</Link>
      {loading && <Loader />}
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
          }
          alt={title}
          width={320}
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Owerview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(({ id, name }) => (
              <span key={id}>{name} </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'} state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={'reviews'} state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;