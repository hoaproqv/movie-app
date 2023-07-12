import { useEffect, useState } from "react";
import movieListAPI from "../api/movieListAPI";

function useMovieList(type) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieListAPI(type);
        setState(response.results);
      } catch (error) {
        console.log("Failed to fetch movieList list: ", error);
      }
    };
    fetchData();
  }, [type]);

  return [state, setState];
}

export default useMovieList;
