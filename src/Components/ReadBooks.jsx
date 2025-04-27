import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../../src/assets/Styles/readbooks.css';

const ReadBooks = () => {
  const { id } = useParams(); 
  const [bookData, setBookData] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchBookById = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/books/${id}`);
        setBookData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details.');
        setLoading(false);
      }
    };

    fetchBookById();
  }, [id]);

  const {
    title,
    isbn,
    pageCount,
    thumbnailUrl,
    shortDescription,
    longDescription,
    authors,
    categories,
  } = bookData;

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="readingbooks">
    <div className="book-details">
      <div className="book-thumbnail">
        <img src={thumbnailUrl} alt={title} />
      </div>
  
      <div className="book-info">
        <h1>{title}</h1>
      
        <div className="info-right">
          <p><strong>ISBN:</strong> {isbn}</p>
          <p><strong>Page Count:</strong> {pageCount}</p>
        </div>
  
        <div className="info-row">
          <p><strong>Authors:</strong> {authors?.join(', ')}</p>
          <p><strong>Categories:</strong> {categories?.join(', ')}</p>
          <p><strong>Status:</strong> {bookData.status}</p>
        </div>
  
        <div>
          <h3>Short Description:</h3>
          <p>{shortDescription || 'N/A'}</p>
        </div>
        <div>
          <h3>Long Description:</h3>
          <p>{longDescription || 'N/A'}</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ReadBooks;
