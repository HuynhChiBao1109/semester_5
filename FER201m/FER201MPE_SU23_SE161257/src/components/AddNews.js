import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNews } from "../server";

const AddNews = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: 1,
    description: "",
    rating: 1,
    category: "",
    image: "",
    besseller: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? e.target.checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNews(formData);
      alert("News added successfully");
      navigate("/dashboard"); // Redirect to the dashboard after successful addition
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  return (
    <div style={{ width: 500 }}>
      <h2>Add News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <textarea
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            checked={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>image:</label>
          <input
            type="text"
            name="image"
            checked={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>besseller:</label>
          <input
            type="checkbox"
            name="besseller"
            checked={formData.besseller}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add News</button>
      </form>``
    </div>
  );
};

export default AddNews;
