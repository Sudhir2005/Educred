import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Award, CalendarCheck } from "lucide-react";
import Progress from "../components/ui/Progress";

function StatCard({ icon: Icon, iconColor, title, value, progress, onClick }) {
  return (
    <div
      className="p-5 sm:p-6 bg-white rounded-2xl shadow hover:shadow-md transition w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <h3 className="font-semibold text-gray-700 text-sm sm:text-base">
          {title}
        </h3>
      </div>
      <p className="text-lg sm:text-xl font-bold truncate">{value}</p>
      {progress !== undefined && <Progress value={progress} />}
    </div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Page Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 truncate">
        📊 Student Dashboard
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard
          icon={BookOpen}
          iconColor="text-blue-600"
          title="Academic Performance"
          value="CGPA: 8.7"
          progress={87}
        />
        <StatCard
          icon={Award}
          iconColor="text-green-600"
          title="Achievements"
          value="5 Certificates Verified"
          onClick={() => navigate("/student/achievements")}
        />
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
