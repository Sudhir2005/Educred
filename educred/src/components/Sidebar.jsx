// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const location = useLocation();

  const studentLinks = [
    { name: "Dashboard", path: "/student/dashboard" },
    { name: "Upload Documents", path: "/student/upload" },
    { name: "Portfolio", path: "/student/portfolio" },
  ];

  const teacherLinks = [
    { name: "Dashboard", path: "/teacher/dashboard" },
    { name: "Attendance", path: "/teacher/attendance" },
    { name: "Reports", path: "/teacher/reports" },
  ];

  const links = role === "student" ? studentLinks : teacherLinks;

  return (
    <aside
      className="flex-col hidden w-64 min-h-screen p-6 shadow-md md:flex"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Brand */}
      <h2
        className="mb-8 text-2xl font-bold tracking-wide"
        style={{ color: "#2B3A67" }}
      >
        EduCred
      </h2>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md font-medium transition-colors`}
              style={{
                backgroundColor: isActive ? "#2B3A67" : "transparent",
                color: isActive ? "#FFFFFF" : "#2B3A67",
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
