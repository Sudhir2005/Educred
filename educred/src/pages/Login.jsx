import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/teacher/dashboard");
    }
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      {/* Full Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-offwhite via-gray-100 to-offwhite"></div>

      {/* Decorative Circles */}
      <div className="absolute w-[50vw] h-[50vw] max-w-96 max-h-96 rounded-full -top-24 -left-24 bg-primary opacity-20 animate-pulse"></div>
      <div className="absolute w-[55vw] h-[55vw] max-w-[28rem] max-h-[28rem] rounded-full -bottom-24 -right-24 bg-secondary opacity-20 animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm p-6 bg-white shadow-2xl rounded-3xl sm:max-w-md md:max-w-lg lg:max-w-xl sm:p-8 lg:p-10">
        <h1 className="mb-6 text-2xl font-extrabold text-center text-primary sm:text-3xl md:text-4xl sm:mb-8">
          EduCred
        </h1>

        {/* Role Toggle */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 sm:gap-4 sm:mb-8">
          <Button
            variant={role === "student" ? "primary" : "outline"}
            onClick={() => setRole("student")}
            className="flex-1 py-2 text-sm sm:text-base md:text-lg font-semibold min-w-[100px] sm:min-w-[120px]"
          >
            Student
          </Button>
          <Button
            variant={role === "teacher" ? "primary" : "outline"}
            onClick={() => setRole("teacher")}
            className="flex-1 py-2 text-sm sm:text-base md:text-lg font-semibold min-w-[100px] sm:min-w-[120px]"
          >
            Teacher
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <InputField label="Email / Team ID" placeholder="Enter your ID" />
          <InputField label="Password" type="password" placeholder="••••••" />

          <Button
            type="submit"
            className="w-full py-3 mt-4 text-base font-semibold transition-all sm:text-lg sm:mt-6 hover:scale-105 hover:shadow-lg"
          >
            Login
          </Button>
        </form>

        <p className="mt-4 text-xs text-center text-softgray sm:mt-6 sm:text-sm md:text-base">
          {role === "student"
            ? "Login with your Student ID / Email"
            : "Login with Teacher credentials"}
        </p>
      </div>
    </div>
  );
}
