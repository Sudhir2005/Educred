// src/components/Card.jsx
import React from "react";

export default function Card({ title, value }) {
  return (
    <div className="flex flex-col justify-between p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
      <h3 className="font-medium text-softgray">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}
