import { useState } from "react";
import discover from "../api/discover";

function useDiscoverApi( params ) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagesLoaded, setPagesLoaded] = useState(0);

  const requestNextPage = async () => {
    params.page = pagesLoaded + 1;
    console.log("params are", params);
    setLoading(true);
    const response = await discover(params);
    setLoading(false);
    setError(response.ok ? false : true);

    if (response.ok) {
      setPagesLoaded(pagesLoaded + 1);
      setMovies([...movies, ...response.data.results]);
    }
  };

  return { movies, error, loading, requestNextPage };
}

export default useDiscoverApi;
