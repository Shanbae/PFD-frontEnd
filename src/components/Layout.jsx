import React, { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Footer from "./Footer";

const Layout = () => {
  const [showback, setShowBack] = useState(false);
  const navigate = new useNavigate();
  const location = new useLocation();

  const handleBackButton = () => {
    navigate("/Login");
  };
  return (
    <div className="bg-opacity-60 fixed h-screen min-h-screen w-full overflow-auto bg-[#303030] bg-gradient-to-br backdrop-blur-3xl">
      <div className="flex-col items-start justify-between">
        {location.pathname != "/Login" && (
          <button
            className="mt-2 ml-4 rounded-3xl bg-black p-2 text-white"
            onClick={handleBackButton}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
