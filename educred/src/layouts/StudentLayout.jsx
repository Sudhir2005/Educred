// src/layouts/StudentLayout.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function StudentLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (Desktop) */}
      <aside className="hidden bg-white shadow-md lg:flex lg:flex-col lg:w-64">
        <div className="p-4 text-xl font-bold text-primary">EduCred</div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <Link to="dashboard" className="block p-2 rounded hover:bg-gray-200">
            Dashboard
          </Link>
          <Link to="upload" className="block p-2 rounded hover:bg-gray-200">
            Upload Documents
          </Link>
          <Link to="portfolio" className="block p-2 rounded hover:bg-gray-200">
            Portfolio
          </Link>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
        <span className="text-lg font-bold text-primary">EduCred</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Sidebar (slide-in) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="absolute top-0 left-0 w-64 h-full p-4 bg-white shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-xl font-bold text-primary">EduCred</div>
            <nav className="space-y-2">
              <Link
                to="dashboard"
                className="block p-2 rounded hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="upload"
                className="block p-2 rounded hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Upload Documents
              </Link>
              <Link
                to="portfolio"
                className="block p-2 rounded hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 pt-20 lg:pt-6 lg:ml-64">
        {/* ✅ pt-20 ensures content is pushed below mobile navbar */}
        <Outlet />
      </main>
    </div>
  );
}
