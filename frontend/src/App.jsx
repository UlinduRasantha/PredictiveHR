import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const hii = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default hii;
