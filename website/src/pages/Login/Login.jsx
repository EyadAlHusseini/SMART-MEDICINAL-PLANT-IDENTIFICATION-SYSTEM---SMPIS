import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Logic: Check if both fields are filled
  const isFormFilled = username.trim() !== "" && password.trim() !== "";

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#f8fafc]">
      {/* Mesh Gradient Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[120px]" />

      {/* Login Card */}
      <div className="w-full max-w-[480px] bg-white rounded-[24px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-10 mx-4">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16667 16.6667C7.70338 16.6711 6.29188 16.1254 5.2121 15.1378C4.13232 14.1503 3.46314 12.793 3.33728 11.3351C3.21142 9.87722 3.63808 8.4253 4.53262 7.26728C5.42717 6.10927 6.72427 5.32975 8.16667 5.08333C12.9167 4.16667 14.1667 3.73333 15.8333 1.66667C16.6667 3.33333 17.5 5.15 17.5 8.33333C17.5 12.9167 13.5167 16.6667 9.16667 16.6667Z"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.66667 17.5C1.66667 15 3.20833 13.0333 5.9 12.5C7.91667 12.1 10 10.8333 10.8333 10"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
            PlantClassify Enterprise
          </h1>
          <p className="text-slate-400 mt-2 font-medium">Employee Login</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-sm placeholder:text-slate-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-sm placeholder:text-slate-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-3 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between py-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-brand-green focus:ring-brand-green cursor-pointer"
              />
              <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-[#2d7260] hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* LIGHT UP BUTTON LOGIC */}
          <button
            type="submit"
            disabled={!isFormFilled}
            className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-500 active:scale-[0.98] mt-2 shadow-lg 
              ${
                isFormFilled
                  ? "bg-brand-green text-white shadow-brand-green/20 hover:bg-brand-accent cursor-pointer opacity-100"
                  : "bg-[#96b3a4]/40 text-white/70 cursor-not-allowed shadow-none opacity-80"
              }`}
          >
            Sign In
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-10">
          <div className="h-[1px] w-full bg-slate-100 mb-6" />
          <p className="text-center text-sm text-slate-400 font-medium tracking-wide">
            Internal Company System Only
          </p>
        </div>
      </div>
    </div>
  );
}
