// src/components/FileUpload.jsx
import React, { useState } from "react";
import Button from "./Button";

export default function FileUpload({ label, onUpload }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    onUpload && onUpload(e.target.files[0]);
  };

  return (
    <div className="flex flex-col p-4 space-y-2 bg-white rounded-lg shadow-md">
      <label className="font-medium text-softgray">{label}</label>
      <input type="file" onChange={handleChange} className="p-2 border rounded-md border-softgray" />
      {file && <p className="text-sm text-primary">Selected: {file.name}</p>}
    </div>
  );
}
