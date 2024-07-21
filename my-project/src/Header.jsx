import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="bg-rose-50 bg-opacity-90 backdrop-blur-md shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-3xl font-bold text-blue-600">
        <Link to="/">FreelanceSite</Link>
      </div>
      <div className="flex space-x-8 ">
        <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
        <Link to="/services" className="hover:text-blue-600 text-gray-700">Services</Link>
        <Link to="/messaging" className="hover:text-blue-600 text-gray-700">Messaging</Link>
        <Link to="/users" className="hover:text-blue-600 text-gray-700">Users</Link>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600">More</button>
          <div className="absolute hidden group-hover:block bg-white border rounded shadow-lg mt-2 w-35">
            <Link to="/contests" className="block px-2 py-2 hover: bg-gray-200">Contests</Link>
            <Link to="/categories" className="block px-2 py-2 hover: bg-gray-200">Categories</Link>
            <Link to="/budgets" className="block px-2 py-2 hover: bg-gray-200">Budgets</Link>
            <Link to="/collaborations" className="block px-2 py-2 hover: bg-gray-200">Collaborations</Link>
            <Link to="/currencies" className="block px-2 py-2 hover: bg-gray-200">Currencies</Link>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 ">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
      </div>
      <div className="flex items-center space-x-4 mr-14">
        <div className="notifications">
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-4" /> Profile
          </button>
          <div className="absolute hidden group-hover:block group-hover:visible bg-white border rounded shadow-lg mt-2 w-48">
            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> View Profile
            </Link>
            <Link to="/profile/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faCog} className="mr-2" />Settings
            </Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
