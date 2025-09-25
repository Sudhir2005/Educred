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

// Layout
import Layout from "./layouts/Layout";

// 404 Page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-offwhite px-4">
    <h1 className="mb-4 text-5xl font-extrabold text-primary">404</h1>
    <p className="mb-6 text-lg text-gray-600 text-center">Oops! Page not found.</p>
    <a
      href="/"
      className="px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-primary hover:scale-105 hover:shadow-lg"
    >
      Back to Home
    </a>
  </div>
);

// Login Wrapper
const LoginWrapper = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 bg-offwhite">
    <Login />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default Login */}
        <Route path="/" element={<LoginWrapper />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<Layout role="student"><StudentDashboard /></Layout>} />
        <Route path="/student/upload" element={<Layout role="student"><UploadDocuments /></Layout>} />
        <Route path="/student/portfolio" element={<Layout role="student"><Portfolio /></Layout>} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<Layout role="teacher"><TeacherDashboard /></Layout>} />
        <Route path="/teacher/attendance" element={<Layout role="teacher"><AttendanceManagement /></Layout>} />
        <Route path="/teacher/reports" element={<Layout role="teacher"><Reports /></Layout>} />

        {/* Global Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
