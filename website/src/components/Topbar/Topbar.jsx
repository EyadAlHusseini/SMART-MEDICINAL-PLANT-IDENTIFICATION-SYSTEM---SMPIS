import React from "react";

function Topbar() {
  return (
    /* Added dark:bg-slate-900 and dark:border-white/10 */
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-8 flex items-center justify-between shrink-0 transition-colors duration-300">
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
          >
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <polyline points="21 3 21 9 15 9" />
          </svg>
          <span className="hidden sm:inline">Sync</span>
        </button>

        <button className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
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
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <div className="ml-3 h-8 w-[1px] bg-slate-200 dark:bg-white/10 mx-2" />
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Plant Analyst
        </span>
      </div>
    </header>
  );
}

export default Topbar;
