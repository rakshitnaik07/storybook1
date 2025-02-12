import React from "react";
import "./header.css"

const Header = () => {
  return (
    <header className="header-container">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="/"
        />
        <span className="logo-text">foodslice</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search food"
          className="search-input"
        />
        <button className="filter-button">
          <span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="filter-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 3H5a2 2 0 00-2 2v1a2 2 0 001 1.732V13l4 2.286V19a2 2 0 002 2h6a2 2 0 002-2v-3.714L20 13V7.732A2 2 0 0021 6V5a2 2 0 00-2-2h-5M10 3v3m0 0H5m5 0h4"
            />
          </svg>
        </button>
      </div>

      {/* User Profile */}
      <div className="user-profile-container">
        <img
          src="/path-to-user-image.jpg"
          alt="User profile"
          className="user-profile-image"
        />
        <span className="user-name">David Brown</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="dropdown-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
