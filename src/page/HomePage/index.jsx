import React from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "./Banner.jsx";
import Movies from "./Movies.jsx";
import Footer from "../../components/Footer/index.jsx";
import useTrending from "../../hook/useTrending.js";
function HomePage() {
  const [trendingList] = useTrending("week");

  return (
    <div className="watch">
      <Header />
      <Banner listMovie={trendingList} />
      <Movies />
      <Footer />
    </div>
  );
}

export default HomePage;
