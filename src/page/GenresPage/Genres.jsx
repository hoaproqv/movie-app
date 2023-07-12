import React from "react";
import "./Genres.scss";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;

function Genres({ genres, genresList }) {
  return (
    <div className="movie-genres">
      <p className="movie-genres__header">{genres}</p>
      <div className="movie-genres__list-movies">
        {genresList?.map((movie, index) => (
          <div className="item genres-movie" key={index}>
            <a href={`${host}/watch/${movie.id}`}>
              <img
                className="item__poster"
                src={`${imageUrl}${movie["poster_path"]}`}
                alt=""
              />
            </a>
            <div className="item__movie-controls">
              <a href={`${host}/watch/${movie.id}`} className="item__play">
                <i className="fal fa-play"></i>
              </a>
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
