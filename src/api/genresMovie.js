import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const genresMovieAPI = () => {
  const url = `3/genre/movie/list?api_key=${apiKey}`;
  return axiosClient.get(url);
};

export default genresMovieAPI;
