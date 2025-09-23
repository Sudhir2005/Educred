import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="student" />
      <div className="flex flex-col flex-1">
        <Navbar role="student" />
        <main className="grid w-full max-w-3xl gap-6 p-6 mx-auto">
          <h2 className="text-2xl font-bold text-primary">My Portfolio</h2>
          <Card title="Academics" value="CGPA: 8.7" />
          <Card title="Certificates" value="5 Verified" />
          <Card title="Internships" value="2 Completed" />
          <Card title="Attendance" value="92%" />
        </main>
      </div>
    </div>
  );
}
