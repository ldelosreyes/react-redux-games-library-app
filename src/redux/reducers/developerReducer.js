import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function developerReducer(
  state = initialState.developers,
  action
) {
  switch (action.type) {
    case types.LOAD_DEVELOPERS_SUCCESS:
      return action.developers;
    default:
      return state;
  }
}
