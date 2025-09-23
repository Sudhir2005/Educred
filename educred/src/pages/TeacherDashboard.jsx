import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1">
        <Navbar role="teacher" />

        <main className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Pending Approvals" value="12 Documents" />
          <Card title="Attendance Reports" value="Batch A: 89%" />
          <Card title="Student Profiles" value="350+ Active Students" />
        </main>
      </div>
    </div>
  );
}
