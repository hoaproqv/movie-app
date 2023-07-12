import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const searchMovieAPI = (query) => {
  const url = `3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  return axiosClient.get(url);
};

export default searchMovieAPI;
