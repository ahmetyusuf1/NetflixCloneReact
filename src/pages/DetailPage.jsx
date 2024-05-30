import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseImgURL, options } from "../constants";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const DetailPage = () => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `/movie/${id}?append_to_response=credits%2C%20videos&language=en-US`,
        options
      )
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(movie);

  return (
    <div className="row">
      {!movie ? (
        <div className="text-center my-4">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <>
          <div className="col-12 banner mb-5">
            <img
              src={`${baseImgURL}${movie.backdrop_path}`}
              className="w-100 h-100 object-fit-cover"
            />
            <div className="banner-bg">
              <span>{movie.title}</span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
              <button className="btn btn-outline-danger d-flex align-items-center">
                <span>Watch Movie</span> <IoIosArrowForward />
              </button>
              <button className="btn btn-danger d-flex align-items-center gap-1">
                <span>Add List</span> <FaBars />
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-4 p-4">
            <h3>Production Companies</h3>
            <div className="d-flex flex-wrap gap-4 mb-4">
              {movie?.production_companies?.map((company, i) => (
                <div
                  key={i}
                  className="bg-light p-2 rounded d-flex align-items-center"
                >
                  {company.logo_path ? (
                    <img
                      src={`${baseImgURL}${company.logo_path}`}
                      className="object-fit-contain"
                      style={{ width: 100, height: 50 }}
                    />
                  ) : (
                    <span className="text-dark">{company.name}</span>
                  )}
                </div>
              ))}
            </div>
            <h3>Spoken Languages</h3>
            <div className="d-flex flex-wrap gap-4 mb-4">
              {movie?.spoken_languages?.map((language, i) => (
                <div
                  key={i}
                  className="bg-light rounded d-flex align-items-center p-2"
                >
                  <span className="text-dark">{language.english_name}</span>
                </div>
              ))}
            </div>
            <h3>Production Countries</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie?.production_countries?.map((country, i) => (
                <div
                  key={i}
                  className="bg-light rounded d-flex align-items-center p-2"
                >
                  <span className="text-dark">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-4 p-4 d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-2">
              <h3>Overview</h3>
              <p className="lead text-secondary fs-5">{movie?.overview}</p>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <span>Budget:</span>
                {movie.budget ? (
                  <span>{millify(movie.budget)} $</span>
                ) : (
                  <span>Not Shared</span>
                )}
              </div>
              <div className="d-flex align-items-center gap-2">
                <span>Revenue:</span>
                {movie.revenue ? (
                  <span>{millify(movie.revenue)} $</span>
                ) : (
                  <span>Not Shared</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 p-4 my-3">
            <h2>Actors and Actresses</h2>
            <Splide
              options={{
                height: 200,
                gap: 10,
                pagination: false,
                autoWidth: true,
              }}
            >
              {movie?.credits?.cast?.map((a, i) => (
                <SplideSlide key={i}>
                  <div className="actor-card h-100">
                    <img
                      src={
                        a.profile_path
                          ? `${baseImgURL}${a.profile_path}`
                          : "/default.jpeg"
                      }
                      className="card-img"
                    />
                    <p>
                      <span>{a.character}</span>
                      <span>{a.name}</span>
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
