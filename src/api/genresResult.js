import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const genresResultAPI = (idGenres) => {
  const url = `3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${idGenres}`;
  return axiosClient.get(url);
};
export default genresResultAPI;
