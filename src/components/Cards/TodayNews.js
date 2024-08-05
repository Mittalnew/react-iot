import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import { fetchNews } from '../../AuthsApi/auth';

const truncateDescription = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const NewsCard = ({ title, description, sentiment, url, urlToImage }) => {
  const sentimentIcon = {
    positive: <FaSmile className="text-green-500" />,
    neutral: <FaMeh className="text-yellow-500" />,
    negative: <FaFrown className="text-red-500" />,
  };

  const truncatedDescription = truncateDescription(description, 40);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
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
        <p className="text-gray-600">{truncatedDescription}</p>
      </div>
    </div>
  );
};

const TodayNews = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getNews = async () => {
        try {
          const data = await fetchNews();
          console.log('Received data:', data);  // लॉग प्राप्त डेटा
          if (Array.isArray(data)) {
            setNewsItems(data);
          } else if (data && typeof data === 'object') {
            // यदि डेटा एक object है, तो उसके मुख्य array को ढूंढें
            const newsArray = Object.values(data).find(item => Array.isArray(item));
            if (newsArray) {
              setNewsItems(newsArray);
            } else {
              throw new Error('News data is not in expected format');
            }
          } else {
            throw new Error('Received data is not an array or object');
          }
          setLoading(false);
        } catch (err) {
          console.error('Error in getNews:', err);  // लॉग त्रुटि
          setError(err.message);
          setLoading(false);
        }
      };
  
      getNews();
    }, []);
  
    console.log('Current newsItems:', newsItems);  // लॉग वर्तमान newsItems
  
    if (loading) {
      return <div className="text-center mt-10">Loading news...</div>;
    }
  
    if (error) {
      return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
  
    return (
      <div className="max-w-6xl mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Today's News</h2>
        {Array.isArray(newsItems) && newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard 
                key={item._id}
                title={item.title}
                description={item.des}
                urlToImage={item.img}
                sentiment="neutral"
                url="#"
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">No news items available</div>
        )}
      </div>
    );
  };

export default TodayNews;