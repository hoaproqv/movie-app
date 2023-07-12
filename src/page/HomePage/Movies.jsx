import React from "react";
import "./Movies.scss";
import useMovieList from "../../hook/useMovieList";
import ListMovies from "./ListMovies";
import useTrending from "../../hook/useTrending";

function Movies() {
  const [trending] = useTrending("day");
  const [nowPlaying] = useMovieList("now_playing");
  const [popular] = useMovieList("popular");
  const [topRated] = useMovieList("top_rated");
  const [upComing] = useMovieList("upcoming");
  return (
    <div className="movie">
      <ListMovies header="Trending Movies" listType={trending} />
      <ListMovies header="Now Playing" listType={nowPlaying} />
      <ListMovies header="Popular" listType={popular} />
      <ListMovies header="Top Rated" listType={topRated} />
      <ListMovies header="Coming Soon" listType={upComing} />
    </div>
  );
}

export default Movies;
