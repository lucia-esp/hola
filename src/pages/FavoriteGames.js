import React from "react";

import FavGame from "../components/FavGame";
import "./FavoriteGames.css";


const FavoriteGames = () => {
  return (
    <div className="FavoriteGames">
      <h1>my favorite games</h1>
      <FavGame
        title="999 Nine Doors Nine Hours Nine Persons"
        cover="https://upload.wikimedia.org/wikipedia/en/f/f1/Nine_Hours%2C_Nine_Persons%2C_Nine_Doors_Cover_Art.jpg"
        features={[
          "visual novel (so basically loads of text)",
          "puzzles",
          "multiple endings",
          "mystery!!!!!!",
        ]}
        rating="my rating would be a 10/10, i played this one multiple times and i never
        get tired of it"
      />
      <FavGame
        title="Hollow Knight"
        cover="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7EH0zNePRL9nLXmRjxCZ27Q47C86CsYKhVZbGEwZJ30OgmJ3s&usqp=CAU"
        features={[
          "it's very hard",
          "the soundtrack is incredible",
          "huge map",
          "cute",
        ]}
        rating="my rating would be a 9/10, I never thought I would finish a game like
        this, but i did it, and i loved it, and i wanna keep playing it"
      />

        <FavGame
          title="Phoenix Wright: Ace Attorney"
          cover= "https://vignette.wikia.nocookie.net/aceattorney/images/6/64/AA_cover_art.png/revision/latest?cb=20131229163641"
          features={[
            "yup, you're a lawyer. how fun!",
            "very cool and intriguing characters",
            "good soundtrack full of action",
          ]}
          rating="also a 10/10 don't attack me, i love this series so much"
      />

        <FavGame
          title="Silent Hill"
          cover="https://images-na.ssl-images-amazon.com/images/I/71tnmZY8w0L._AC_SL1102_.jpg"
          features={[
            "intense!",
            "good story and soundtrack",
            "lovely dogs",
          ]}
          rating="I would rate this a 9/10, I found the puzzles to be <em>really</em> easy, but still so much fun to play and to stress out!"
      />
   
        <FavGame
          title="Metal Gear Solid 2: Sons of Liberty"
          cover="https://images-na.ssl-images-amazon.com/images/I/51dOdVAk0zL.jpg"
          features={[
            "plot twisty",
            "fun stealth",
            "cool characters"
          ]}
          rating="yeah this is a 9/10, probably my favorite MGS and also the first one I ever played by myself!"
      />

      <FavGame
          title="Persona 3 Portable"
          cover="https://images-na.ssl-images-amazon.com/images/I/81yTRFRr23L._AC_SL1500_.jpg"
          features={[
            "good story, maybe a bit sad?",
            "you can play as a female character if you want!!",
            "cool combat and bosses",
          ]}
          rating="yes 9/10 my favorite persona so far"
      />
     
      <FavGame
        title="The Secret of Monkey Island"
        cover="https://en.wikipedia.org/wiki/The_Secret_of_Monkey_Island"
        features={[
          "so fun!",
          "point and click adventure",
          "lovely graphics",
        ]}
        rating="a 9/10 forever embedded in my memory"
      />
      
      <FavGame
        title="The Legend of Zelda: Wind Waker"
        cover="https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg"
        features={[
          "toon link",
          "good graphics",
          "cute chickens",
          "hmm, sailing? excuse meee?",
        ]}
        rating="9/10"
      />
     
      <FavGame
        title="Bioshock"
        cover="https://static.fnac-static.com/multimedia/Images/ES/NR/35/a3/04/303925/1540-6.jpg"
        features={[
          "amazing story",
          "kinda scary",
          "very fun!",
        ]}
        rating="9/10 I will always remember this one and is in my top 10 ps3 games ;)"
      />  

      <a href="#top">
        <p>top</p>
      </a>
    </div>
  );
};

export default FavoriteGames;
