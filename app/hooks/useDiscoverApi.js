import { useState, useEffect } from "react";
import discover from "../api/discover";

function useDiscoverApi(sorting, genreId, otherParams) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagesLoaded, setPagesLoaded] = useState(0);

  //Reset loaded movies when params change
  useEffect(() => {
    setMovies([]);
    setPagesLoaded(0);
    requestNextPage();
  }, [genreId, sorting, otherParams]);

  const requestNextPage = async () => {
    //abort if still loading previous request
    if (loading) return;

    const allParams = {
      sort_by: sorting,
      with_genres: genreId.toString(),
      page: pagesLoaded + 1,
      "vote_count.gte": 2,
    };
    // Object.assign(allParams, sorting, {with_genres: genreId.toString}, otherParams, {
    //   page: pagesLoaded + 1,
    // });

    setLoading(true);
    const response = await discover(allParams);
    setError(response.ok ? false : true);

    if (response.ok) {
      setMovies((prevMovies) =>
        stripDuplicates([
          ...prevMovies,
          ...withPostersOnly(response.data.results),
        ])
      );
    }
    setPagesLoaded(pagesLoaded + 1);
    setLoading(false);
  };

  return { movies, error, loading, requestNextPage };
}

//Takes array of objects and returns new array without duplicate entries.
function stripDuplicates(arr) {
  return [...new Set(arr.map((obj) => JSON.stringify(obj)))].map((str) =>
    JSON.parse(str)
  );
}

function withPostersOnly(movies) {
  return movies.filter((movie) => movie.poster_path);
}

export default useDiscoverApi;
