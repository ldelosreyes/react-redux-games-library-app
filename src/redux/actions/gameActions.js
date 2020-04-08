import * as actions from "./actionTypes";
import * as gameApi from "../../api/gameApi";
import { startApiCall, apiCallError } from "./apiStatusActions";

export const loadGamesSuccess = games => {
  return {
    type: actions.LOAD_GAMES_SUCCESS,
    games
  };
};

export const addGame = game => {
  return {
    type: actions.ADD_GAME_SUCCESS,
    game
  };
};

export const updateGame = game => {
  return {
    type: actions.UPDATE_GAME_SUCCESS,
    game
  };
};

export const deleteGame = game => {
  return {
    type: actions.DELETE_GAME,
    game
  };
};

export const loadGames = () => dispatch => {
  dispatch(startApiCall());
  return gameApi
    .getGames()
    .then(games => {
      dispatch(loadGamesSuccess(games));
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
};

export const saveGame = game => dispatch => {
  dispatch(startApiCall());
  return gameApi
    .saveGame(game)
    .then(savedGame => {
      game.id ? dispatch(updateGame(savedGame)) : dispatch(addGame(savedGame));
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
};

export const removeGame = game => dispatch => {
  dispatch(deleteGame(game));
  return gameApi.deleteGame(game.id);
};
