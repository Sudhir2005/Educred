import React from "react";
import Navbar from "../components/Navbar";
import FooterNavbar from "../components/FooterNavbar";

export default function Layout({ role, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* Top Navbar (appears only once) */}
      <Navbar role={role} />

      {/* Main content: fully responsive */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer Navbar for mobile */}
      <footer className="fixed bottom-0 left-0 w-full z-20 md:hidden">
        <FooterNavbar role={role} />
      </footer>
    </div>
  );
}
