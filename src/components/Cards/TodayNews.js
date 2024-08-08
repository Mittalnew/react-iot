// MYNOTE: TodayNews: Fetches and manages news, displays it through NewsCard, and also handles pagination.

import React, { useState, useEffect, useCallback } from 'react';
import NewsCard from './NewsCard'; 
import Pagination from '../pagination/pagination';
import { fetchNews } from '../../AuthsApi/auth'; 
const TodayNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9;

  const getNews = useCallback(async (page) => {
    setLoading(true);
    try {
      const { news, count } = await fetchNews(page, itemsPerPage);
      setNewsItems(news);
      setTotalPages(Math.ceil(count / itemsPerPage));
      console.log('Fetched news for page', page, ':', news);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    getNews(currentPage);
  }, [currentPage, getNews]);

  if (loading) return <div className="text-center mt-10">Loading news...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div id="todayNews" className="max-w-6xl mx-auto my-10 px-4 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Today's News</h2>
      {newsItems.length > 0 ? (
        <>
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="text-center mt-10">No news items available</div>
      )}
    </div>
  );
};

export default TodayNews;
