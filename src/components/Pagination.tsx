import React from 'react';
import '../App.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [] as number[];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pagination__page">
            <a onClick={() => paginate(number)} href="#" className="pagination__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
