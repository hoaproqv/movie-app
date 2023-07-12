import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;

function ListMovies({ header, listType }) {
  const [scrollValue, setScrollValue] = useState(0);
  const btnLeft = (event) => {
    const divList = event.target.closest(".border").children[1];
    if (divList.scrollLeft > 0) {
      divList.scrollLeft -= 1000;
      setScrollValue(divList.scrollLeft - 1000);
    }
  };
  const btnRight = (event) => {
    const divList = event.target.closest(".border").children[1];
    if (divList.scrollLeft < divList.scrollWidth) {
      divList.scrollLeft += 1000;
      setScrollValue(divList.scrollLeft + 1000);
    }
  };

  return (
    <div>
      <p className="header">{header}</p>
      <div className="border">
        <div
          className="list-movies__btn"
          id="left"
          onClick={(event) => btnLeft(event)}
          style={scrollValue === 0 ? { display: "none" } : { display: "flex" }}
        >
          <i className="fal fa-chevron-left" />
        </div>
        <div className="list-movies">
          {listType?.map((movie, index) => (
            <div className="item" key={index}>
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
        <div
          className="list-movies__btn"
          id="right"
          onClick={(event) => btnRight(event)}
        >
          <i className="fal fa-chevron-right" />
        </div>
      </div>
    </div>
  );
}

export default ListMovies;
