import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
