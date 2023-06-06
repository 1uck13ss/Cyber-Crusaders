import React, { useEffect, useState } from "react";
import "./styles/App.css";
import logo from "./assets/logo.jpg";
import footerlogo from "./assets/footerlogo.jpg";
import Card from "./Card";

const App = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "e0kFMFio5QaHanAseqBII1Shr66hKS9n7uDXJHvh");
    myHeaders.append("Content-Type", "text/plain");

    var raw =
      'fields name, first_release_date, cover.image_id, cover.width, cover.height; limit 8; search "halo";';

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
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className="genre-list">
            <ul>
              <div className="genre">Genre</div>
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Fighting</a>
              </li>
              <li>
                <a href="#">Casual</a>
              </li>
              <li>
                <a href="#">Fighting</a>
              </li>
              <li>
                <a href="#">Multiplayer</a>
              </li>
              <li>
                <a href="#">RPG</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Strategy</a>
              </li>
            </ul>
          </div>
          {/* fields name, release_dates, screenshots, prices */}
          <div className="product-container">
            {gameList.map((game) => (
              <Card
                key={game.id}
                name={game.name}
                first_release_date={game.first_release_date}
                cover={game.cover.image_id}
              />
            ))}
          </div>
        </div>
      </main>

      <div className="pagination">
        <a href="#" className="pagination-item">
          &laquo;
        </a>
        <a href="#" className="pagination-item">
          &lsaquo;
        </a>
        <a href="#" className="pagination-item active">
          1
        </a>
        <a href="#" className="pagination-item">
          2
        </a>
        <a href="#" className="pagination-item">
          3
        </a>
        <a href="#" className="pagination-item">
          &rsaquo;
        </a>
        <a href="#" className="pagination-item">
          &raquo;
        </a>
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
            <div className="footer-list">
              <p className="title footer-list-title has-after">Useful Links</p>
              <ul>
                <li>
                  <a href="#" className="footer-link">
                    Nintendo
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Playstation
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    XBox
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    PC
                  </a>
                </li>
              </ul>
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
