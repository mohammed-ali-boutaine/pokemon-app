import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children, onSearch, onLogoClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    // If not on home page and user is searching, navigate to home first
    if (location.pathname !== "/" && query.trim()) {
      navigate("/");
    }
    // Call the original search handler
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} onLogoClick={onLogoClick} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
