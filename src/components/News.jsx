import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import news from "../data/news";
import categories from "../data/categories";

const SORT_KEYS = ["title", "date", "id"];

function sortNews(news, key) {
  const sortedNews = [...news];
  if (!key || !SORT_KEYS.includes(key)) return sortedNews;
  sortedNews.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedNews;
}

// function filterNews(news, category) {
//   const sortedNews = [...news];
//   sortedNews.filter(
//     (singleNews) => (singleNews.category === category)
//   );
//   return sortedNews;
// }

const News = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedNews, setSortedNews] = useState(sortNews(news, sortKey));
  const [count, setCount] = useState(16);
  const addCount = 8;

  const newsList = sortedNews.filter((v) => !query.category || query.category === v.category)

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey) && !("category" in query)) {
      navigate(".");
      setSortKey();
      setSortedNews([...news]);
    }
  }, [sortKey, navigate]);

  function sortBy(e) {
    generateQueryLink("sort", e);
  }

  function filterByCategory(e) {
    generateQueryLink("category", e);
  }

  function generateQueryLink(name, e) {
    let q = [];

    for (let key in query) {
      if (key !== name) {
        q.push(key + "=" + query[key]);
      }
    }

    window.location.href =
      window.location.origin +
      window.location.pathname +
      "?" +
      name +
      "=" +
      e.target.value +
      (q.length ? "&" + q.join("&") : "");
  }

  function showMore() {
    setCount(count + addCount);
  }

  function showAll() {
    setCount(newsList.length);
  }

  let date = new Date();
  date.setDate(date.getDate() - 7);

  return (
    <main>
      <h1>{sortKey ? `News sorted by ${sortKey}` : "News feedback"}</h1>

      <div className="news-sort">
        <select id="news-sort-select" onChange={sortBy}>
          <option value="">Choose</option>
          {SORT_KEYS.map((item) => (
            <option value={item} selected={sortKey === item ? "selected" : ""}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <br></br>

      <div className="news-filter">
        <select id="news-category-select" onChange={filterByCategory}>
          <option value="">Choose</option>
          {categories.map((item) => (
            <option
              value={item}
              selected={query.category === item ? "selected" : ""}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <br></br>

      <div className="card-block">
        {newsList
          .slice(0, count)
          .map((singleNews) => (
            <div className="card">
              <div className="card-image">
                <img src={singleNews.img} alt={singleNews.title} />
              </div>
              <div className="card-content">
                <Link to={singleNews.id} className="card-link">
                  <h3
                    className={
                      new Date(singleNews.date) >= date
                        ? "card-title-new"
                        : "card-title"
                    }
                  >
                    {singleNews.title.length >= 45
                      ? singleNews.title.slice(0, 45) + "..."
                      : singleNews.title}
                  </h3>
                </Link>
                <Link to={singleNews.category}>
                  <h4 className="card-category">{singleNews.category}</h4>
                </Link>
                <p className="card-paragraph">
                  {singleNews.description.length >= 120
                    ? singleNews.description.slice(0, 120) + "..."
                    : singleNews.description}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="news-buttons">
        <button
          disabled={count >= newsList.length}
          onClick={showMore}
          className="btn-load"
        >
          Load More
        </button>
        <button
          disabled={count >= newsList.length}
          onClick={showAll}
          className="btn-load"
        >
          Load All
        </button>
      </div>
    </main>
  );
};

//   return (
//     <main>
//       <h1>{sortKey ? `News sorted by ${sortKey}` : "News"}</h1>
//       <div className="news-filter">
//         {categories.map((category) => {
//           <>
//             <select>
//               <option value={category}>{category}</option>
//             </select>
//           </>;
//         })}
//       </div>
//       <div className="card-block">
//         {sortedNews.map((singleNews) => (
//           <div className="card">
//             <div className="card-image">
//               <img src={singleNews.img} alt={singleNews.title} />
//             </div>
//             <div className="card-content">
//               <Link to={singleNews.id}>
//                 <h3 className="card-title">{singleNews.title}</h3>
//               </Link>
//               <Link to={singleNews.category}>
//                 <h4 className="card-category">{singleNews.category}</h4>
//               </Link>
//               <p className="card-paragraph">
//                 {singleNews.description.length >= 150
//                   ? singleNews.description.slice(0, 149) + "..."
//                   : singleNews.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

export default News;
