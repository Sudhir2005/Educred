// src/pages/Portfolio.jsx
import React from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";

export default function Portfolio() {
  return (
    <Layout role="student">
      <main className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Page Title */}
        <div className="col-span-full">
          <h2 className="text-2xl font-bold text-primary">My Portfolio</h2>
        </div>

        {/* Cards */}
        <Card title="Academics" value="CGPA: 8.7" />
        <Card title="Certificates" value="5 Verified" />
        <Card title="Internships" value="2 Completed" />
        <Card title="Attendance" value="92%" />
      </main>
    </Layout>
  );
}
