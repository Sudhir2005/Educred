import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="student" />
      <div className="flex flex-col flex-1">
        <Navbar role="student" />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
