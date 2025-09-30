"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/login", user);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title={loading ? "Processing..." : "Login"}>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-medium">Email</label>
        <input
          className="px-3 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label className="text-sm font-medium">Password</label>
        <input
          className="px-3 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          onClick={onLogin}
          disabled={buttonDisabled}
          className="w-full py-2 mt-4 rounded-lg font-semibold 
                     bg-indigo-600 text-white hover:bg-indigo-700 
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     transition-colors"
        >
          {buttonDisabled ? "Enter details..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
