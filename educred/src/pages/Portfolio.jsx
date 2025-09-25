import React from "react";
import { FolderKanban, Briefcase, FileCheck, Book } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800">🎒 My Portfolio</h2>

      {/* Portfolio Sections */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <Book className="text-purple-600" />
            <h3 className="font-semibold text-gray-700">Academics</h3>
          </div>
          <p className="text-lg font-bold">CGPA: 8.7</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FileCheck className="text-blue-600" />
            <h3 className="font-semibold text-gray-700">Certificates</h3>
          </div>
          <p className="text-lg font-bold">5 Verified</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="text-teal-600" />
            <h3 className="font-semibold text-gray-700">Internships</h3>
          </div>
          <p className="text-lg font-bold">2 Completed</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FolderKanban className="text-pink-600" />
            <h3 className="font-semibold text-gray-700">Projects</h3>
          </div>
          <p className="text-lg font-bold">3 Live Projects</p>
        </div>
      </div>
    </div>
  );
}
