import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const detailAPI = (id) => {
  const url = `3/movie/${id}?api_key=${apiKey}&language=en-US`;
  return axiosClient.get(url);
};

export default detailAPI;
