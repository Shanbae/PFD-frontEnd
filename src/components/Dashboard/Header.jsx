import React, { useState } from "react";
import { BellAlertIcon, Bars3Icon, PowerIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";

const Header = ({ toggleSideBar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full bg-gray-700 p-4 shadow-md">
      <h1 className="text-xl text-amber-300"> Shan's Personal Finance</h1>
      <div className="ml-auto flex space-x-2">
        <BellAlertIcon className="ml-auto h-8 w-8 cursor-pointer rounded-2xl bg-amber-300 p-1" />
        <button
          className="h-8 w-8 rounded-2xl bg-amber-300 md:hidden"
          onClick={toggleSideBar}
        >
          <Bars3Icon className="h-8 w-8 rounded-2xl bg-amber-300 md:hidden" />
        </button>
        <button
          data-tooltip-id="powerIcon-tooltip"
          data-tooltip-content={"Click to Logout!!"}
          className="h-8 w-8 rounded-2xl bg-amber-300"
          onClick={() => setModalOpen(true)}
        >
          <PowerIcon className="h-8 w-8 rounded-2xl bg-amber-300 p-1.5" />
        </button>
        <Tooltip place="bottom" id="powerIcon-tooltip" />
        <ConfirmModal
          isOpen={modalOpen}
          title="Logout"
          message="Are you sure you want to Logout?"
          onClose={() => setModalOpen(false)}
          onConfirm={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
