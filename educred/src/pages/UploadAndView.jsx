import React from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, Eye } from "lucide-react";

export default function UploadAndView() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Upload File",
      icon: <UploadCloud className="w-10 h-10 text-blue-600 mb-3" />,
      description: "Upload your certificates or related documents securely.",
      onClick: () => navigate("/student/achievements/certificates/manage/upload"),
    },
    {
      title: "View Files",
      icon: <Eye className="w-10 h-10 text-green-600 mb-3" />,
      description: "View your uploaded and verified certificates here.",
      onClick: () => alert("View feature coming soon!"),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        📁 Manage Certificates
      </h2>

      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={card.onClick}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col items-center text-center cursor-pointer"
          >
            {card.icon}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
