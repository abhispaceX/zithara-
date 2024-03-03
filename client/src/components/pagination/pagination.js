import React from 'react';
import './pagination.css'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
        className={`pagination__button ${currentPage === 1 ? 'disabled' : ''}`}
      >
        Previous
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`pagination__button ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageClick(page)}
          style={{ animation: `pulse 0.5s ease-in-out ${page === currentPage ? 'infinite' : 'none'}` }}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
        className={`pagination__button ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
