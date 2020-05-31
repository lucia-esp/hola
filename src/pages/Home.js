import React from "react";

import Nav from "../components/Nav";
import Introduction from "../components/Introduction";
import PlayingGames from "../components/PlayingGames";
import UpcomingGames from "../components/UpcomingGames";

import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <Nav />
      <Introduction />
      <PlayingGames />
      <UpcomingGames />
    </div>
  );
};

export default Home;
