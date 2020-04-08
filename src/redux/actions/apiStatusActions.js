import * as types from "./actionTypes";

export function startApiCall() {
  return { type: types.START_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}
