// src/components/AttendanceTable.jsx
import React from "react";

export default function AttendanceTable({ records }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-white bg-primary">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i} className="odd:bg-offwhite even:bg-white">
              <td className="px-4 py-2">{r.date}</td>
              <td className="px-4 py-2">{r.course}</td>
              <td className={`px-4 py-2 font-semibold ${r.status === "Present" ? "text-primary" : "text-secondary"}`}>
                {r.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
