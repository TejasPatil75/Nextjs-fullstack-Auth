"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AuthCard from "@/components/AuthCard";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <AuthCard title="Verify Email">
      <h2 className="p-2 mb-4 rounded bg-orange-500 text-black">
        {token ? "valid token" : "No token provided"}
      </h2>

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

      {error && (
        <h2 className="text-lg font-semibold bg-red-500 text-white p-2 rounded">
          ❌ Verification Failed
        </h2>
      )}
    </AuthCard>
  );
}
