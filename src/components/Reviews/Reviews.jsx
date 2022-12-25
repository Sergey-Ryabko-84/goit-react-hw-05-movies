import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "api/moviesApi";
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(response => {
        setReviews(response.results);
        setLoading(false);
      })
      .catch(console.log);
  }, [movieId]);

  if (!reviews) return;
  if (reviews.length === 0) return <p>We don't have any reviews for this movie</p>;

  return (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
