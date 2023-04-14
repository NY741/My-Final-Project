import React from "react";
import bbcLogo from "../images/news-bbc.png";
import news7Logo from "../images/news-7news.png";
import cnbcLogo from "../images/news-cnbc.jpg";
import foxLogo from "../images/news-fox.png";

const Aside = () => {
  return (
    <aside className="aside">
      <h2>Partners</h2>
      <div className="aside-logo">
        <a href="http://bbc.com" title="BBC">
          <img src={bbcLogo} alt="bbc" />
        </a>
      </div>
      <div className="aside-logo">
        <a href="http://7news.com" title="7news">
          <img src={news7Logo} alt="7news" />
        </a>
      </div>
      <div className="aside-logo">
        <a href="http://cnbc.com" title="CNBC">
          <img src={cnbcLogo} alt="cnbc" />
        </a>
      </div>
      <div className="aside-logo">
        <a href="http://fox-news.com" title="FOX">
          <img src={foxLogo} alt="fox" />
        </a>
      </div>
    </aside>
  );
};

export default Aside;
