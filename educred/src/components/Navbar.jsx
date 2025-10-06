// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, User, Home } from "lucide-react";

export default function Navbar({ role }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="flex items-center justify-between px-4 py-4 shadow-md sm:px-6 lg:px-8"
      style={{ backgroundColor: "#2B3A67" }}
    >
      {/* Logo / Brand */}
      <div
        className="text-xl font-bold tracking-wide text-white cursor-pointer flex items-center gap-2"
        onClick={() => navigate("/student/dashboard")}
      >
        VidyaSetu
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Home Button */}
        <button
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-[#38497C] transition"
          onClick={() => navigate("/student/dashboard")}
        >
          <Home size={18} />
          <span>Home</span>
        </button>

        {/* Role Badge */}
        {role && (
          <span
            className="px-3 py-1 text-sm font-semibold rounded-full"
            style={{ backgroundColor: "#FF7F50", color: "#fff" }}
          >
            {role}
          </span>
        )}

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-white hover:text-[#FF7F50] transition"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div
              className="flex items-center justify-center rounded-full w-9 h-9"
              style={{ backgroundColor: "#F7F9FC" }}
            >
              <User size={18} color="#2B3A67" />
            </div>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown Menu */}
          {openDropdown && (
            <div className="absolute right-0 z-10 w-40 mt-2 bg-white border rounded-lg shadow-lg">
              <button className="flex items-center w-full px-4 py-2 text-sm text-[#2B3A67] hover:bg-[#F7F9FC]">
                <User size={16} className="mr-2" /> Profile
              </button>
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                onClick={() => navigate("/")}
              >
                <LogOut size={16} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
