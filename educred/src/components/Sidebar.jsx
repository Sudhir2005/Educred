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
    <aside className="flex-col hidden w-64 p-6 bg-white shadow-lg md:flex">
      <h2 className="mb-6 text-xl font-bold text-primary">EduCred</h2>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`mb-3 px-3 py-2 rounded hover:bg-primary hover:text-white transition-colors ${
            location.pathname === link.path ? "bg-primary text-white" : "text-softgray"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  );
}
