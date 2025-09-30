"use client";

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthCard from "@/components/AuthCard";

export default function ProfilePage() {
  const router = useRouter();

  const [id, setId] = useState("nothing");
  const [username, setUsername] = useState("user");
  const [email, setEmail] = useState("email");
  const [verified, setVerified] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setId(res.data.data._id);
      setUsername(res.data.data.username);
      setEmail(res.data.data.email);
      setVerified(res.data.data.isVerified);
    } catch (error: any) {
      toast.error("Failed to fetch details");
    }
  };

  const resetPassword = async () => {
    try {
      const res = await axios.get("/api/users/me");
      const user = res.data.data;
      await axios.post("/api/users/profile", user);
      toast.success("Password reset email sent");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AuthCard title="Profile">
      <div className="flex flex-col gap-4">
        <h2 className="p-2 rounded bg-green-500 text-white">
          {id === "nothing" ? "Nothing" : <Link href={`/profile/${id}`}>UserId: {id}</Link>}
        </h2>
        <h2 className="p-2 rounded bg-green-500 text-white">Username: {username}</h2>
        <h2 className="p-2 rounded bg-green-500 text-white">Email: {email}</h2>
        <h2 className="p-2 rounded bg-green-500 text-white">
          Verified: {verified ? "✅ Yes" : "❌ No"}
        </h2>

        <button
          onClick={logout}
          className="bg-blue-600 mt-4 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          className="bg-purple-600 mt-2 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
        >
          Get User Details
        </button>

        <button
          onClick={resetPassword}
          className="bg-gray-600 mt-2 hover:bg-gray-700 text-white font-semibold py-2 rounded transition"
        >
          Reset Password
        </button>
      </div>
    </AuthCard>
  );
}
