import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function CertificatePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1 items-center justify-center gap-8 p-6">
        {/* Academic Certificates */}
        <Card
          title="Academic"
          value="View Academic Certificates"
          className="w-96 h-64 text-center text-2xl p-8 cursor-pointer"
          onClick={() => navigate("/teacher/certificates/academic")}
        />

        {/* Non-academic Certificates */}
        <Card
          title="Non-academic"
          value="View Non-academic Certificates"
          className="w-96 h-64 text-center text-2xl p-8 cursor-pointer"
          onClick={() => navigate("/teacher/certificates/non-academic")}
        />

        {/* Other Certificates */}
        <Card
          title="Others"
          value="View Other Certificates"
          className="w-96 h-64 text-center text-2xl p-8 cursor-pointer"
          onClick={() => navigate("/teacher/certificates/others")}
        />
      </div>
    </div>
  );
}
