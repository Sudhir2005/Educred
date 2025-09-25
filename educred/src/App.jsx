// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadDocuments from "./pages/UploadDocuments";
import AttendanceManagement from "./pages/AttendanceManagement";
import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";

// Layouts
import StudentLayout from "./layouts/StudentLayout";
import TeacherLayout from "./layouts/TeacherLayout";

// 404 Component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-offwhite">
    <h1 className="mb-4 text-5xl font-extrabold text-primary">404</h1>
    <p className="mb-6 text-lg text-gray-600">Oops! Page not found.</p>
    <a
      href="/"
      className="px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-primary hover:scale-105 hover:shadow-lg"
    >
      Back to Home
    </a>
  </div>
);

// Responsive Login wrapper
const LoginWrapper = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-0 md:flex-row md:justify-center md:items-center bg-offwhite">
    <Login />
    {/* Mobile Footer Navbar only visible on small screens */}
    <div className="fixed bottom-0 w-full md:hidden">
      {/* You can reuse FooterNavbar component here if needed */}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default Login */}
        <Route path="/" element={<LoginWrapper />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="attendance" element={<AttendanceManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Global Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
