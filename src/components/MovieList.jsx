import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgURL, options } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="px-4 py-5">
      <h2 className="mb-4">{genre.name}</h2>
      <Splide
        options={{ rewind: true, autoWidth: true, pagination: false, gap: 20 }}
      >
        {movies?.map((movie, i) => (
          <SplideSlide key={i}>
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`${baseImgURL}${movie.poster_path}`}
                className="card-img"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
