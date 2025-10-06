import React from "react";
import { useNavigate } from "react-router-dom";
import { FileBadge, FileText } from "lucide-react";

export default function StuAchievement() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Certificates",
      icon: <FileBadge className="w-10 h-10 text-blue-600 mb-3" />,
      description: "View all your verified and uploaded certificates.",
      onClick: () => navigate("/student/achievements/certificates"),
    },
    {
      title: "Additional Documents",
      icon: <FileText className="w-10 h-10 text-green-600 mb-3" />,
      description: "Access your additional uploaded achievements and documents.",
      onClick: () => navigate("/student/achievements/additional-documents"),
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        🏅 Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
