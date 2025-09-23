import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AttendanceTable from "../components/AttendanceTable";

export default function AttendanceManagement() {
  const records = [
    { date: "2025-09-20", course: "Maths", status: "Present" },
    { date: "2025-09-21", course: "Physics", status: "Absent" },
    { date: "2025-09-22", course: "Chemistry", status: "Present" },
  ];

  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1">
        <Navbar role="teacher" />
        <main className="p-6">
          <h2 className="mb-4 text-xl font-bold text-primary">Attendance Management</h2>
          <AttendanceTable records={records} />
        </main>
      </div>
    </div>
  );
}
