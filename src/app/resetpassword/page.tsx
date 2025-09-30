"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AuthCard from "@/components/AuthCard";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const resetPasswordEmail = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/resetpassword", { token, password });
      setVerified(true);
      toast.success("Password changed successfully!");
    } catch (error: any) {
      setError(true);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    setButtonDisabled(password.length === 0);
  }, [password]);

  return (
    <AuthCard title={loading ? "Processing..." : "Reset Password"}>
      <h2 className="p-2 mb-4 rounded bg-orange-500 text-black">
        {token ? "valid token" : "No token provided"}
      </h2>

      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          New Password
        </label>
        <input
          className="px-3 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
        />

        <button
          onClick={resetPasswordEmail}
          disabled={buttonDisabled}
          className="w-full py-2 mt-2 rounded-lg font-semibold 
                     bg-indigo-600 text-white hover:bg-indigo-700 
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     transition-colors"
        >
          {buttonDisabled ? "Enter password..." : "Reset Password"}
        </button>
      </div>

      {verified && (
        <div className="flex flex-col gap-3 items-center mt-4">
          <h2 className="text-lg font-semibold text-green-600">✅ Password Updated!</h2>
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Go to Login
          </Link>
        </div>
      )}

      {error && (
        <h2 className="text-lg font-semibold bg-red-500 text-white p-2 rounded mt-4">
          ❌ Error updating password
        </h2>
      )}
    </AuthCard>
  );
}
