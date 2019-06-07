import api from "../api";

export const ADD_GAME = "ADD_GAME";
export const STORE_GAMES = "STORE_GAMES";

export const addGame = title => async dispatch => {
  const game = {
    type: "games",
    attributes: { title }
  };
  const { data: responseBody } = await api.post("/games", { data: game });
  dispatch({
    type: ADD_GAME,
    game: responseBody.data
  });
};

export const loadGames = () => async dispatch => {
  const { data: responseBody } = await api.get("/games");
  dispatch({
    type: STORE_GAMES,
    games: responseBody.data
  });
};
