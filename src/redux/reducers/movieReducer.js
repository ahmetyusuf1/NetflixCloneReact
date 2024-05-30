import { actionTypes } from "../actionTypes";

const initalState = {
  popularMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIES_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.SET_MOVIES_ERROR:
      return { ...state, isLoading: false, isError: payload };
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularMovies: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
