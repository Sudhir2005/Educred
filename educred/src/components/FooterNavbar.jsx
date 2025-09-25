// src/components/FooterNavbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Upload, Briefcase } from "lucide-react";

export default function FooterNavbar({ role }) {
  const location = useLocation();

  const studentLinks = [
    { name: "Dashboard", path: "/student/dashboard", icon: <Home size={20} /> },
    { name: "Upload", path: "/student/upload", icon: <Upload size={20} /> },
    { name: "Portfolio", path: "/student/portfolio", icon: <Briefcase size={20} /> },
  ];

  const teacherLinks = [
    { name: "Dashboard", path: "/teacher/dashboard", icon: <Home size={20} /> },
    { name: "Attendance", path: "/teacher/attendance", icon: <Upload size={20} /> },
    { name: "Reports", path: "/teacher/reports", icon: <Briefcase size={20} /> },
  ];

  const links = role === "student" ? studentLinks : teacherLinks;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white border-t shadow-md md:hidden">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center py-2 text-sm font-medium`}
            style={{
              color: isActive ? "#2B3A67" : "#A0A0A0",
            }}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
