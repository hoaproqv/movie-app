import React from "react";
import "./Genres.scss";
import { Link } from "react-router-dom";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;

function Genres({ genres, genresList }) {
  return (
    <div className="movie-genres">
      <p className="movie-genres__header">{genres}</p>
      <div className="movie-genres__list-movies">
        {genresList?.map((movie, index) => (
          <div className="item genres-movie" key={index}>
            <Link to={`${host}/watch/${movie.id}`}>
              <img
                className="item__poster"
                src={`${imageUrl}${movie["poster_path"]}`}
                alt=""
              />
            </Link>
            <div className="item__movie-controls">
              <Link to={`${host}/watch/${movie.id}`} className="item__play">
                <i className="fal fa-play"></i>
              </Link>
              <i className="fal fa-heart"></i>
              <i className="fal fa-download"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
