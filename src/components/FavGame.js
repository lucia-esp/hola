import React from "react";

import "./FavGame.css";

const FavGame = (props) => {
  const { title, cover, features, rating } = props;

  return (
    <div className="container">
        <div className="favgame-title">
        <p><strong>{title}</strong></p>
        </div>
        <div className="favgame-image">
      <img
        className="favgame-image"
        alt={title}
        src={cover}
        width="256"
        height="230"
      />
      </div>
    
      <div className="favgame-text-container">
        <ul>
          {features.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
        <p className="favgame-rating"><strong>{rating}</strong></p>
    </div>
  );
};

export default FavGame;
