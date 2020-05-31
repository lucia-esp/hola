import React from "react";

import "./FavGame.css";

const FavGame = (props) => {
  const { title, cover, features, rating } = props;

  return (
    <div>
      <p className="favgame-title">
        <strong>{title}</strong>
      </p>
      <img
        className="favgame-image"
        alt={title}
        src={cover}
        width="300"
        height="300"
      />
      <div>
        <ul>
          {features.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <p className="favgame-rating">{rating}</p>
    </div>
  );
};

export default FavGame;
