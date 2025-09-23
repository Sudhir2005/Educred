import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="student" />
      <div className="flex flex-col flex-1">
        <Navbar role="student" />

        <main className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Academic Performance" value="CGPA: 8.7" />
          <Card title="Achievements" value="5 Certificates Verified" />
          <Card title="Attendance" value="92%" />
        </main>
      </div>
    </div>
  );
}
