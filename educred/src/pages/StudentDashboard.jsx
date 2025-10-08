import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Award, CalendarCheck } from "lucide-react";
import Progress from "../components/ui/Progress";

function StatCard({ icon: Icon, iconColor, title, value, progress, onClick }) {
  return (
    <div
      className="w-full p-5 transition bg-white shadow cursor-pointer sm:p-6 rounded-2xl hover:shadow-md"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
          {title}
        </h3>
      </div>
      <p className="text-lg font-bold truncate sm:text-xl">{value}</p>
      {progress !== undefined && <Progress value={progress} />}
    </div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-6 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold text-gray-800 truncate sm:text-2xl md:text-3xl">
        📊 Student Dashboard
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Academic Performance Button */}
        <StatCard
          icon={BookOpen}
          iconColor="text-blue-600"
          title="Academic Performance"
          value="CGPA: 8.7"
          progress={87}
          onClick={() => navigate("/teacher/certificates/academic")} // 👈 redirect here
        />

        {/* Achievements */}
        <StatCard
          icon={Award}
          iconColor="text-green-600"
          title="Achievements"
          value="5 Certificates Verified"
          onClick={() => navigate("/student/achievements")}
        />

        {/* Attendance */}
        <StatCard
          icon={CalendarCheck}
          iconColor="text-orange-600"
          title="Attendance"
          value="92%"
          progress={92}
        />
      </div>
    </div>
  );
}
