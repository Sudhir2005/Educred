import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FooterNavbar from "../components/FooterNavbar";

export default function TeacherLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (Desktop only) */}
      <div className="hidden md:flex">
        <Sidebar role="teacher" />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar role="teacher" />

        {/* Main Content */}
        <main className="flex-1 w-full p-4 sm:p-6 overflow-y-auto pb-20 md:pb-6">
          <Outlet />
        </main>
      </div>

      {/* Footer Navbar (Mobile only) */}
      <FooterNavbar role="teacher" />
    </div>
  );
}
