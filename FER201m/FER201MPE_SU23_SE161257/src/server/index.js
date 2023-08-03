import axios from "axios";

const server = "https://64b392fa0efb99d86268158c.mockapi.io/v1/news/fer";

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${server}`);
    return response; // Handle the response data
  } catch (error) {
    console.error(error); // Handle the error
  }
};

export const fetchNewsDetail = async (id) => {
  console.log(id);

  try {
    const response = await axios.get(`${server}/${id}`);
    return response; // Handle the response data
  } catch (error) {
    console.error(error); // Handle the error
  }
};

export const createNews = async (newsData) => {
  try {
    const response = await axios.post(`${server}`, newsData);
    return response.data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

export const updateNews = async (id, newsData) => {
  try {
    const response = await axios.put(`${server}/${id}`, newsData);
    return response.data;
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${server}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};
