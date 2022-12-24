import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '90a449e7773f96eeaad80a5e660b8095';
const params = new URLSearchParams({
  api_key: API_KEY,
  // language: 'en-US',
  //   page: pageNum,
});

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day?${params}`);
  return response.data;
};

export const searchMovie = async query => {
  const response = await axios.get(`/search/movie?${params}&query=${query}`);
  return response.data;
};

export const getMovieDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}?${params}`);
  return response.data;
};

export const getMovieCredits = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/credits?${params}`);
  return response.data;
};

export const getMovieReviews = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/reviews?${params}`);
  return response.data;
};