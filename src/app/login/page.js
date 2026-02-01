"use client";

import { useState } from "react";
import { loginUser } from "@/lib/authApi";
import Link from "next/link";
import { toast } from "sonner";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            await loginUser({ email, password });
            toast.success("Logged in successfully");
            window.location.href = "/";
        } catch (err) {
            toast.error("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-linear-to-br from-blue-100 via-green-100 to-blue-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to continue to Taskifier
                </p>

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

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full py-2 rounded-lg text-white font-semibold bg-blue-500
                     transition-all duration-200 disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                        <Link href="/register">
                            Register
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}
