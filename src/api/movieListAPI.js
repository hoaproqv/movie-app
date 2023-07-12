import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const movieListAPI = (type) => {
  const url = `3/movie/${type}?api_key=${apiKey}&language=en-US`;
  return axiosClient.get(url);
};

export default movieListAPI;
