import * as types from "./actionTypes";
import * as developerApi from "../../api/developerApi";
import { startApiCall, apiCallError } from "./apiStatusActions";

export const loadDevelopersSuccess = developers => {
  return {
    type: types.LOAD_DEVELOPERS_SUCCESS,
    developers
  };
};

export const loadDevelopers = () => dispatch => {
  dispatch(startApiCall());
  return developerApi
    .getDevelopers()
    .then(authors => {
      dispatch(loadDevelopersSuccess(authors));
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
};
