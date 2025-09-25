// src/layouts/TeacherLayout.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function TeacherLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Sidebar (Desktop Mode) */}
      <aside
        className="hidden bg-white shadow-lg lg:flex lg:flex-col lg:w-64"
        style={{ minHeight: "100vh" }}
      >
        <div className="p-6 text-2xl font-extrabold text-[#2B3A67] tracking-wide">
          EduCred
        </div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <Link
            to="dashboard"
            className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="attendance"
            className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
          >
            Attendance Management
          </Link>
          <Link
            to="reports"
            className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
          >
            Reports
          </Link>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-[#2B3A67] text-white shadow-md lg:hidden">
        <span className="text-lg font-bold">EduCred</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar (Slide-in) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="absolute top-0 left-0 w-64 h-full p-6 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 text-2xl font-extrabold text-[#2B3A67] tracking-wide">
              EduCred
            </div>
            <nav className="space-y-3">
              <Link
                to="dashboard"
                className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="attendance"
                className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Attendance Management
              </Link>
              <Link
                to="reports"
                className="block p-3 rounded-md text-[#2B3A67] hover:bg-[#FF7F50] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reports
              </Link>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto lg:ml-64 mt-14 lg:mt-0">
        <div className="h-full p-6 bg-white shadow-md rounded-xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
