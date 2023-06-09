import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import SingleNews from "./components/SingleNews";
import NotFound from "./components/NotFound";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="news/:newsId" element={<SingleNews />} />  
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
