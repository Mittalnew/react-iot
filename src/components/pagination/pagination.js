import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  let startPage, endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md transition duration-300 ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <FaChevronLeft />
          </button>
        </li>
        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => onPageChange(1)}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
              >
                1
              </button>
            </li>
            {startPage > 2 && <li className="px-2">...</li>}
          </>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-2 rounded-md transition duration-300 ${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <li className="px-2">...</li>}
            <li>
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md transition duration-300 ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;