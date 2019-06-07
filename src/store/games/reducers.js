import { combineReducers } from "redux";
import { ADD_GAME, STORE_GAMES } from "./actions";

export function games(state = [], action) {
  switch (action.type) {
    case ADD_GAME:
      return [action.game, ...state];
    case STORE_GAMES:
      return action.games;
    default:
      return state;
  }
}

export default combineReducers({
  games
});
