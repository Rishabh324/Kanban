import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.isAuthenticated && !user.pending) navigate("/");
  });
  if (!user.isAuthenticated && !user.pending) return <LoadingScreen />;
  else return children;

};

export default ProtectedRoute;
