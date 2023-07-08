import { auth, db, storage } from "./utils/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "./styles/Profile.css";
import logo from "./assets/logo.jpg";
import edit from "./assets/edit.png";
import { Link } from "react-router-dom";
import plus from "./assets/plus.jpg";

const Profile = () => {
  const [list, setList] = useState([]);
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [name, setName] = useState("John Doe");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const inputRef = useRef(null);

  useEffect(() => {
    const dbRef = collection(db, auth.currentUser.uid);
    if (auth.currentUser?.photoURL) {
      setPhotoURL(auth.currentUser.photoURL);
    }
    const unsubscribe = onSnapshot(dbRef, (snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      setList(documents);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);

  const handlePicChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handlePicClick = () => {
    if (photo) {
      setLoading(true);
      const uploadTask = uploadBytes(storageRef, photo);
      uploadTask
        .then((snapshot) => {
          return getDownloadURL(storageRef);
        })
        .then((downloadURL) => {
          setPhotoURL(downloadURL);
          return updateProfile(auth.currentUser, { photoURL: downloadURL });
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error uploading profile picture:", error);
          setLoading(false);
        });
    }
  };

  const handleNameChange = () => {
    setEditingName(true);
    setNewName(auth.currentUser.displayName || "");
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      saveName();
    }
  };

  const saveName = () => {
    if (newName !== auth.currentUser.displayName) {
      updateProfile(auth.currentUser, { displayName: newName })
        .then(() => {
          console.log("Display name updated successfully.");
        })
        .catch((error) => {
          console.log("Error updating display name:", error);
        });
    }

    setEditingName(false);
    setName(newName);
  };

  const cancelNameChange = () => {
    setEditingName(false);
  };

  return (
    <div className="profilePage">
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
            <div className="profile-config">
              <div className="profile">
                <p>Profile</p>
                <img src={photoURL} alt="profile pic" />
                <img
                  src={plus}
                  alt="add"
                  className="add"
                  onClick={() => inputRef.current.click()}
                />
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handlePicChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <div className="profilepage-name">
                  {editingName ? (
                    <>
                      <h2> hello, </h2>
                      <input
                        type="text"
                        value={newName}
                        ref={inputRef}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                      />
                      <button onClick={saveName}>Save</button>
                      <button onClick={cancelNameChange}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <h2>hello, {name}</h2>
                      <img src={edit} alt="edit" onClick={handleNameChange} />
                    </>
                  )}
                </div>
              </div>
              <div className="profile-wishList">
                <h1> Wish List </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ul className="wishListGame">
        {list.map((game) => (
          <li key={game.gameDetails.name}>{game.gameDetails.name}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Profile;
