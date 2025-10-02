import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function TeacherSignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Teacher account created successfully");
    navigate("/teacher/dashboard"); // ✅ Navigate to dashboard
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-offwhite via-gray-100 to-offwhite"></div>

      {/* Decorative Circles */}
      <div className="absolute w-[50vw] h-[50vw] max-w-96 max-h-96 rounded-full -top-24 -left-24 bg-primary opacity-20 animate-pulse"></div>
      <div className="absolute w-[55vw] h-[55vw] max-w-[28rem] max-h-[28rem] rounded-full -bottom-24 -right-24 bg-secondary opacity-20 animate-pulse"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm p-6 bg-white shadow-2xl rounded-3xl sm:max-w-md md:max-w-lg lg:max-w-xl sm:p-8 lg:p-10">
        <h1 className="mb-6 text-2xl font-extrabold text-center text-primary sm:text-3xl md:text-4xl sm:mb-8">
          Create an Account
        </h1>

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <InputField label="Name" placeholder="Enter your name" />
          <InputField label="Email" type="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" placeholder="••••••" />
          <InputField label="Confirm Password" type="password" placeholder="••••••" />
          <InputField label="Teacher ID" placeholder="Enter your Teacher ID" />

          <Button
            type="submit"
            className="w-full py-3 mt-4 text-base font-semibold transition-all sm:text-lg sm:mt-6 hover:scale-105 hover:shadow-lg"
          >
            Sign Up
          </Button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-blue-600 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
