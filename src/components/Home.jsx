import { Outlet } from "react-router-dom";
import React from "react";
import categories from "../data/categories";

const Home = () => {
  return (
    <main className="main">
      <h1>Home</h1>
      <h3>Hello, Dear Users !</h3>
      <p>
        This is my final project and it is a News React Application. Using this
        app, user can find all news, presented in the website, and also sort and
        filter them using buttons with options.
      </p>
      <p>
        News have a <mark>New</mark> sign when their release date is less than a
        week.
      </p>
      <p>
        News can be <mark>sorted</mark> by:
      </p>
      <ul>
        <li>Title</li>
        <li>Date</li>
        <li>ID</li>
      </ul>
      <p>
        News can also be <mark>filtered</mark> by all the categories:
      </p>
      <ul>
        <li>Politics</li>
        <li>Celebrities</li>
        <li>Youth</li>
        <li>Education</li>
        <li>Business</li>
        <li>Culture</li>
        <li>Climate</li>
        <li>Science</li>
        <li>Nature</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Technology</li>
        <li>Fashion</li>
        <li>War</li>
      </ul>
      {/* {categories.map((item) => {
        <ul>
          <li>{item}</li>
        </ul>;
      })} */}
    </main>
  );
};

export default Home;
