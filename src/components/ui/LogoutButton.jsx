"use client";
import { logoutUser } from "@/lib/authApi";

export default function LogoutButton() {
  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/login";
  };

  return <button onClick={handleLogout} className="text-md bg-red-400 font-semibold px-3 py-1 rounded-xl cursor-pointer">Logout</button>;
}
