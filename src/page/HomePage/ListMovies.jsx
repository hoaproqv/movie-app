import React from "react";
import { Link } from "react-router-dom";
const imageUrl = process.env.REACT_APP_IMAGE_URL;

function ListMovies({ header, listType }) {
  return (
    <div>
      <p className="header">{header}</p>
      <div className="list-movies">
        {listType?.map((movie, index) => (
          <div className="item" key={index}>
            <Link to={`/watch/${movie.id}`}>
              <img
                className="item__poster"
                src={`${imageUrl}${movie["poster_path"]}`}
                alt=""
              />
            </Link>
            <div className="item__movie-controls">
              <a href={`/watch/${movie.id}`} className="item__play">
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
