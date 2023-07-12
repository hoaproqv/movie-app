import { useEffect, useState } from "react";
import genresTvAPI from "../api/genresTV";

function useGenresTv() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await genresTvAPI();
        setState(response.genres);
      } catch (error) {
        console.log("Failed to fetch movieList list: ", error);
      }
    };
    fetchData();
  }, []);
  return [state, setState];
}

export default useGenresTv;
