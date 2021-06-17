import { useState, useEffect } from "react";

import detailsApi from "../api/details";

function useDetailsApi(movieId) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request(movieId);
  }, []);

  const request = async (...args) => {
    setLoading(true);
    const response = await detailsApi(...args);
    setError(response.ok ? false : true);
    if (response.ok) {
      setMovie(response.data);
    }
    setLoading(false);
  };

  return { movie, error, loading, request };
}

export default useDetailsApi;
