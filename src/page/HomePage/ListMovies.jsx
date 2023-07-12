import React from "react";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;

function ListMovies({ header, listType }) {
  return (
    <div>
      <p className="header">{header}</p>
      <div className="list-movies">
        {listType?.map((movie, index) => (
          <div className="item" key={index}>
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

export default ListMovies;
