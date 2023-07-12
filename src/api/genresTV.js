import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const genresTvAPI = () => {
  const url = `3/genre/tv/list?api_key=${apiKey}`;
  return axiosClient.get(url);
};

export default genresTvAPI;
