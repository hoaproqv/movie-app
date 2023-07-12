import React from "react";
import Circle from "./Circle";
const imageUrl = process.env.REACT_APP_IMAGE_URL;

function Content({ data }) {
  const bgImageUrl = data?.["backdrop_path"];
  const posterUrl = data?.["poster_path"];
  const genres = data?.genres.map((item) => item.name);
  const releaseDate = data?.["release_date"];
  const runtime = `${Math.floor(data?.runtime / 60)}h${Math.floor(
    data?.runtime % 60,
  )}m`;
  const point = data?.["vote_average"].toFixed(2);
  const pdCompany = data?.["production_companies"][0];
  const logoCompany = pdCompany?.["logo_path"];
  const nameCompany = pdCompany?.name;

  return (
    <div className="wrapper">
      <div
        className="content"
        style={{
          backgroundImage: `url(${imageUrl}${bgImageUrl})`,
        }}
      >
        <div className="content__overlay"></div>
        <div className="content__detail">
          <img
            src={`${imageUrl}${posterUrl}`}
            alt=""
            className="content__poster"
          />
          <div className="content__info">
            <h1 className="content__title">{data?.title || data?.name}</h1>
            <p>
              {releaseDate} ― {runtime}
            </p>
            <p className="content__genres"> {genres?.join(", ")} </p>
            <p className="content__description">{data?.overview}</p>
            <div className="content__rate">
              <span>Rating:</span>
              <Circle point={point} />
            </div>
            <div className="content__company">
              <p style={{ fontSize: "22px" }}>{nameCompany}</p>
              <img
                src={logoCompany ? `${imageUrl}${logoCompany}` : ""}
                alt="Logo Company"
                className="content__logo-cp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
