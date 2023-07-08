import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { auth, db } from "./utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./styles/Game.css";
import logo from "./assets/logo.jpg";
import icon from "./assets/icon.jpg";
import { Link } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const gameDetails = location.state?.gameDetails;
  const [isAdded, setIsAdded] = useState(false);

  const addToWishlist = () => {
    alert("added");

    const currentUser = auth.currentUser.uid;

    addDoc(collection(db, currentUser), {
      gameDetails,
    });
  };

  const convert = (release_date) => {
    if (release_date == null) {
      return null;
    }

    const date = new Date(release_date * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year.toString()}`;

    return formattedDate;
  };

  let imageUrl = null;
  if (gameDetails.cover) {
    imageUrl =
      "https://images.igdb.com/igdb/image/upload/t_cover_big/" +
      gameDetails.cover.image_id +
      ".jpg";
  }

  return (
    <div className="game">
      <header>
        <div className="nav-container">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
            <Link to="/home" className="cc">
              CyberCrusaders
            </Link>
            <Link to="/Profile" className="Profile">
              {" "}
              Profile{" "}
            </Link>
          </div>
        </div>
      </header>
      <div className="gameDetails">
        <img src={imageUrl ? imageUrl : icon} alt="Product 1" />
        <div className="gameInfo">
          <h1>Summary</h1>
          <h3>{gameDetails.summary}</h3>
          <h2>Release Dates</h2>
          {gameDetails.first_release_date ? (
            <p>{convert(gameDetails.first_release_date)} </p>
          ) : (
            <p>No release dates available.</p>
          )}

          <h2>Platforms</h2>
          {gameDetails.platforms && gameDetails.platforms.length > 0 ? (
            <ul className="horizontal-list">
              {gameDetails.platforms.map((platform) => (
                <li>{platform.name}</li>
              ))}
            </ul>
          ) : (
            <p>No known information available.</p>
          )}

          <h2>Genres</h2>
          {gameDetails.genres && gameDetails.genres.length > 0 ? (
            <ul className="horizontal-list">
              {gameDetails.genres.map((genre) => (
                <li>{genre.name}</li>
              ))}
            </ul>
          ) : (
            <p>No known information available.</p>
          )}

          <button onClick={addToWishlist}> add to wishlist </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
