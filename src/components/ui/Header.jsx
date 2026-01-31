"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

export default function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCurrUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user/me",
          {
            withCredentials: true
          }
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCurrUser();
  }, []);

  // if (!user) return <p>Loading...</p>;

  if (user) {
    console.log(user)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / App Name */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TaskMaster
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/tasks"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Tasks
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Profile
            </Link>
          </nav>

          {/* Logout Button */}
          <div className="flex items-center space-x-4">
            <LogoutButton />
          </div>

          {/* Mobile Menu Button (optional) */}
          {/* <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}
