import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import React from "react";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
