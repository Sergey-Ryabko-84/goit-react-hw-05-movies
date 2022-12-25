import { getMovieCredits } from "api/moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null)
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieCredits(movieId)
      .then(response => {
        setCast(response.cast);
        setLoading(false);
      })
      .catch(console.log);
  }, [movieId]);

  if (!cast) return;
  if (cast.length === 0)
    return <p>No cast found for this movie</p>;

  return (
    <>
      {loading && <Loader />}
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <div>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://i.stack.imgur.com/WmvM0.png'                  
                }
                alt={name}
                width={100}
                // height={150}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;