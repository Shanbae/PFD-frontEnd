import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CurrencyRupeeIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Sidebar = ({ sideBarIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button> */}
      <aside
        className={`inset-y fixed top-0 left-0 z-40 mt-15 h-full w-64 bg-gray-800 p-4 shadow-2xl transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sideBarIsOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:flex md:translate-x-0`}
      >
        <nav className="flex flex-col space-y-5">
          <Link
            to="home"
            className="flex items-center space-x-1 rounded-xl p-2 hover:bg-gray-700"
          >
            <HomeIcon className="h-6 w-6 rounded-lg bg-amber-300" />
            <span className="pt-1 text-amber-300">Home</span>
          </Link>
          <Link
            to="customer"
            className="flex items-center space-x-1 rounded-xl p-2 hover:bg-gray-700"
          >
            <UserGroupIcon className="h-6 w-6 rounded-lg bg-amber-300" />
            <span className="pt-1 text-amber-300">Customers</span>
          </Link>
          <Link
            to="accounts"
            className="flex items-center space-x-1 rounded-xl p-2 hover:bg-gray-700"
          >
            <UserCircleIcon className="h-6 w-6 rounded-lg bg-amber-300" />
            <span className="pt-1 text-amber-300">Accounts</span>
          </Link>
          <Link
            to="transactions"
            className="flex items-center space-x-1 rounded-xl p-2 hover:bg-gray-700"
          >
            <CurrencyRupeeIcon className="h-6 w-6 rounded-lg bg-amber-300" />
            <span className="pt-1 text-amber-300">Transactions</span>
          </Link>
          <Link
            to="our-company"
            className="flex items-center space-x-1 rounded-xl p-2 hover:bg-gray-700"
          >
            <BuildingOffice2Icon className="h-6 w-6 rounded-lg bg-amber-300" />
            <span className="pt-1 text-amber-300">Companies</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
