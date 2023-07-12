import { useEffect, useState } from "react";
import genresMovieAPI from "../api/genresMovie";

function useGenresMovie() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await genresMovieAPI();
        setState(response.genres);
      } catch (error) {
        console.log("Failed to fetch movieList list: ", error);
      }
    };
    fetchData();
  }, []);
  return [state, setState];
}

export default useGenresMovie;
