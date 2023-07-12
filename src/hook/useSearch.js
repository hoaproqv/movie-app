import { useEffect, useState } from "react";
import searchMovieAPI from "../api/searchMovie";

function useSearch(query) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchMovieAPI(query);
        setState(response.results);
      } catch (error) {
        console.log("Failed to fetch Search list: ", error);
      }
    };
    fetchData();
  }, [query]);

  return [state, setState];
}

export default useSearch;
