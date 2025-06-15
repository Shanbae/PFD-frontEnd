import React, { useEffect, useState } from "react";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import api from "../../api";
const MainLayout = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [dashBoardData, setdashBoardData] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get(
        //"https://localhost:7207/api/Login/DashBoard",
        `${import.meta.env.VITE_REA}/api/Login/DashBoard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setdashBoardData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
