import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

function Topbar() {
  const navigate = useNavigate();
  const { user } = useData();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-8 flex items-center justify-between shrink-0 transition-colors duration-300 relative z-50">
      <span className="text-sm font-medium text-slate-800 dark:text-slate-200 hidden md:block">
        Enterprise Plant Classification System
      </span>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
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
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <polyline points="21 3 21 9 15 9" />
          </svg>
          <span className="hidden sm:inline">Sync</span>
        </button>

        <button className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mr-2">
          <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
            3
          </span>
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
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-3 pl-3 pr-1 py-1 rounded-xl transition-all duration-200 ${isDropdownOpen ? "bg-emerald-50 dark:bg-emerald-900/20" : "hover:bg-emerald-50 dark:hover:bg-emerald-900/10"}`}
          >
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                {user?.username || "asss"}
              </p>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                {user?.role || "Plant Analyst"}
              </p>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm font-bold text-slate-500 dark:text-slate-300">
                  {user?.name?.charAt(0) || "A"}
                </span>
              )}
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-2 border-b border-slate-50 dark:border-white/5 mb-1">
                <p className="text-sm font-bold text-brand-green dark:text-emerald-400">
                  My Account
                </p>
              </div>

              <button
                onClick={() => {
                  navigate("/profile-settings");
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-brand-green/20 hover:text-brand-green dark:hover:text-emerald-400 transition-colors"
              >
                Profile Settings
              </button>

              <button
                onClick={() => {
                  navigate("/change-password");
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-brand-green/20 hover:text-brand-green dark:hover:text-emerald-400 transition-colors"
              >
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
