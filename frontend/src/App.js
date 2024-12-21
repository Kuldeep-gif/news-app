import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />
      <NewsList news={news} />
    </div>
  );
};

export default App;
