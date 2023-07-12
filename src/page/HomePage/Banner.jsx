import React from "react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";
const imageBg = process.env.REACT_APP_IMAGE_URL;

function Banner({ listMovie }) {
  const navigate = useNavigate();
  const banner = listMovie?.[Math.floor(Math.random() * listMovie.length)];
  const bgImageUrl = banner?.["backdrop_path"];
  const id = banner?.id;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageBg}${bgImageUrl})`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{banner?.title || banner?.name}</h1>
        <p className="banner__description">{banner?.overview}</p>
        <div className="banner__btn-group">
          <button
            className="banner__btn banner__play "
            onClick={() => navigate(`/watch/${id}`)}
          >
            <i className="fa fa-play"></i>
            Play
          </button>
          <button
            className="banner__btn banner__more-info"
            onClick={() => navigate(`/watch/${id}`)}
          >
            <i className="fal fa-info-circle"></i>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
