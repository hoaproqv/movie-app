import { useEffect, useState } from "react";
import genresResultAPI from "../api/genresResult";

function useGenresResult(idGenres) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await genresResultAPI(idGenres);
        setState(response.results);
      } catch (error) {
        console.log("Failed to fetch movieList list: ", error);
      }
    };
    fetchData();
  }, [idGenres]);
  return [state, setState];
}

export default useGenresResult;
