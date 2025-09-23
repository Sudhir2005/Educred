// src/components/InputField.jsx
import React from "react";

export default function InputField({ label, type = "text", placeholder = "", className = "" }) {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="mb-1 font-medium text-softgray">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 border rounded-md border-softgray focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
