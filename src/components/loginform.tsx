"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setRole } from "@/lib/auth";

type Props = {
  role: "doctor" | "patient";
};

export default function LoginForm({ role }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Minimal validation (non-empty only)
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Mock authentication
    setRole(role);

    // Redirect based on role
    if (role === "doctor") {
      router.push("/");
    } else {
      router.push("/patient");
    }
  };

  return (
    <div className="w-full max-w-md bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center capitalize">
        {role} Login
      </h2>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90"
        >
          Login
        </button>
      </div>
    </div>
  );
}
