import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContextValues } from "../../App";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { HeaderScroll } from "./HeaderScroll";
import useSearch from "../../hook/useSearch";
const imageUrl = process.env.REACT_APP_IMAGE_URL;
const host = window.location.origin;
const imagePath = process.env.PUBLIC_URL + "/images/netflix-logo.png";
const logoPath = process.env.PUBLIC_URL + "/images/avatar.png";

function Header() {
  HeaderScroll();
  const { dataUser, genresMovie, genresTv } = useContext(ContextValues);
  const [searchText, setSearchText] = useState("");
  const [searchMovie] = useSearch(searchText);
  const genresM = genresMovie?.map((genres) => genres.name);
  const genresT = genresTv?.map((genres) => genres.name);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left-part">
        <Link to="/watch" style={{ height: "30px" }}>
          <img src={imagePath} alt="" width="100px" />
        </Link>

        <nav>
          <ul className="left-part__nav">
            <li>
              <Link to="/watch">Home</Link>
            </li>
            <li>
              <Link to="#">TV Show</Link>
              <div className="nav__list">
                {genresT?.map((genres, index) => (
                  <div key={index} className="genres">
                    <Link to={`${host}/watch/genres/${genres}`}>{genres}</Link>
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Link to="#">Movie</Link>
              <div className="nav__list">
                {genresM?.map((genres, index) => (
                  <div key={index} className="genres">
                    <Link to={`${host}/watch/genres/${genres}`}>{genres}</Link>
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Link to="#">New & Popular</Link>
            </li>
            <li>
              <Link to="#">My List</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right-part">
        <div className="right-part__search">
          <SearchIcon className="right-part__search-icon" />
          <input
            className="right-part__search-input"
            type="text"
            placeholder="Title,..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <div
            className="listSearchMovie"
            style={{ height: searchText ? "373px" : "0px" }}
          >
            {searchMovie?.map((movie, index) => (
              <div key={index} className="listSearchMovie__movieSearch">
                <img
                  src={`${imageUrl}${movie["poster_path"]}`}
                  alt=""
                  style={{ borderRadius: "3px" }}
                />
                <a
                  className="listSearchMovie__movie"
                  href={`${host}/watch/${movie.id}`}
                >
                  <p className="title">{movie.title}</p>
                  <p className="date">Release date: {movie["release_date"]}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="right-part__account">
          <img
            src={logoPath}
            alt=""
            className="right-part__avatar"
            width={"30px"}
          />
          <span>{dataUser?.username || "User1"}</span>
        </div>
        <button className="right-part__logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
