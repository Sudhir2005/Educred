import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DisplayCertificate() {
  const { id, certId } = useParams();
  const location = useLocation();
  const student = location.state?.student;
  const cert = location.state?.cert;

  if (!cert) {
    return (
      <div className="flex min-h-screen bg-offwhite">
        <Sidebar role="teacher" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600 text-lg">
            Certificate not found. Please go back.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />

      <div className="flex flex-col flex-1 p-6">
        {/* Student Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">
          {student ? student.name : `Student ID ${id}`}
        </h1>

        {/* Certificate Details */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 max-w-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">{cert.title}</h2>
          <p className="text-gray-600 text-lg mb-2">Year: {cert.year}</p>
          <p className="text-gray-500 mb-4">Certificate ID: {cert.id}</p>
          <p className="text-gray-700">
            This is a placeholder for certificate details. You can display an
            image, description, or even embed a PDF here.
          </p>
        </div>
      </div>
    </div>
  );
}
