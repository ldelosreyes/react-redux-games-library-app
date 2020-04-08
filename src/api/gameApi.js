import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/games/";

export function getGames() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveGame(game) {
  return fetch(baseUrl + (game.id || ""), {
    method: game.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(game)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGame(gameId) {
  return fetch(baseUrl + gameId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
