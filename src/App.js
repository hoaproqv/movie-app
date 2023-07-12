import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";
import useGenresMovie from "./hook/useGenresMovie";
import useGenresTv from "./hook/useGenresTv";
import GenresPage from "./page/GenresPage/GenresPage";

export const ContextValues = createContext();

function App() {
  const [dataUser, setDataUser] = useState(null);
  const [genresMovie] = useGenresMovie();
  const [genresTv] = useGenresTv();

  return (
    <ContextValues.Provider
      value={{
        dataUser,
        setDataUser,
        genresMovie,
        genresTv,
      }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/watch" element={<HomePage />} />
        <Route path="/watch/:id" element={<DetailPage />} />
        <Route path="/watch/genres/:genres" element={<GenresPage />} />
      </Routes>
    </ContextValues.Provider>
  );
}

export default App;
