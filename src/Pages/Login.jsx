import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // your login logic here
    console.log("Logging in:", email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
