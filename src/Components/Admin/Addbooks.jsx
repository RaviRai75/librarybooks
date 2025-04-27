import React, { useRef, useState } from 'react';
import './../../assets/Styles/addbooks.css';

const Addbooks = () => {
  const formData = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [lastId, setLastId] = useState(795); 

  const autoId = () => {
    
    const newId = lastId + 1;
    setLastId(newId);
    return newId.toString();
  };
    

  const handleSubmit = async (e) => {
      e.preventDefault();
      

    let newBook = {
        id:autoId(),
      title: formData.current[0].value,
      isbn: formData.current[1].value,
      pageCount: formData.current[2].value,
      thumbnailUrl: formData.current[3].value,
      shortDescription: formData.current[4].value,
      longDescription: formData.current[5].value,
      status: formData.current[6].value,
      authors: formData.current[7].value,
      categories: formData.current[8].value,
    };

    try {
      const response = await fetch(`http://localhost:4000/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        setSuccessMessage('Book has been added successfully!');
        formData.current.reset(); 
      } else {
        setSuccessMessage('Failed to add the book. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="addbooks">
        <div className="header">
          <h2>Add Books</h2>
          <div className="container">
            <form ref={formData} onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter Title" className="titlee"  required/>
              <input type="text" placeholder="Enter Reg No" className="regno"  required/>
              <input type="text" placeholder="Enter PageCount" className="pagecount"  required/>
              <input type="text" placeholder="Enter Image URL" className="imgurl"  required/>
              <input type="text" placeholder="Enter Short Desc" className="shrtdesc"  required/>
              <input type="text" placeholder="Enter Long Desc" className="lngdesc"  required/>
              <input type="text" placeholder="Enter Status" className="estatus"  required/>
              <input type="text" placeholder="Enter Authors" className="eauthors"  required/>
              <input type="text" placeholder="Enter Categories" className="ecategories"  required/>
              <button className="addbooksbtn">Add Books</button>
            </form>
          </div>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Addbooks;
