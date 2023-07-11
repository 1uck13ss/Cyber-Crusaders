import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth, db } from "./utils/firebase.js";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  writeBatch,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import "./styles/Game.css";
import logo from "./assets/logo.jpg";
import icon from "./assets/icon.jpg";
import { Link } from "react-router-dom";
import Comment from "./Comment.js";

const Game = () => {
  const location = useLocation();
  const gameDetails = location.state?.gameDetails;
  const [isAdded, setIsAdded] = useState(false);
  const [name, setName] = useState("Guest");
  const [photoURL, setPhotoURL] = useState(
    "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
  );
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProfilePic = async () => {
      const storage = getStorage();
      const pic = ref(storage, "images/" + auth.currentUser.uid);
      try {
        const url = await getDownloadURL(pic);
        setPhotoURL(url);
      } catch (error) {
        console.log("No profile pic found");
      }
    };

    const fetchUserName = async () => {
      const username = collection(db, "user");
      const snapshot = await getDocs(username);
      snapshot.forEach((doc) => {
        if (doc.id === auth.currentUser.uid) {
          setName(doc.data().name);
        }
      });
    };

    const fetchComments = async () => {
      await getDocs();
    };

    fetchProfilePic();
    fetchUserName();
    setLoading(false);
  }, []);

  const onSubmit = async (text, setText) => {
    await setDoc(doc(db, "comments", gameDetails.id), {
      comment: text,
      name: name,
      photo: photoURL,
    });
    setText("");
  };

  const addToWishlist = async () => {
    const currentUser = auth.currentUser.uid;

    var dbRef = collection(db, currentUser);
    const gameQuery = query(
      dbRef,
      where("gameDetails.id", "==", gameDetails.id)
    );

    const querySnapshot = await getDocs(gameQuery);

    if (!querySnapshot.empty) {
      const batch = writeBatch(db);

      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
    } else {
      await addDoc(dbRef, { gameDetails });
    }
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
          <Comment onSubmit={onSubmit}></Comment>
        </div>
      </div>
    </div>
  );
};

export default Game;
