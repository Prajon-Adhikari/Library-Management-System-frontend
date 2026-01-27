"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <input
        className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Login
      </button>
    </div>
  );
}
