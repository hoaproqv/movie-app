import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../HomePage/Banner";
import ListFilter from "../GenresPage/ListFilter";

function ListFavorite({ data }) {
  return (
    <div
      style={
        data.length
          ? {}
          : {
              backgroundImage: "url('../images/backgroundNetflix.jpeg')",
              width: "100vw",
              height: "100vh",
            }
      }
    >
      <Header />
      {data.length ? (
        <>
          <Banner listMovie={data} />
          <ListFilter title={"My List"} listFilter={data} />
        </>
      ) : (
        <>
          <div className="hero__bg-overlay"></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "100px",
            }}
          >
            No movie
          </div>
        </>
      )}
    </div>
  );
}

export default ListFavorite;
