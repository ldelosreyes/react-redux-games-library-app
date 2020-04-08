import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/developers/";

export function getDevelopers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
