import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FooterNavbar from "../components/FooterNavbar";

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (Desktop only) */}
      <div className="hidden md:flex">
        <Sidebar role="student" />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar role="student" />

        {/* Main Content */}
        <main className="flex-1 w-full p-4 pb-20 overflow-y-auto sm:p-6 md:pb-6">
          {/* ✅ pb-20 prevents content from being hidden behind FooterNavbar on mobile */}
          <Outlet />
        </main>
      </div>

      {/* Footer Navbar (Mobile only) */}
      <FooterNavbar role="student" />
    </div>
  );
}
