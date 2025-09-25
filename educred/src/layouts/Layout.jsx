import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FooterNavbar from "../components/FooterNavbar";

export default function Layout({ role, children }) {
  return (
    <div className="flex min-h-screen bg-offwhite">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex">
        <Sidebar role={role} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar role={role} />

        {/* Page content */}
        <main className="flex-1 p-6 pb-20 md:p-8 md:pb-6">{children}</main>
      </div>

      {/* Footer navbar for mobile */}
      <div className="fixed bottom-0 left-0 z-10 w-full md:hidden">
        <FooterNavbar role={role} />
      </div>
    </div>
  );
}
