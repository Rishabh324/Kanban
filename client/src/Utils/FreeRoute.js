import React from "react";
import { Navigate } from "react-router-dom";

const FreeRoute = ({ children }) => {
  if (localStorage.getItem("token")) return <Navigate push to="/boards" />;
  else return children;
};

export default FreeRoute;
