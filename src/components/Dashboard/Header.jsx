import React from "react";
import { BellAlertIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Header = ({ toggleSideBar }) => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full bg-gray-700 p-4 shadow-md">
      <h1 className="text-xl text-amber-300"> Shan's Personal Finance</h1>

      <BellAlertIcon className="ml-auto h-8 w-8 cursor-pointer rounded-2xl bg-amber-300 p-1" />
      <button
        className="h-8 w-8 rounded-2xl bg-amber-300 md:hidden"
        onClick={toggleSideBar}
      >
        <Bars3Icon className="h-8 w-8 rounded-2xl bg-amber-300 md:hidden" />
      </button>
    </header>
  );
};

export default Header;
