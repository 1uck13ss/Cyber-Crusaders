import React, { useEffect, useState } from "react";
import "./styles/App.css";
import logo from "./assets/logo.jpg";
import footerlogo from "./assets/footerlogo.jpg";
import joystick from "./assets/joystick.jpg";
import Card from "./Card";
import Pagination from "./Pagination";
import Genre from "./Genre";

const App = () => {
  const [gameList, setGameList] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [currentPage, setCurrent] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const paginate = (pageNumber) => {
    setCurrent(pageNumber);
  };

  const filterByGenres = (genre) => {
    const filteredGames = gameList.filter((game) => {
      console.log(game.genres);
      return game.genres && game.genres.some((g) => g.name === genre);
    });
    setGameList(filteredGames);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "e0kFMFio5QaHanAseqBII1Shr66hKS9n7uDXJHvh");
    myHeaders.append("Content-Type", "text/plain");

    const currentDate = Math.floor(Date.now() / 1000);                                   

    var raw = `fields name, first_release_date, cover.image_id, genres.name;
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
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  const currentRecords = gameList.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="App">
      <header>
        <div className="nav-container">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
            <a href="index.html" className="cc">
              CyberCrusaders
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a className="active" href="#">
                  Nintendo
                </a>
              </li>
              <li>
                <a href="#">Playstation</a>
              </li>
              <li>
                <a href="#">XBox</a>
              </li>
              <li>
                <a href="#">PC</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="body-container">
          <div className="genre-container">
            <Genre filterByGenres={filterByGenres} />
          </div>
          {/* fields name, release_dates, screenshots, prices */}
          <div className="product-container">
            {currentRecords.map((game) => (
              <Card
                key={game.id}
                name={game.name}
                first_release_date={game.first_release_date}
                cover={game.cover ? game.cover.image_id : null}
              />
            ))}
          </div>
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
              <a href="#" className="logo">
                <img
                  src={footerlogo}
                  width="75"
                  height="75"
                  loading="lazy"
                  alt="CC logo"
                />
              </a>
              <p className="footer-text">CyberCrusaders team details</p>
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
                  National University of Singapore, xxx kent ridge
                </address>
              </div>
              <div className="contact-item">
                <span className="span">Join Us:</span>
                <a href="mailto:e0941187@u.nus.edu" className="contact-link">
                  Lim Jun Ming
                </a>
                ,
                <a href="mailto:e0959239@u.nus.edu" className="contact-link">
                  Pung Kah Jyun
                </a>
              </div>
            </div>
            <div className="footer-list">
              <p className="title footer-list-title has-after">
                Games Updates Signup
              </p>
              <form action="./index.html" method="get" className="footer-form">
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
