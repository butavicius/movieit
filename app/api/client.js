import { create } from "apisauce";
import API_TOKEN from "./apiToken";
import config from "./config";

const api = create({
  baseURL: config.API_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: "Bearer " + API_TOKEN,
  },
});

export default api;
