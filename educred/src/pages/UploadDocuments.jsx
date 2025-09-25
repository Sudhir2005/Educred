// src/pages/UploadDocuments.jsx
import React from "react";
import Layout from "../layouts/Layout";
import FileUpload from "../components/FileUpload";

export default function UploadDocuments() {
  const handleUpload = (file) => {
    alert(`Uploaded: ${file?.name}`);
  };

  return (
    <Layout role="student">
      {/* Centered container with max width */}
      <div className="flex justify-center w-full">
        <main className="grid w-full max-w-4xl gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Academic Certificates */}
          <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Academic Certificates
            </h2>
            <FileUpload label="Select File" onUpload={handleUpload} />
          </div>

          {/* Non-Academic Certificates */}
          <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Non-Academic Certificates
            </h2>
            <FileUpload label="Select File" onUpload={handleUpload} />
          </div>

          {/* Other Documents */}
          <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Other Documents
            </h2>
            <FileUpload label="Select File" onUpload={handleUpload} />
          </div>
        </main>
      </div>
    </Layout>
  );
}
