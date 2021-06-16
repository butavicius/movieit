import { useState, useEffect } from "react";
import details from "../api/details";

function useDetailsApi(movieId) {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    setLoading(true);
    const response = await details(movieId);
    setError(response.ok ? false : true);

    if (response.ok) {
      setMovie(response.data);
    }
    setLoading(false);
  };

  return { movie, error, loading, request };
}

export default useDetailsApi;
