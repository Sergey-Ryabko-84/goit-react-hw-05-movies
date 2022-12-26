import { getMovieDetails } from 'api/moviesApi';
import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Loader } from 'components/Loader/Loader';
import {
  BackdropImg,
  BackdropWrapper,
  BackLink,
  MovieMain,
  MovieWrapper,
  MovieInfo,
  AddInfo,
} from './MovieDetails.styled';

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
  const { backdrop_path, poster_path, title, vote_average, overview, genres } =
    movie;

  return (
    <MovieMain>
      <BackdropImg
        backdrop={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      >
        <BackdropWrapper>
          <BackLink to={backLinkHref}>
            <BiArrowBack /> Go back
          </BackLink>
          {loading && <Loader />}
          <MovieWrapper>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
              }
              alt={title}
              width={320}
            />
            <MovieInfo>
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
            </MovieInfo>
          </MovieWrapper>
          <AddInfo>
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
          </AddInfo>
        </BackdropWrapper>
      </BackdropImg>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieMain>
  );
};

export default MovieDetails;