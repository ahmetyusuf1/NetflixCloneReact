import axios from "axios";
import { options } from "../../constants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPopular = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_MOVIES_LOADING });
  axios
    .get("/movie/popular", options)
    .then((response) =>
      dispatch({
        type: actionTypes.SET_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((error) =>
      dispatch({
        type: actionTypes.SET_MOVIES_ERROR,
        payload: error.message,
      })
    );
};

export const getGenres = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_GENRES_LOADING });
  axios
    .get("/genre/movie/list", options)
    .then((response) =>
      dispatch({ type: actionTypes.SET_GENRES, payload: response.data.genres })
    )
    .catch((error) =>
      dispatch({ type: actionTypes.SET_GENRES_ERROR, payload: error.message })
    );
};
