import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AcademicCertificates() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student; // student passed via navigate

  // Dummy certificates for now
  const certificates = [
    { id: 1, title: "AI Workshop", year: "2023" },
    { id: 2, title: "Hackathon Winner", year: "2024" },
    { id: 3, title: "Data Science Certification", year: "2022" },
  ];

  const handleCardClick = (cert) => {
    navigate(`/teacher/certificates/academic/${id}/certificate/${cert.id}`, {
      state: { student, cert },
    });
  };

  return (
    <div className="flex min-h-screen bg-offwhite">
      {/* Sidebar */}
      <Sidebar role="teacher" />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Student Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">
          {student ? student.name : `Student ID ${id}`}
        </h1>

        {/* Sub-header */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          List of Certificates
        </h2>

        {/* Certificates in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCardClick(cert)}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:cursor-pointer transition-all"
            >
              <h3 className="text-xl font-semibold text-primary">{cert.title}</h3>
              <p className="text-gray-600 mt-2">Year: {cert.year}</p>
              <p className="text-gray-500 text-sm mt-1">Certificate ID: {cert.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
