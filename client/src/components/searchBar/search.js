


import React, { useState } from 'react';
import './search.css'

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className='box animated-search-box'> 
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
          style={{
            width: '100%',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            transition: 'all 0.2s ease-in-out', 
          }}
        />
        <button type="submit" className="search-button" style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path fill="#555" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;

