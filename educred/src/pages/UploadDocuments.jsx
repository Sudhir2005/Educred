import React from "react";
import Layout from "../layouts/Layout";
import FileUpload from "../components/FileUpload";

function DocumentCard({ title, onUpload }) {
  return (
    <div className="w-full p-5 bg-white shadow sm:p-6 rounded-2xl hover:shadow-lg">
      <h2 className="mb-4 text-base font-semibold text-gray-700 truncate sm:text-lg">
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
    <>
      <h1 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
        📁 Upload Your Documents
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DocumentCard title="Academic Certificates" onUpload={handleUpload} />
        <DocumentCard
          title="Non-Academic Certificates"
          onUpload={handleUpload}
        />
        <DocumentCard title="Other Documents" onUpload={handleUpload} />
      </div>
    </>
  );
}
