import React from 'react';
import './styles/App.css';
import logo from './assets/logo.jpg';
import footerlogo from './assets/footerlogo.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-container">
          <div className="logo">
            <img src= {logo} alt="logo" style={{ width: '30px', height: '30px' }} />
            <a href="index.html" className="cc">CyberCrusaders</a>
          </div>
          <nav>
            <ul>
              <li><a className="active" href="#">Nintendo</a></li>
              <li><a href="#">Playstation</a></li>
              <li><a href="#">XBox</a></li>
              <li><a href="#">PC</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="body-container">
          <div className="genre-list">
            <ul>
              <div className="genre">
                Genre
              </div>
              <li><a href="#">Action</a></li>
              <li><a href="#">Adventure</a></li>
              <li><a href="#">Fighting</a></li>
              <li><a href="#">Casual</a></li>
              <li><a href="#">Fighting</a></li>
              <li><a href="#">Multiplayer</a></li>
              <li><a href="#">RPG</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Strategy</a></li>
            </ul>
          </div>
          <div className="product-container">
            <div className="product-row">
              <div className="product-item" data-genre="action">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 1" />
                <div className="product-info">
                  <h3>Product 1</h3>
                  <p>$20.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="adventure">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 2" />
                <div className="product-info">
                  <h3>Product 2</h3>
                  <p>$25.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="fighting">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 3" />
                <div className="product-info">
                  <h3>Product 3</h3>
                  <p>$30.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="action">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 4" />
                <div className="product-info">
                  <h3>Product 4</h3>
                  <p>$35.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="adventure">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 8" />
                <div className="product-info">
                  <h3>Product 8</h3>
                  <p>$55.00</p>
                </div>
              </div>
            </div>
            <div className="product-row">
              <div className="product-item" data-genre="adventure">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 5" />
                <div className="product-info">
                  <h3>Product 5</h3>
                  <p>$40.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="fighting">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 6" />
                <div className="product-info">
                  <h3>Product 6</h3>
                  <p>$45.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="action">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 7" />
                <div className="product-info">
                  <h3>Product 7</h3>
                  <p>$50.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="adventure">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 8" />
                <div className="product-info">
                  <h3>Product 8</h3>
                  <p>$55.00</p>
                </div>
              </div>
              <div className="product-item" data-genre="adventure">
                <img src="https://via.placeholder.com/200x250.png" alt="Product 8" />
                <div className="product-info">
                  <h3>Product 8</h3>
                  <p>$55.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="pagination">
        <a href="#" className="pagination-item">&laquo;</a>
        <a href="#" className="pagination-item">&lsaquo;</a>
        <a href="#" className="pagination-item active">1</a>
        <a href="#" className="pagination-item">2</a>
        <a href="#" className="pagination-item">3</a>
        <a href="#" className="pagination-item">&rsaquo;</a>
        <a href="#" className="pagination-item">&raquo;</a>
      </div>

      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src= {footerlogo} width="75" height="75" loading="lazy" alt="CC logo" />
              </a>
              <p className="footer-text">
                CyberCrusaders team details
              </p>
              <div className="social-media">
                <a href="https://www.linkedin.com/">
                  <font color="#007cc4"><i className="fab fa-linkedin"></i></font>
                </a>
                <a href="https://github.com/1uck13ss/Cyber-Crusaders">
                  <font color="#007cc4"><i className="fab fa-github"></i></font>
                </a>
                <a href="https://t.me/kahjyun">
                  <font color="#007cc4"><i className="fab fa-telegram"></i></font>
                </a>
              </div>
            </div>
            <div className="footer-list">
              <p className="title footer-list-title has-after">Useful Links</p>
              <ul>
                <li><a href="#" className="footer-link">Nintendo</a></li>
                <li><a href="#" className="footer-link">Playstation</a></li>
                <li><a href="#" className="footer-link">XBox</a></li>
                <li><a href="#" className="footer-link">PC</a></li>
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
                <a href="mailto:e0941187@u.nus.edu" className="contact-link">Lim Jun Ming</a>,
                <a href="mailto:e0959239@u.nus.edu" className="contact-link">Pung Kah Jyun</a>
              </div>
            </div>
            <div className="footer-list">
              <p className="title footer-list-title has-after">Games Updates Signup</p>
              <form action="./index.html" method="get" className="footer-form">
                <input type="email" name="email_address" required placeholder="Your Email" autocomplete="off" className="input-field" />
                <br />
                <button type="submit" className="btn" data-btn>Subscribe Now</button>
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
}

export default App;
