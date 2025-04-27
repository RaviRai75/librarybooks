import React, { useState, useEffect } from 'react';
import './../assets/Styles/books.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Books = () => {
  let loc = useLocation();
  let bool = loc.pathname.startsWith('/adminportal');
  let [books, setBooks] = useState([]);
  let [cart, setCart] = useState([]); 
  let navigate = useNavigate();

  useEffect(() => {
    let fetchApi = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchApi();
  }, []);

  let readMore = (id) => {
    if (bool) {
      navigate(`/adminportal/readbook/${id}`);
    } else {
      navigate(`/usersportal/readbook/${id}`);
    }
  };

  let deletebook = async (id, title) => {
    let booll = window.confirm(`Are You Sure to delete ${title}`);
    if (booll) {
      const response = await fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id)); 
        window.alert(`${title} is Deleted`);
      } else {
        window.alert("Failed to delete the book");
      }
    } else {
      window.alert("Book is not deleted");
    }
  };

  let addToCart = (id) => {
    const bookToAdd = books.find((book) => book.id === id);
    if (bookToAdd) {
      setCart((prevCart) => [...prevCart, bookToAdd]);
      window.alert(`${bookToAdd.title} has been added to the cart!`);
    }
  };

  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className="books">
        <div className="header">
          <h1>Books</h1>
        </div>
        <div className="container">
          {books.map((elem) => {
            let { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = elem;

            return (
              <div className="card" key={id}>
                <div className="first">
                  <div className="img">
                    <img src={thumbnailUrl} alt={title} className="img1" />
                  </div>
                  <div className="title">{title}</div>
                </div>
                <div className="second">
                  <div className="categories">
                    <span className="left1">Categories:</span>
                    <span className="centre1">{categories}</span>
                  </div>
                  <div className="authors">
                    <span className="left1">Authors:</span>
                    <span className="centre1">{authors}</span>
                  </div>
                  <div className="isbn">
                    <span className="left1">Reg No:</span>
                    <span className="centre1">{isbn}</span>
                  </div>
                  <div className="status">
                    <span className="left1">Status:</span>
                    <span className="centre1">{status}</span>
                  </div>
                  <div className="pagecount">
                    <span className="left1">PageCount:</span>
                    <span className="centre1">{pageCount}</span>
                  </div>
                  <div className="buttons">
                    <button onClick={() => readMore(id)} className="readmore">
                      Read More
                    </button>
                    {bool ? (
                      <button className="deletebook" onClick={() => deletebook(id, title)}>
                        Delete
                      </button>
                    ) : (
                      <button className="addcart" onClick={() => addToCart(id)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default Books;