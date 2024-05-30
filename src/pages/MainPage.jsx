import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPopular } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.genre);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {state.isLoading ? (
        <div className="spinner-border" role="status"></div>
      ) : state.isError ? (
        <p>Error!</p>
      ) : (
        state.genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default MainPage;
