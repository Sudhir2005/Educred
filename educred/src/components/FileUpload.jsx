import React, { useState } from "react";

export default function FileUpload({ label, onUpload }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    onUpload && onUpload(uploadedFile);
  };

  return (
    <div className="flex flex-col p-4 space-y-2 bg-white rounded-lg shadow-md w-full">
      <label className="font-medium text-gray-500">{label}</label>
      <input
        type="file"
        onChange={handleChange}
        className="p-2 border rounded-md border-gray-300 w-full"
      />
      {file && <p className="text-sm text-primary">Selected: {file.name}</p>}
    </div>
  );
}
  