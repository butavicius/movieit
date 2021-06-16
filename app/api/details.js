import api from "./client";

const endpoint = "/discover/movie";

const details = (movieId) => api.get(endpoint + "/" + movieId);

export default details;
