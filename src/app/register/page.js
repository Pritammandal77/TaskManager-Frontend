"use client";

import { useState } from "react";
import { registerUser } from "@/lib/authApi";
import Link from "next/link";
import { toast } from "sonner";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await registerUser({ email, password });
      toast.success("Registered successfully");
      window.location.href = "/login";
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-linear-to-br from-blue-100 via-green-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join Taskifier and stay productive
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full py-2 rounded-lg text-white font-semibold
                  bg-blue-500
                     transition-all duration-200 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => (window.location.href = "/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            <Link href="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
