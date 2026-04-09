import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { user, updateUser } = useData();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getBarState = () => {
    if (!currentPassword) return "idle";
    if (currentPassword !== user.password) return "incorrect";
    if (!newPassword || !confirmPassword) return "idle";
    if (newPassword !== confirmPassword) return "incorrect";
    return "ready";
  };

  const barState = getBarState();

  const barColors = {
    idle: "from-blue-300 to-white dark:from-blue-900/40 dark:to-slate-900",
    incorrect: "from-red-300 to-white dark:from-red-900/40 dark:to-slate-900",
    ready:
      "from-emerald-300 to-white dark:from-emerald-900/40 dark:to-slate-900",
  };

  const isReadyToSave = barState === "ready";

  const handleSave = (e) => {
    e.preventDefault();
    if (!isReadyToSave) return;
    updateUser({ password: newPassword });
    alert("Password changed successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <div
        className={`w-full h-32 bg-gradient-to-r ${barColors[barState]} rounded-2xl mb-8 shadow-inner transition-all duration-500`}
      />

      <div className="max-w-2xl px-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
          Change Password
        </h1>

        <form className="space-y-8" onSubmit={handleSave}>
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
              Current Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-green/20 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
              New Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-green/20 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-green/20 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="pt-10 flex justify-center">
            <button
              type="submit"
              disabled={!isReadyToSave}
              className={`flex items-center gap-3 px-12 py-4 text-white rounded-2xl font-bold shadow-xl transition-all ${isReadyToSave ? "bg-brand-green hover:bg-brand-accent shadow-brand-green/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer" : "bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50 shadow-none"}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Save Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
