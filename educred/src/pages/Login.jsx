import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-offwhite">
      {/* Decorative Background Circles */}
      <div className="absolute rounded-full -top-32 -left-32 w-80 h-80 bg-primary opacity-30 animate-pulse"></div>
      <div className="absolute rounded-full -bottom-32 -right-32 w-96 h-96 bg-secondary opacity-30 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md p-10 bg-white shadow-2xl rounded-3xl">
        {/* Logo / Header */}
        <h1 className="mb-8 text-4xl font-extrabold text-center text-primary">EduCred</h1>

        {/* Role Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={role === "student" ? "primary" : "outline"}
            onClick={() => setRole("student")}
            className="flex-1 py-2 text-lg font-semibold"
          >
            Student
          </Button>
          <Button
            variant={role === "teacher" ? "primary" : "outline"}
            onClick={() => setRole("teacher")}
            className="flex-1 py-2 text-lg font-semibold"
          >
            Teacher
          </Button>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          <InputField label="Email / Team ID" placeholder="Enter your ID" />
          <InputField label="Password" type="password" placeholder="••••••" />
        </div>

        {/* Login Button */}
        <Button className="w-full py-3 mt-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
          Login
        </Button>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-center text-softgray">
          {role === "student"
            ? "Login with your Student ID / Email"
            : "Login with Teacher credentials"}
        </p>
      </div>
    </div>
  );
}
