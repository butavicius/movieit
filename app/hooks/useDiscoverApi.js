import { useState, useEffect } from "react";

import discoverApi from "../api/discover";

function useDiscoverApi(sorting, genreId) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagesLoaded, setPagesLoaded] = useState(0);

  useEffect(() => {
    if (movies.length === 0) {
      requestNextPage();
    }
  }, [movies]);

  //Reset loaded movies when params change
  useEffect(() => {
    setMovies([]);
    setPagesLoaded(0);
  }, [genreId, sorting]);

  const requestNextPage = async () => {
    //abort if still loading previous request
    if (loading) return;

    const allParams = {
      sort_by: sorting,
      page: pagesLoaded + 1,
      "vote_count.gte": 2,
    };

    if (genreId) allParams.with_genres = genreId.toString();

    setLoading(true);
    const response = await discoverApi(allParams);
    setError(response.ok ? false : true);

    if (response.ok) {
      setMovies((prevMovies) =>
        stripDuplicates([
          ...prevMovies,
          ...withPostersOnly(response.data.results),
        ])
      );
    }
    setPagesLoaded((pagesLoaded) => pagesLoaded + 1);
    setLoading(false);
  };

  return { movies, error, loading, requestNextPage };
}

/* Takes array of objects and returns new array without duplicate entries. This
 * is needed because moviedb API gives inconsistent results across requests with
 * sort_by:release_date.desc parameter.
 */

function stripDuplicates(arr) {
  return [...new Set(arr.map((obj) => JSON.stringify(obj)))].map((str) =>
    JSON.parse(str)
  );
}

function withPostersOnly(movies) {
  return movies.filter((movie) => movie.poster_path);
}

export default useDiscoverApi;
