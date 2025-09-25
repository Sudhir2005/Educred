import React from "react";
import Layout from "../layouts/Layout";
import FileUpload from "../components/FileUpload";

function DocumentCard({ title, onUpload }) {
  return (
    <div className="p-5 sm:p-6 bg-white rounded-2xl shadow hover:shadow-lg w-full">
      <h2 className="mb-4 text-base sm:text-lg font-semibold text-gray-700 truncate">
        {title}
      </h2>
      <FileUpload label="Select File" onUpload={onUpload} />
    </div>
  );
}

export default function UploadDocuments() {
  const handleUpload = (file) => {
    alert(`Uploaded: ${file?.name}`);
  };

  return (
    <Layout role="student">
      {/* Only page-specific title, no EduCred logo */}
      <h1 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        📁 Upload Your Documents
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DocumentCard title="Academic Certificates" onUpload={handleUpload} />
        <DocumentCard title="Non-Academic Certificates" onUpload={handleUpload} />
        <DocumentCard title="Other Documents" onUpload={handleUpload} />
      </div>
    </Layout>
  );
}
