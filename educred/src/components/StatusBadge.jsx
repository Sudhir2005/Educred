// src/components/StatusBadge.jsx
import React from "react";

export default function StatusBadge({ status }) {
  const colors = {
    Approved: "bg-green-500 text-white",
    Pending: "bg-yellow-400 text-white",
    Rejected: "bg-red-500 text-white",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${colors[status] || "bg-gray-400 text-white"}`}>
      {status}
    </span>
  );
}
