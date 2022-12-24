import { getMovieDetails } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  if (!movie) return;
  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <Link to={location.state.from}>{'<- Go back'}</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          // onerror="this.onerror=null;this.src='https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg';"
          loading="lazy"
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
    </>
  );
};

// MovieDetails.propTypes = {};
