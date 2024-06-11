import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Record from "../pages/Record.jsx";

const Router = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            }
          />
          <Route path="/record/:id" element={<Record />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
