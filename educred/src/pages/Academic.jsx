import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Academic() {
  const navigate = useNavigate();

  // Example student list
  const students = [
    { id: 1, name: "John Doe", dept: "Computer Science" },
    { id: 2, name: "Jane Smith", dept: "Mechanical Engineering" },
    { id: 3, name: "Michael Johnson", dept: "Electrical Engineering" },
    { id: 4, name: "Emily Davis", dept: "Civil Engineering" },
    { id: 5, name: "Ana De Armas", dept: "IT" },
    { id: 6, name: "Tom Cruise", dept: "IT" },
    { id: 7, name: "Sudhir", dept: "IT" },
    { id: 8, name: "Vinayak", dept: "Biotech" },
    { id: 9, name: "Yadhu", dept: "IT" },
  ];

  return (
    <div className="flex min-h-screen bg-offwhite">
      {/* Sidebar */}
      <Sidebar role="teacher" />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">Academic</h1>

        {/* Sub-header */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">List of Students</h2>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
              onClick={() =>
                navigate(`/teacher/certificates/academic/${student.id}`, {
                  state: { student }, // pass full student object
                })
              }
            >
              <h3 className="text-xl font-semibold text-primary">{student.name}</h3>
              <p className="text-gray-600 mt-2">Department: {student.dept}</p>
              <p className="text-gray-500 text-sm mt-1">ID: {student.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
