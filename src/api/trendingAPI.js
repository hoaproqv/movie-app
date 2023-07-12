import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_API_KEY;
const trendingAPI = (date) => {
  const url = `3/trending/all/${date}?api_key=${apiKey}&language=en-US`;
  return axiosClient.get(url);
};

export default trendingAPI;
