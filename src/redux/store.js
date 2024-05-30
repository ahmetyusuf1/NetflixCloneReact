import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
