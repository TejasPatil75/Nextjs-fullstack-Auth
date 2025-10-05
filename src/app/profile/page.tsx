"use client";

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthCard from "@/components/AuthCard";

export default function ProfilePage() {
  const router = useRouter();

  const [user , setUser] = useState({})
  const [loading, setLoading] = useState(true) ;

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
      setUser(res.data.data) ;
  
    } catch (error: any) {
      toast.error("Failed to fetch details");
    }
    finally{
      setLoading(false)
    }
  };

  const resetPassword = async () => {
    try {
      const emailType = "RESET" ;
      await axios.post("/api/users/profile", {user, emailType});
      toast.success("Password reset email sent");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const verifyUser = async () => {
    try {
      const emailType = "VERIFY" ;
      await axios.post("/api/users/profile", {user , emailType});
      toast.success("Verify user email sent");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
      getUserDetails() ;

  }, [])
  
  if(loading) {
    return (
      <AuthCard title="Profile">
      <p>Loading your profile...</p>
      </AuthCard>
    )
  }

  return (
    <AuthCard title="Profile">
      <div className="flex flex-col gap-4">
        <h2 className="p-2 rounded border-gray-600 border-2 text-white">
          <Link href={`/profile/${user._id}`}>UserId: {user._id}</Link>
        </h2>
        <h2 className="p-2 rounded  border-gray-600 border-2 text-white">Username: {user.username}</h2>
        <h2 className="p-2 rounded  border-gray-600 border-2 text-white">Email: {user.email}</h2>
        <h2 className="p-2 rounded  border-gray-600 border-2 text-white">
          Verified: {user.isVerified ? "✅ Yes" : "❌ No"}
        </h2>

        <button
          onClick={verifyUser}
          className="bg-purple-600 mt-4 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
        >
          Verify user
        </button>

        <button
          onClick={resetPassword}
          className="bg-gray-600 mt-2 hover:bg-gray-700 text-white font-semibold py-2 rounded transition"
        >
          Reset Password
        </button>

        <button
          onClick={logout}
          className="bg-blue-600 mt-2 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Logout
        </button>
        
      </div>
    </AuthCard>
  );
}
