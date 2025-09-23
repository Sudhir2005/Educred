import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";

export default function UploadDocuments() {
  const handleUpload = (file) => {
    alert(`Uploaded: ${file?.name}`);
  };

  return (
    <div className="flex min-h-screen bg-offwhite">
      <Sidebar role="student" />
      <div className="flex flex-col flex-1">
        <Navbar role="student" />
        <main className="grid w-full max-w-3xl gap-6 p-6 mx-auto">
          <FileUpload label="Academic Certificates" onUpload={handleUpload} />
          <FileUpload label="Non-Academic Certificates" onUpload={handleUpload} />
          <FileUpload label="Other Documents" onUpload={handleUpload} />
        </main>
      </div>
    </div>
  );
}
