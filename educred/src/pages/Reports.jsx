import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Reports() {
  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1">
        <Navbar role="teacher" />
        <main className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="NAAC Report" value="Ready for Review" />
          <Card title="AICTE Compliance" value="80% Complete" />
          <Card title="NIRF Data" value="Submitted" />
        </main>
      </div>
    </div>
  );
}
