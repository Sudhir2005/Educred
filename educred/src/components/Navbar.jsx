// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ role }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-primary">EduCred</div>
      <div className="space-x-4">
        <button className="transition-colors text-softgray hover:text-primary">Profile</button>
        <button className="transition-colors text-softgray hover:text-primary">Logout</button>
      </div>
    </nav>
  );
}
