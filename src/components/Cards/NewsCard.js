// mynote:- NewsCard: Displays a single news item.

import React from 'react';
import { FaArrowRight, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const sentimentIcon = {
  positive: <FaSmile className="text-green-500" />,
  neutral: <FaMeh className="text-yellow-500" />,
  negative: <FaFrown className="text-red-500" />,
};

const truncateDescription = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const NewsCard = ({ title, description, sentiment, url, urlToImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-2">
            {sentimentIcon[sentiment]}
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaArrowRight className="text-blue-500 hover:text-blue-700" />
            </a>
          </div>
        </div>
        <p className="text-gray-600">{truncateDescription(description, 40)}</p>
      </div>
    </div>
  );
};

export default NewsCard;
