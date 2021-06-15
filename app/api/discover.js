import api from "./client";

const endpoint = "/discover/movie?";

const discover = (params = {}) => {
  const query = new URLSearchParams();
  for (const prop in params) {
    query.append(prop, params[prop]);
  }
  return api.get(endpoint + query.toString());
};

export default discover;
