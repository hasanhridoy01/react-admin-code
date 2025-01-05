import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

function RedirectToHome({ children }) {
  const { authToken } = useContext(AuthContext); 

  // If no token is found, render children; otherwise, redirect to dashboard
  return !authToken ? children : <Navigate to="/" />;
}

RedirectToHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedirectToHome;
