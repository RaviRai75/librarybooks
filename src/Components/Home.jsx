
import React from "react";
import './../assets/Styles/home.css';
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Homepage = () => {
  

  return (
    <div className="homepage">
      <section className="hero-section">
      
        <video className="hero-video" autoPlay muted loop>
          <source src="./../../../public/images/libraryvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Efficient and Intuitive Library Management</h1>
            <p>Experience the convenience of managing your library with ease and simplicity.</p>
            <button className="cta-button">Explore Now</button>
          </div>
          <div className="hero-search">
            <div className="search-bar">
              <label>
                Search by:
                <select>
                  <option>Title</option>
                  <option>Author</option>
                  <option>Genre</option>
                </select>
              </label>
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <p>Manage your library like a pro! Keep track of books, authors, and genres effortlessly.</p>
      </section>

      <section className="features-section">
        <h2>Features to Simplify Your Library Management</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Track Your Books</h3>
            <p>
              Easily manage the details of your library collection, including titles, authors, genres, and availability status.
            </p>
            <button className="feature-button"><NavLink to="/adminportal/books">Learn More</NavLink></button>
          </div>
          <div className="feature-card">
            <h3>Organize and Categorize</h3>
            <p>
              Efficiently organize books by categories, genres, or any custom tags to make finding and borrowing books easier than ever.
            </p>
            <button className="feature-button"><NavLink to="/adminportal/books">Get Started</NavLink></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
