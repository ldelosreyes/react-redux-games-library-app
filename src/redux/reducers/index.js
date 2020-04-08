import { combineReducers } from "redux";
import games from "./gameReducer";
import developers from "./developerReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  games,
  developers,
  apiCallsInProgress
});

export default rootReducer;
