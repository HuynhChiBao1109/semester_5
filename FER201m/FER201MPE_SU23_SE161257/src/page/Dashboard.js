import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchNews, deleteNews } from "../server";

export const Dashboard = () => {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const news = await fetchNews();
      setNewsList(news.data || []); // Initialize as an empty array if news is null or undefined
    } catch (error) {
      console.error("Error loading news:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?"
    );
    if (confirmDelete) {
      try {
        await deleteNews(id);
        // Show success notice or toast
        alert("News deleted successfully");
        // Reload the news list
        loadNews();
      } catch (error) {
        console.error("Error deleting news:", error);
      }
    }
  };
  console.log(newsList);
  return (
    <div>
      <h2>News Dashboard</h2>
      <button onClick={() => navigate("/add")}>Add news</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Image</th>
            <th>besseller</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
              <td>{news.name}</td>
              <td>{news.price}</td>
              <td>{news.description}</td>
              <td>{news.rating}</td>
              <td>{news.category}</td>
              <td>{news.image}</td>
              <td>{news.besseller ? "Yes" : "No"}</td>

              <td>
                <Link to={`/details/${news.id}`}>View</Link>
                <div onClick={() => navigate("/update/" + news.id)}>Edit</div>
                <button onClick={() => handleDelete(news.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
