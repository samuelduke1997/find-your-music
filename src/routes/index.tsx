import Login from "../pages/login";
import Home from "../pages/home";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
