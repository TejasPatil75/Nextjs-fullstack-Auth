"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AuthCard from "@/components/AuthCard";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // This function is now only called when the user clicks the button
  const verifyUserEmail = async () => {
    try {
        setLoading(true);
        await axios.post("/api/users/verifyemail", { token });
        setVerified(true);
        setError(false);
        toast.success("Email verified successfully!");
    } catch (error: any) {
        setError(true);
        toast.error(error.response?.data?.error || "Verification failed.");
    } finally {
        setLoading(false);
    }
  };

  // FIX 1: Use URLSearchParams and decodeURIComponent for a robust token
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    if (urlToken) {
        setToken(decodeURIComponent(urlToken));
    }
  }, []);

  // FIX 2: Removed the useEffect that automatically called verifyUserEmail.
  // The action now requires a user click.

  return (
    <AuthCard title="Verify Email">
      <div className="text-center">
        <h2 className="p-2 mb-4 rounded bg-orange-500 text-black">
            {token ? "Ready to Verify" : "No token found"}
        </h2>

        {/* Show this section before verification */}
        {!verified && !error && (
            <div className="flex flex-col items-center gap-4">
                <p className="text-gray-600 dark:text-gray-300">
                    Please click the button below to verify your email address.
                </p>
                <button
                    onClick={verifyUserEmail}
                    disabled={loading || !token}
                    className="w-full max-w-xs py-2 px-4 rounded-lg font-semibold 
                               bg-indigo-600 text-white hover:bg-indigo-700 
                               disabled:bg-gray-400 disabled:cursor-not-allowed
                               transition-colors"
                >
                    {loading ? "Verifying..." : "Verify My Email"}
                </button>
            </div>
        )}

        {/* Show this on successful verification */}
        {verified && (
            <div className="flex flex-col gap-3 items-center">
                <h2 className="text-lg font-semibold text-green-600">✅ Email Verified!</h2>
                <Link
                    href="/login"
                    className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                >
                    Go to Login
                </Link>
            </div>
        )}

        {/* Show this if there was an error */}
        {error && (
            <div className="flex flex-col gap-3 items-center">
                <h2 className="text-lg font-semibold bg-red-500 text-white p-2 rounded">
                    ❌ Verification Failed
                </h2>
                <p className="text-sm text-gray-500">The link may be invalid or expired.</p>
            </div>
        )}
      </div>
    </AuthCard>
  );
}