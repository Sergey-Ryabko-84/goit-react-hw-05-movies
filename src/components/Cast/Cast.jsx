import { getMovieCredits } from "api/moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import { CastWrapper, List, ListItem } from './Cast.styled';

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
    <CastWrapper>
      {loading && <Loader />}
      <List>
        {cast.map(({ id, profile_path, name, character }) => (
          <ListItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://i.stack.imgur.com/WmvM0.png'                  
              }
              alt={name}
              width={120}
              height={180}
            />
            <b>{name}</b>
            <p>{character}</p>
          </ListItem>
        ))}
      </List>
    </CastWrapper>
  );
};

export default Cast;