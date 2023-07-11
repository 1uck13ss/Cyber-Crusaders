import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/App.css";
import footerlogo from "./assets/footerlogo.jpg";
import joystick from "./assets/joystick.jpg";
import Card from "./Card";
import Pagination from "./Pagination";
import Genre from "./Genre";
import Platform from "./Platform";
import { motion, AnimatePresence, color } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const App = () => {
  const [gameList, setGameList] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [currentPage, setCurrent] = useState(1);
  const [original, setOriginal] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [recordsPerPage] = useState(10);
  const [user] = useAuthState(auth);
  const [emailSubscribed, setEmailSubscribed] = useState(false); // Track email subscription status

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    window.location.reload();
  };

  const handleEmailSubscription = () => {
    setEmailSubscribed(true);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    const updateGameList = () => {
      let filteredGames = original;
      if (platforms) {
        filteredGames = original.filter((game) => {
          return (
            game.platforms &&
            platforms.every((filter) => {
              return game.platforms.some((platform) => {
                return (
                  platform.name.toLowerCase().indexOf(filter.toLowerCase()) !==
                  -1
                );
              });
            })
          );
        });
      }
      if (genres) {
        filteredGames = filteredGames.filter((game) => {
          return (
            game.genres &&
            genres.every((filter) => {
              return game.genres.some((genre) => genre.name === filter);
            })
          );
        });
      }
      setGameList(filteredGames);
    };

    updateGameList();
  }, [original, platforms, genres]);

  const fetchInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "e0kFMFio5QaHanAseqBII1Shr66hKS9n7uDXJHvh");
    myHeaders.append("Content-Type", "text/plain");

    const currentDate = Math.floor(Date.now() / 1000);

    var raw = `fields name, first_release_date, cover.image_id, genres.name, platforms.name, summary,
    release_dates;
      where first_release_date > ${currentDate};
      limit 19;
      sort first_release_date asc;`;

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://yzyuo634g3.execute-api.us-west-2.amazonaws.com/production/v4/games",
        requestOptions
      );
      const responseJson = await response.json();
      setGameList(responseJson);
      setOriginal(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  const filterCondition = (filter, type) => {
    if (type && (!genres || !genres.includes(filter))) {
      setGenres([...genres, filter]);
      return true;
    } else if (
      !type &&
      (!platforms ||
        platforms.every(
          (platform) =>
            filter.toLowerCase().indexOf(platform.toLowerCase()) === -1
        ))
    ) {
      setPlatforms([...platforms, filter]);
      return true;
    } else if (type) {
      setGenres(genres.filter((g) => g !== filter));
      return false;
    } else {
      setPlatforms(
        platforms.filter(
          (p) => filter.toLowerCase().indexOf(p.toLowerCase()) === -1
        )
      );
      return false;
    }
  };

  const paginate = (pageNumber) => {
    setCurrent(pageNumber);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = gameList.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="App">
      <header>
        <div className="nav-container">
          <div className="logo">
            <a className="cc">CyberCrusaders</a>
            <div className="user-container">
              <div className="emailname">
                {user && <span>Hello {user.email}</span>}
              </div>
              <div className="profile">
                <Link to="/Profile" className="Profile">
                  My Profile
                </Link>
              </div>
              <button onClick={handleLogout} className="logout-button">
                Log out
              </button>
            </div>
          </div>
          <nav>
            <Platform filterByPlatform={filterCondition} />
          </nav>
        </div>
      </header>

      <main>
        <div className="body-container">
          <div className="genre-container">
            <Genre filterByGenres={filterCondition} />
          </div>
          {/* fields name, release_dates, screenshots, prices */}
          <motion.div layout className="product-container">
            <AnimatePresence>
              {currentRecords.map((game) => (
                <div
                  key={game.id}
                  onClick={() =>
                    navigate(`/Game/${game.id}`, {
                      state: { gameDetails: game },
                    })
                  }
                >
                  <Card
                    name={game.name}
                    first_release_date={game.first_release_date}
                    cover={game.cover ? game.cover.image_id : null}
                  />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <div className="pagination">
        <Pagination
          current={currentPage}
          posts={recordsPerPage}
          total={gameList.length}
          paginate={paginate}
        />
      </div>

      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a className="logo">
                <img
                  src={footerlogo}
                  width="75"
                  height="75"
                  loading="lazy"
                  alt="CC logo"
                />
              </a>
              <p className="footer-text"></p>
              <div className="social-media">
                <a href="https://www.linkedin.com/">
                  <font color="#007cc4">
                    <i className="fab fa-linkedin"></i>
                  </font>
                </a>
                <a href="https://github.com/1uck13ss/Cyber-Crusaders">
                  <font color="#007cc4">
                    <i className="fab fa-github"></i>
                  </font>
                </a>
                <a href="https://t.me/kahjyun">
                  <font color="#007cc4">
                    <i className="fab fa-telegram"></i>
                  </font>
                </a>
              </div>
            </div>
            <div className="footer-list-img">
              <img src={joystick} alt="logo" />
            </div>
            <div className="footer-list">
              <p className="title footer-list-title has-after">Contact Us</p>
              <div className="contact-item">
                <span className="span">Location:</span>
                <address className="contact-link">
                  National University of Singapore, 21 Lower Kent Ridge Rd
                </address>
              </div>
              <div className="contact-item">
                <span className="span">Join Us:</span>
                <a href="mailto:e0941187@u.nus.edu" className="contact-link">
                  Lim Jun Ming
                </a>
                <br></br>
                <a href="mailto:e0959239@u.nus.edu" className="contact-link">
                  Pung Kah Jyun
                </a>
              </div>
            </div>
            <div className="footer-list">
              <p className="title footer-list-title has-after">
                Games Updates Signup
              </p>
              {emailSubscribed ? (
                <p className="subscription"> Thank you for subscribing! :)</p>
              ) : (
                <form
                  onSubmit={handleEmailSubscription}
                  method="get"
                  className="footer-form"
                >
                  <input
                    type="email"
                    name="email_address"
                    required
                    placeholder="Your Email"
                    autocomplete="off"
                    className="input-field"
                  />
                  <br />
                  <button type="submit" className="btn" data-btn>
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2023 CyberCrusaders All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
