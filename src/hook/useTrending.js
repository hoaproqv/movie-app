import { useEffect, useState } from "react";
import trendingAPI from "../api/trendingAPI";

function useTrending(date) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trendingAPI(date);
        setState(response.results);
      } catch (error) {
        console.log("Failed to fetch Trending list: ", error);
      }
    };
    fetchData();
  }, [date]);

  return [state, setState];
}

export default useTrending;
