"use client";

import { useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";

export default function ClientAuthProvider() {
  useEffect(() => {
    axiosInstance.post("/api/v1/user/refresh").catch(() => {});
  }, []);

  return null;
}
