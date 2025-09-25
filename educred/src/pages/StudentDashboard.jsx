// src/pages/StudentDashboard.jsx
import React from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";

export default function StudentDashboard() {
  return (
    <Layout role="student">
      <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Academic Performance" value="CGPA: 8.7" />
        <Card title="Achievements" value="5 Certificates Verified" />
        <Card title="Attendance" value="92%" />
      </main>
    </Layout>
  );
}
