import { useEffect, useState } from "react";
import detailAPI from "../api/detailAPI";
function useDetailPage(id) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await detailAPI(id);
        setState(response);
      } catch (error) {
        console.log("Failed to fetch movieList list: ", error);
      }
    };
    fetchData();
  }, [id]);

  return [state, setState];
}

export default useDetailPage;
