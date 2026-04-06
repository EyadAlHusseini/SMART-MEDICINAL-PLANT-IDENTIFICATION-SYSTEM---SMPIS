import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

export default function Result() {
  const navigate = useNavigate();
  const { records } = useData();

  const [showScientific, setShowScientific] = useState(true);
  const [showUsage, setShowUsage] = useState(true);
  const [showGrowth, setShowGrowth] = useState(true);

  const latestResult = records[0];

  if (!latestResult) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
        <p className="text-lg font-medium">No classification result found.</p>
        <button
          onClick={() => navigate("/upload")}
          className="mt-4 text-brand-green font-bold hover:underline"
        >
          Go to Upload
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 h-10 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            onClick={() => navigate("/dashboard")}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Dashboard
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white leading-tight">
              Classification Result
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Analysis Complete
            </p>
          </div>
        </div>

        {/* RESTORED: All Header Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 h-10 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
            </svg>
            Export
          </button>
          <button className="flex items-center gap-2 h-10 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 9v4m0 4h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Mark Incorrect
          </button>
          <button className="flex items-center gap-2 h-10 px-5 bg-gradient-to-r from-brand-green to-brand-accent text-white rounded-lg text-sm font-medium shadow-lg hover:-translate-y-0.5 transition-all">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l4 4v12a2 2 0 0 1-2 2z" />
              <path d="M7 21v-8h10v8" />
            </svg>
            Save (Ctrl + S)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        {/* Left Column */}
        <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl p-6 shadow-sm transition-colors">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-300 uppercase tracking-wider mb-4">
            Image Preview
          </h3>
          <img
            src={latestResult.img}
            alt=""
            className="w-full h-[60vh] max-h-[520px] object-cover rounded-lg border dark:border-white/10 shadow-inner mb-6"
          />

          {/* FIXED: Metadata Typography */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1 font-medium">
                Processed by
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {latestResult.user}
              </p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1 font-medium">
                Timestamp
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {latestResult.date}
              </p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-lg">
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1 font-medium">
                Model Version
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                PlantNet v4.2.1
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl p-6 shadow-sm transition-colors">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {latestResult.name}
            </h2>
            <em className="text-slate-500 dark:text-slate-400 block mb-6 italic font-serif text-base">
              {latestResult.scientific || "Monstera deliciosa Liebm."}
            </em>
            <div className="space-y-2 mb-6 text-sm font-medium">
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Confidence Level</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  {latestResult.confidence}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green dark:bg-emerald-500 transition-all duration-1000"
                  style={{ width: `${latestResult.confidence}%` }}
                />
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
              Common Names
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                Swiss Cheese Plant
              </span>
              <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                Split-leaf Philodendron
              </span>
            </div>
          </div>

          {/* RESTORED: All 3 sections including Usage */}
          {[
            {
              id: "sci",
              title: "Scientific Details",
              state: showScientific,
              set: setShowScientific,
              content: `Family: Araceae. A flowering plant native to tropical forests of southern Mexico.`,
            },
            {
              id: "usage",
              title: "Industrial Usage & Notes",
              state: showUsage,
              set: setShowUsage,
              content:
                "Commonly cultivated as an ornamental plant and occasionally for fruit production.",
            },
            {
              id: "growth",
              title: "Growth Conditions",
              state: showGrowth,
              set: setShowGrowth,
              content:
                "Prefers indirect light, high humidity, and well-draining soil.",
            },
          ].map((sec) => (
            <div
              key={sec.id}
              className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => sec.set(!sec.state)}
                className="w-full flex justify-between items-center p-5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span>{sec.title}</span>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-normal">
                  {sec.state ? "Hide" : "Show"}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${sec.state ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>
              {sec.state && (
                <div className="px-5 pb-5 animate-in slide-in-from-top-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t dark:border-white/5 pt-3">
                  {sec.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
