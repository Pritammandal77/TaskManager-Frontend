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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-green-800">
            Taskifier
          </Link>

          <nav className="flex space-x-5 md:space-x-12 text-[17px] font-semibold">
            <Link
              href="/home"
              className="text-gray-800 hover:text-green-800 transition"
            >
              Home
            </Link>
            <Link
              href="/addtask"
              className="text-gray-800 hover:text-green-800 transition"
            >
              Add Task
            </Link>
          </nav>

          {/* Logout Button */}
          <div className="flex items-center space-x-4">
            <LogoutButton />
          </div>

        </div>
      </div>
    </header>
  );
}
