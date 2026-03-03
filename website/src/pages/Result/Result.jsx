import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();

  const [showScientific, setShowScientific] = useState(true);
  const [showUsage, setShowUsage] = useState(true);
  const [showGrowth, setShowGrowth] = useState(true);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 h-10 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition-all"
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
            <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
              Classification Result
            </h1>
            <p className="text-sm text-slate-500">Analysis Complete</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 h-10 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
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

          <button className="flex items-center gap-2 h-10 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
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

          <button className="flex items-center gap-2 h-10 px-5 bg-gradient-to-r from-brand-green to-brand-accent text-white rounded-lg text-sm font-medium shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h8l4 4v12a2 2 0 01-2 2z" />
              <path d="M7 21v-8h10v8" />
            </svg>
            Save (Ctrl + S)
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        {/* Left Column: Image Preview */}
        <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Image Preview
          </h3>

          <img
            src="https://images.unsplash.com/photo-1545239705-1564e58b9e4a"
            alt="Plant preview"
            className="w-full h-[60vh] max-h-[520px] object-cover rounded-lg border border-slate-100 shadow-inner mb-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-400 text-xs mb-1">Processed by</p>
              <p className="font-semibold text-slate-900">Current User</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-400 text-xs mb-1">Timestamp</p>
              <p className="font-semibold text-slate-900">1/17/2026, 8:50 AM</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-slate-400 text-xs mb-1">Model Version</p>
              <p className="font-semibold text-slate-900">PlantNet v4.2.1</p>
            </div>
          </div>
        </div>

        {/* Right Column: Identity & Details */}
        <div className="flex flex-col gap-4">
          {/* Main Identity Card */}
          <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              Monstera Deliciosa
            </h2>
            <em className="text-slate-500 block mb-6">
              Monstera deliciosa Liebm.
            </em>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-500">Confidence Level</span>
                <span className="text-emerald-600 font-bold">96.8%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green rounded-full transition-all duration-1000 ease-out shadow-inner"
                  style={{ width: "96.8%" }}
                />
              </div>
            </div>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Common Names
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                Swiss Cheese Plant
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                Split-leaf Philodendron
              </span>
            </div>
          </div>

          {/* Collapsible Sections */}
          {[
            {
              id: "sci",
              title: "Scientific Details",
              state: showScientific,
              set: setShowScientific,
              content: (
                <>
                  <p className="mb-2">
                    <strong>Family:</strong> Araceae
                  </p>
                  <p>
                    A flowering plant native to tropical forests of southern
                    Mexico.
                  </p>
                </>
              ),
            },
            {
              id: "usage",
              title: "Industrial Usage & Notes",
              state: showUsage,
              set: setShowUsage,
              content: (
                <p>
                  Commonly cultivated as an ornamental plant and occasionally
                  for fruit production.
                </p>
              ),
            },
            {
              id: "growth",
              title: "Growth Conditions",
              state: showGrowth,
              set: setShowGrowth,
              content: (
                <p>
                  Prefers indirect light, high humidity, and well-draining soil.
                </p>
              ),
            },
          ].map((section) => (
            <div
              key={section.id}
              className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                onClick={() => section.set(!section.state)}
              >
                <span>{section.title}</span>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-normal">
                  {section.state ? "Hide" : "Show"}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${section.state ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {section.state && (
                <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Instructions */}
      <div className="mt-8 bg-brand-green/5 border border-brand-green/10 rounded-xl p-5 text-sm text-slate-600 flex items-start gap-4">
        <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white font-bold text-[10px]">
          !
        </div>
        <p>
          Review the result carefully. Save if correct, mark incorrect if
          further review is required, or export a report for documentation.
        </p>
      </div>
    </div>
  );
}
