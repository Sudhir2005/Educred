import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUp } from "lucide-react";

export default function UploadFile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        📤 Upload Certificate
      </h2>

      {/* Select File Card */}
      <div
        onClick={() => fileInputRef.current.click()}
        className="p-8 bg-white rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col items-center text-center cursor-pointer"
      >
        <FileUp className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Select File</h3>
        <p className="text-sm text-gray-600 mb-2">
          Click here to choose a file from your computer.
        </p>
        {fileName && (
          <p className="text-sm text-green-600 font-medium mt-2">
            Selected: {fileName}
          </p>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Cancel Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:scale-105 hover:bg-gray-600 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
