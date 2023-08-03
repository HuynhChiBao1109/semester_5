import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNewsDetail, updateNews } from "../server";

const UpdateNews = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    status: false,
    views: 1,
    attractive: false,
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await fetchNewsDetail(id);
        setFormData(news.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? e.target.checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateNews(id, formData);
      alert("News updated successfully");
      navigate("/dashboard"); // Redirect to the dashboard after successful update
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };

  return (
    <div style={{ width: 500 }}>
      <h2>Update News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Views:</label>
          <input
            type="number"
            name="views"
            value={formData.views}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Attractive:</label>
          <input
            type="checkbox"
            name="attractive"
            checked={formData.attractive}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update News</button>
      </form>
    </div>
  );
};

export default UpdateNews;
