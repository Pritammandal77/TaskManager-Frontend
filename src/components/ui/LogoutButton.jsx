"use client";
import { logoutUser } from "@/lib/authApi";

export default function LogoutButton() {
  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
}
