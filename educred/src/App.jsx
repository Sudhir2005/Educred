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
  <div className="p-10 text-2xl font-bold text-center text-primary">
    404 - Page Not Found
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default Login */}
        <Route path="/" element={<Login />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="attendance" element={<AttendanceManagement />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
