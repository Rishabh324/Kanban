import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dum = useSelector((state) => state.user);
  
  useEffect(() => {
    if (!dum.isAuthenticated && !dum.pending) navigate("/");
  });
  if (!dum.isAuthenticated && !dum.pending) return <LoadingScreen />;
  else return children;

};

export default ProtectedRoute;
