"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { fetchCurrUser } from "@/lib/authApi";

export default function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrUser = async () => {
      try {
        const res = await fetchCurrUser();
        console.log(res)
        setUser(res)
      } catch (error) {
        console.log(error)
      }
    }

    getCurrUser();
  }, []);


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-green-800">
            Taskifier
          </Link>

          <nav className="flex space-x-5 md:space-x-12 text-[17px] font-semibold">
            <Link
              href="/"
              className="text-gray-800 hover:text-green-800 transition"
            >
              Home
            </Link>
            <Link
              href="/addtask"
              className="text-gray-800 hover:text-green-800 transition"
            >
              Add task
            </Link>
          </nav>

          {
            user ?
              <div className="flex items-center space-x-4">
                <LogoutButton />
              </div>
              :
              <div>
                <Link href="/register">
                  <button
                    className="bg-green-600 text-black cursor-pointer px-3 py-1 text-md font-medium
                         hover:bg-green-700 transition rounded-xl"
                  >
                    Log In
                  </button>
                </Link>
              </div>
          }

        </div>
      </div>
    </header>
  );
}
