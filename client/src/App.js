import React, { useEffect } from "react";
import Index from "./Components/Pages/IndexPage/Index";
import Login from "./Components/Pages/LoginPage/Login";
import Register from "./Components/Pages/RegisterPage/Register";
import Alert from "./Components/AlertSnackBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boards from "./Components/Pages/BoardsPage/Boards";
import ProtectedRoute from "./Utils/ProtectedRoute";
import { loadUser } from "./Services/userService";
import Store from "./Redux/Store";
import FreeRoute from "./Utils/FreeRoute";
import Board from "./Components/Pages/BoardPage/Board";
const App = () => {
  useEffect(() => {
    loadUser(Store.dispatch);
  }, []);
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path='/boards' element={
          <ProtectedRoute>
            <Boards />
          </ProtectedRoute>
        } />
        <Route path='/board/:id' element={
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        } />
        <Route path='/login' element={
          <FreeRoute>
            <Login />
          </FreeRoute>
        } />
        <Route path='/register' element={
          <FreeRoute>
            <Register />
          </FreeRoute>
        } />
        <Route path='/' element={
          <FreeRoute>
            <Index />
          </FreeRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
