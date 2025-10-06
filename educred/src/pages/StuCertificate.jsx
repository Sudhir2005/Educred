import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Medal, FileStack } from "lucide-react";

export default function StuCertificate() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Academic Certificates",
      icon: <GraduationCap className="w-10 h-10 text-blue-600 mb-3" />,
      description: "View certificates related to your academic achievements.",
    },
    {
      title: "Non-Academic Certificates",
      icon: <Medal className="w-10 h-10 text-green-600 mb-3" />,
      description: "Explore certificates earned in extracurricular activities.",
    },
    {
      title: "Other Certificates",
      icon: <FileStack className="w-10 h-10 text-purple-600 mb-3" />,
      description: "See miscellaneous certificates and recognitions.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        📚 Certificates
      </h2>

      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate("/student/achievements/certificates/manage")}
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
