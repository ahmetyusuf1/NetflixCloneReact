import { useSelector } from "react-redux";
import Loading from "./Loading";
import { baseImgURL } from "../constants";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Hero = () => {
  const state = useSelector((store) => store.movie);

  const index = Math.round(Math.random() * state.popularMovies.length);

  const randomMovie = state.popularMovies[index];

  return (
    <div className="hero row p-4">
      {!randomMovie ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-7 d-flex flex-column align-items-center justify-content-center gap-2">
            <h1>{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p className="lead">
              <span>IMDB:</span>
              <span className="text-warning mx-2">
                {Math.floor(randomMovie.vote_average * 10) / 10}
              </span>
            </p>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-danger d-flex align-items-center">
                <span>Watch Movie</span> <IoIosArrowForward />
              </button>
              <button className="btn btn-danger d-flex align-items-center gap-1">
                <span>Add List</span> <FaBars />
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={`${baseImgURL}${randomMovie.backdrop_path}`}
              className="img-fluid rounded my-4"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
