import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import ListFilter from "./ListFilter";
import useGenresMovie from "../../hook/useGenresMovie";
import Banner from "../HomePage/Banner";
import useGenresResult from "../../hook/useGenresResult";
import useGenresTv from "../../hook/useGenresTv";
import Footer from "../../components/Footer";

function GenresPage() {
  const { genres } = useParams();
  const [genresMovieList] = useGenresMovie();
  const [genresTvList] = useGenresTv();
  const genresList = genresMovieList?.concat(genresTvList);
  const navigate = useNavigate();
  const genresResult = genresList?.find(
    (genresItem) => genresItem.name === genres,
  );
  const idGenres = genresResult?.id;
  const [genresListResult] = useGenresResult(idGenres);
  if (genresListResult?.length === 0) {
    navigate(`/watch`);
  }
  return (
    <div>
      <Header />
      <Banner listMovie={genresListResult} />
      <ListFilter title={genres} listFilter={genresListResult} />
      <Footer />
    </div>
  );
}

export default GenresPage;
