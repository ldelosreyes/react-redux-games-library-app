import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == types.START_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    action.type.includes("_SUCCESS")
  ) {
    return state - 1;
  }

  return state;
}
