import * as types from "../actions";
import initialState from "./initialState";

export default function gameReducer(state = initialState.games, action) {
  switch (action.type) {
    case types.ADD_GAME_SUCCESS:
      return [...state, { ...action.game }];
    case types.UPDATE_GAME_SUCCESS:
      return state.map(game =>
        game.id === action.game.id ? action.game : game
      );
    case types.LOAD_GAMES_SUCCESS:
      return action.games;
    case types.DELETE_GAME:
      return state.filter(game => game.id !== action.game.id);
    default:
      return state;
  }
}
