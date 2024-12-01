import React from "react";
import { Home, Error, Admin } from "../pages/Index";
import { Route, Routes } from "react-router";

const Allroute = () => {
  return (
    <main className="dark:bg-gray-800 dark:text-white min-h-[90vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Allroute;
