import React, { useState } from "react";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Home from "../Dashboard/Home";
import SubHome1 from "./SubHome1";
import Footer from "./Footer";

const MainLayout = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header toggleSideBar={toggleSideBar} />

      {/* Sidebar & Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar sideBarIsOpen={sideBarIsOpen} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 pt-20">
          <Outlet />
        </main>
      </div>
      <div className="ml-[250px] bg-gray-200 p-4">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
