import React from "react";
import "./Genres.scss";
import { Link } from "react-router-dom";
import { saveMyList } from "../../function/saveMyList";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;

function ListFilter({ title, listFilter }) {
  return (
    <div className="movie-genres">
      <p className="movie-genres__header">{title}</p>
      <div className="movie-genres__list-movies">
        {listFilter?.map((movie, index) => (
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
              <i
                className="fal fa-heart"
                onClick={(event) => {
                  saveMyList(event);
                }}
                data={`{"id": "${movie.id}","poster_path": "${movie["poster_path"]}","title": "${movie.title}","overview": "${movie.overview}","backdrop_path":"${movie["backdrop_path"]}"}`}
              ></i>
              <i className="fal fa-download" data={`${movie.id}`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListFilter;
