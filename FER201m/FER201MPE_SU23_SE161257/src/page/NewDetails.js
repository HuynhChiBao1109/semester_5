import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsDetail } from "../server";

const NewsDetails = () => {
  const idNews = useParams().id; // Get the news ID from the URL parameter
  console.log(idNews);
  useEffect(() => {
    fetchNewsDetail(idNews).then((response) => setNews(response.data));
  }, [idNews]);
  const [news, setNews] = useState();

  if (!news) {
    return <p>Loading details...</p>;
  }

  console.log(news.actractive);

  return (
    <div className="news-detail-container">
      <h2 className="news-detail-title">{news.name}</h2>
      <div className="news-detail">
        <img src={news.image} alt={news.name} className="news-image" />
        <div className="news-details">
          <h3 className="news-title">Price: {news.price}</h3>
          <p className="news-info">Rating: {news.rating}</p>
          <p className="news-info">Category: {news.category}</p>
          <p className="news-info">
            Best-Seller: {news.bestseller ? "Yes" : "No"}
          </p>
          <p className="news-description">Description: {news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
