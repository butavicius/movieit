import api from "./client";

const endpoint = "/movie";

const details = (movieId) =>
  api.get(endpoint + "/" + movieId + "?append_to_response=videos,credits");

export default details;
