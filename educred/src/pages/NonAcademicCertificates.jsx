import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function NonAcademicCertificates() {
  const navigate = useNavigate();

  // Example list of students
  const students = [
    { id: 1, name: "Alice Brown", dept: "Computer Science" },
    { id: 2, name: "Bob Smith", dept: "Mechanical Engineering" },
    { id: 3, name: "Charlie Johnson", dept: "Electrical Engineering" },
    { id: 4, name: "Diana Davis", dept: "Civil Engineering" },
    { id: 5, name: "Alice Brown", dept: "Computer Science" },
    { id: 6, name: "Bob Smith", dept: "Mechanical Engineering" },
    { id: 7, name: "Charlie Johnson", dept: "Electrical Engineering" },
    { id: 8, name: "Diana Davis", dept: "Civil Engineering" },
    { id: 9, name: "Diana Davis", dept: "Civil Engineering" }
  ];

  return (
    <div className="flex min-h-screen bg-offwhite">
      {/* Sidebar */}
      <Sidebar role="teacher" />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Non-Academic</h1>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">List of Students</h2>

        {/* Students as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:cursor-pointer transition-all"
              onClick={() =>
                navigate(`/teacher/certificates/non-academic/${student.id}`, {
                  state: { student },
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
