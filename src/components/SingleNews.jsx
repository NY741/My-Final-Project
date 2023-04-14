import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import news from "../data/news";

const SingleNews = () => {
  const params = useParams();
  const navigate = useNavigate();
  const singleNews = news.find((singleNews) => singleNews.id === params.newsId);

  useEffect(() => {
    if (!singleNews) {
      navigate("..", { relative: "path" });
    }
  }, [singleNews, navigate]);

  return (
    <main>
      <div className="single-news">
        <h1>{singleNews?.title}</h1>
        <div className="single-news-image">
          <img src={singleNews?.img} alt={singleNews.title} />
        </div>
        <p>{singleNews.description}</p>
        <Link to=".." relative="path" className="button-news">
          Back to all news
        </Link>
      </div>
    </main>
  );
};

export default SingleNews;
