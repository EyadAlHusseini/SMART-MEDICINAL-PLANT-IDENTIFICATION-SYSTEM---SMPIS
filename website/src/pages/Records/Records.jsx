import React, { useState } from "react";
import { useData } from "../../context/DataContext";

export default function Records() {
  const [viewMode, setViewMode] = useState("grid");
  // 1. READ DYNAMIC DATA FROM CONTEXT
  const { records } = useData();

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      {/* Top Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Classification Records
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {records.length} records found
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export
          </button>

          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-white text-brand-green shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              onClick={() => setViewMode("list")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
            <button
              className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-white text-brand-green shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              onClick={() => setViewMode("grid")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Search/Filter Bar */}
      <div className="flex gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search records... (Ctrl+F)"
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Filters
        </button>
      </div>

      {/* Content Section (Using dynamic 'records' array) */}
      {viewMode === "list" ? (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-bottom border-slate-200">
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Thumbnail
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Plant Name
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Confidence
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Processed By
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Date/Time
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.map((record) => (
                  <tr
                    key={record.id}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="p-4">
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                        <img
                          src={record.img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-900">
                      {record.name}
                    </td>
                    <td className="p-4">
                      <span
                        className={`font-semibold ${record.confidence > 90 ? "text-emerald-600" : "text-rose-600"}`}
                      >
                        {record.confidence}%
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{record.user}</td>
                    <td className="p-4 text-sm text-slate-400">
                      {record.date}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-brand-green hover:bg-emerald-50 rounded-md transition-all">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-brand-green hover:bg-emerald-50 rounded-md transition-all">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group animate-in zoom-in-95 duration-300"
            >
              <div className="h-44 w-full bg-slate-100 overflow-hidden">
                <img
                  src={record.img}
                  alt={record.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 mb-4 truncate">
                  {record.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">
                      Confidence:
                    </span>
                    <span className="bg-brand-green text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                      {record.confidence}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">By:</span>
                    <span className="font-semibold text-slate-700">
                      {record.user}
                    </span>
                  </div>
                  <div className="text-[12px] text-slate-400 pt-1 font-medium">
                    {record.date}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
                  <button className="flex justify-center items-center gap-2 py-2 rounded-lg text-sm text-slate-500 hover:bg-slate-50 hover:text-brand-green transition-colors">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View
                  </button>
                  <button className="flex justify-center items-center gap-2 py-2 rounded-lg text-sm text-slate-500 hover:bg-slate-50 hover:text-brand-green transition-colors">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Tip */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-sm text-slate-600 shadow-sm">
        <strong className="text-emerald-800">Tip:</strong> Use Search to quickly
        find records. Click on any record to view details or edit metadata.
      </div>
    </div>
  );
}
