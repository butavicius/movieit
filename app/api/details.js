import api from "./client";

const endpoint = "/movie";

const details = (movieId) => api.get(endpoint + "/" + movieId);

export default details;
