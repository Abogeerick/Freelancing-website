import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faBell, faUser, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-3xl font-bold text-blue-600">
        <Link to="/">ShopSmart</Link>
      </div>
      <div className="flex space-x-8">
        <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
        <Link to="/categories" className="hover:text-blue-600 text-gray-700">Categories</Link>
        <Link to="/deals" className="hover:text-blue-600 text-gray-700">Deals</Link>
        <Link to="/favorites" className="hover:text-blue-600 text-gray-700">Favorites</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/cart" className="text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/favorites" className="text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/notifications" className="text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Account
          </button>
          <div className="absolute hidden group-hover:block bg-white border rounded shadow-lg mt-2 w-48">
            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
            </Link>
            <Link to="/profile/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
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
