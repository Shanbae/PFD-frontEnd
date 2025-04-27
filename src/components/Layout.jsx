import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Layout = () => {
  const [showback, setShowBack] = useState(null);
  const navigate = new useNavigate();
  const handleBackButton = () => {
    navigate("/Login");
  };
  return (
    <div className="fixed min-h-screen w-full overflow-auto bg-gradient-to-br from-indigo-500 via-indigo-900 to-cyan-400">
      <div className="flex-col items-start justify-between">
        <button
          className="mt-2 ml-4 rounded-3xl bg-black p-2 text-white"
          onClick={handleBackButton}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
