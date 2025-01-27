import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
