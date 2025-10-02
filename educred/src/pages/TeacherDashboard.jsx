import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1">
        <main className="flex flex-col gap-6 p-6">
          {/* Navigate to CertificatePage */}
          <Card
            title="Certificate"
            value="View Certificates"
            className="cursor-pointer"
            onClick={() => navigate("/teacher/certificates")}
          />

          {/* Navigate to Upload Documents */}
          <Card
            title="Additional Documents"
            value="Upload/View Documents"
            className="cursor-pointer"
            onClick={() => navigate("/teacher/upload-documents")}
          />
        </main>
      </div>
    </div>
  );
}
