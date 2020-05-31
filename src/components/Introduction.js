import React from "react";
import luchiKnight from "../images/lunight.png";

const Introduction = () => {
  return (
    <div>
      <div class="bh">
        <h1>luchi y sus juegos</h1>
      </div>
      <h2 id="subh">me gusta jugar en fácil y no llorar en el intento</h2>
      <img
        src={luchiKnight}
        alt="A cartoon version of me (as Knight) holding a Nintendo Switch Neon"
      ></img>
    </div>
  );
};

export default Introduction;
