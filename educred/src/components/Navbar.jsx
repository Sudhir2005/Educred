// src/components/Navbar.jsx
import React from "react";
import { ChevronDown, LogOut, User } from "lucide-react";

export default function Navbar({ role }) {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 shadow-md"
      style={{ backgroundColor: "#2B3A67" }} // Primary Blue
    >
      {/* Logo / Brand */}
      <div className="text-xl font-bold tracking-wide text-white">EduCred</div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Role Badge */}
        {role && (
          <span
            className="px-3 py-1 text-sm font-semibold rounded-full"
            style={{
              backgroundColor: "#FF7F50", // Orange badge
              color: "#fff",
            }}
          >
            {role}
          </span>
        )}

        {/* Profile Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-2 text-white hover:text-[#FF7F50] transition">
            <div
              className="flex items-center justify-center rounded-full w-9 h-9"
              style={{ backgroundColor: "#F7F9FC" }} // Light bg
            >
              <User size={18} color="#2B3A67" />
            </div>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 hidden w-40 mt-2 bg-white border rounded-lg shadow-lg group-hover:block">
            <button className="flex items-center w-full px-4 py-2 text-sm text-[#2B3A67] hover:bg-[#F7F9FC]">
              <User size={16} className="mr-2" /> Profile
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
              <LogOut size={16} className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
