import React, { useState } from "react";

const MOCK_PLANTS = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    scientific: "Monstera deliciosa",
    family: "Araceae",
    images: 245,
    status: "active",
  },
  {
    id: 2,
    name: "Ficus Elastica",
    scientific: "Ficus elastica",
    family: "Moraceae",
    images: 198,
    status: "active",
  },
  {
    id: 3,
    name: "Pothos Aureus",
    scientific: "Epipremnum aureum",
    family: "Araceae",
    images: 312,
    status: "active",
  },
  {
    id: 4,
    name: "Aloe Vera",
    scientific: "Aloe vera",
    family: "Asphodelaceae",
    images: 167,
    status: "active",
  },
  {
    id: 5,
    name: "Sansevieria",
    scientific: "Dracaena trifasciata",
    family: "Asparagaceae",
    images: 143,
    status: "review",
  },
];

const MOCK_UPLOADS = [
  {
    id: 1,
    name: "tropical_plants_v2.zip",
    date: "2025-12-04",
    size: "2.4 GB",
    status: "completed",
  },
  {
    id: 2,
    name: "houseplants_dataset.zip",
    date: "2025-12-01",
    size: "1.8 GB",
    status: "completed",
  },
  {
    id: 3,
    name: "flowering_plants.zip",
    date: "2025-11-28",
    size: "3.1 GB",
    status: "completed",
  },
];

const MOCK_EMPLOYEES = [
  {
    id: 1,
    initials: "JS",
    name: "John Smith",
    user: "jsmith",
    role: "Plant Analyst",
    active: "5 min ago",
    online: true,
  },
  {
    id: 2,
    initials: "SJ",
    name: "Sarah Johnson",
    user: "sjohnson",
    role: "Senior Analyst",
    active: "15 min ago",
    online: true,
  },
  {
    id: 3,
    initials: "MC",
    name: "Mike Chen",
    user: "mchen",
    role: "Plant Analyst",
    active: "2 hours ago",
    online: false,
  },
  {
    id: 4,
    initials: "EW",
    name: "Emma Wilson",
    user: "ewilson",
    role: "Administrator",
    active: "1 hour ago",
    online: false,
  },
  {
    id: 5,
    initials: "DB",
    name: "David Brown",
    user: "dbrown",
    role: "Plant Analyst",
    active: "30 min ago",
    online: true,
  },
];

export default function DataManagement() {
  const [activeTab, setActiveTab] = useState("Plants Database");

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Data Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage plant database, datasets, and users
        </p>
      </header>

      <div className="flex bg-slate-100/80 w-fit p-1 rounded-xl mb-6">
        {["Plants Database", "Dataset Upload", "Employee Management"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      <div className="space-y-6">
        {activeTab === "Plants Database" && <PlantsDatabaseView />}
        {activeTab === "Dataset Upload" && <DatasetUploadView />}
        {activeTab === "Employee Management" && <EmployeeManagementView />}
      </div>
    </div>
  );
}

/* --- Tab 1: Plants Database --- */
function PlantsDatabaseView() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="18"
            height="18"
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
            placeholder="Search plants..."
            className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <svg
            width="16"
            height="16"
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
        <button className="flex items-center gap-2 px-4 bg-brand-green text-white rounded-xl text-sm font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-brand-green/20">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Plant
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Plant Name
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Scientific Name
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Family
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Images
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_PLANTS.map((plant) => (
              <tr
                key={plant.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="p-4 px-6 text-sm font-medium text-slate-900">
                  {plant.name}
                </td>
                <td className="p-4 px-6 text-sm text-slate-500 italic font-serif">
                  {plant.scientific}
                </td>
                <td className="p-4 px-6 text-sm text-slate-600">
                  {plant.family}
                </td>
                <td className="p-4 px-6 text-sm text-slate-600">
                  {plant.images}
                </td>
                <td className="p-4 px-6">
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                      plant.status === "active"
                        ? "bg-brand-green text-white"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {plant.status}
                  </span>
                </td>
                <td className="p-4 px-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-brand-green hover:bg-emerald-50 rounded-lg transition-all">
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
                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
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

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 px-6 text-sm text-slate-600 shadow-sm animate-in slide-in-from-bottom-2 duration-500">
        <strong className="text-emerald-800">Total:</strong>{" "}
        {MOCK_PLANTS.length} plants in database. Inline editing available —
        double-click any cell to edit.
      </div>
    </div>
  );
}

/* --- Tab 2: Dataset Upload --- */
function DatasetUploadView() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
        <div className="border-2 border-dashed border-slate-200 rounded-xl h-80 flex flex-col items-center justify-center bg-slate-50/30 group hover:border-brand-green transition-colors cursor-pointer">
          <svg
            className="w-16 h-16 text-slate-300 group-hover:text-brand-green transition-colors mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 16V4m0 0l4 4m-4-4L8 8M4 20h16" />
          </svg>
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            Upload Training Dataset
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Drag and drop dataset files or click to browse
          </p>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white rounded-lg text-sm font-medium hover:bg-brand-accent transition-all shadow-md shadow-brand-green/10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Select Dataset
          </button>
        </div>
      </div>

      <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-6">
          Recent Uploads
        </h3>
        <div className="space-y-3">
          {MOCK_UPLOADS.map((upload) => (
            <div
              key={upload.id}
              className="flex items-center justify-between p-4 px-6 bg-emerald-50/50 border border-emerald-100 rounded-xl group hover:bg-emerald-50 transition-all"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-slate-900">
                  {upload.name}
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                  {upload.date} • {upload.size}
                </span>
              </div>
              <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest shadow-sm">
                {upload.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 px-6 text-sm text-slate-600 shadow-sm">
        {/* FIXED: Requirements text standard font and casing */}
        <strong className="text-emerald-800 font-bold mb-1 block">
          Requirements:
        </strong>
        Datasets should be in ZIP format containing labeled images. Minimum 100
        images per plant species recommended.
      </div>
    </div>
  );
}

/* --- Tab 3: Employee Management --- */
function EmployeeManagementView() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="18"
            height="18"
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
            placeholder="Search employees..."
            className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-6 bg-brand-green text-white rounded-xl text-sm font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-brand-green/20">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Employee
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Name
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Username
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Role
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Last Active
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_EMPLOYEES.map((emp) => (
              <tr
                key={emp.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="p-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      {emp.initials}
                    </div>
                    <span className="text-sm font-medium text-slate-900">
                      {emp.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 px-6 text-sm text-slate-500 font-mono">
                  {emp.user}
                </td>
                <td className="p-4 px-6 text-sm text-slate-600">{emp.role}</td>
                <td className="p-4 px-6 text-sm text-slate-500">
                  {emp.active}
                </td>
                <td className="p-4 px-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${emp.online ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-400"}`}
                    />
                    <span className="text-sm text-slate-600">
                      {emp.online ? "Online" : "Offline"}
                    </span>
                  </div>
                </td>
                <td className="p-4 px-6 text-right">
                  <div className="flex justify-end items-center gap-4">
                    <button className="text-slate-400 hover:text-brand-green transition-colors">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button className="text-slate-900 font-semibold text-sm hover:text-brand-green transition-colors whitespace-nowrap">
                      Reset Password
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 px-6 text-sm text-slate-600 shadow-sm">
        <strong className="text-emerald-800">Note:</strong> Role-based access
        control is enabled. Only administrators can modify user roles and
        permissions.
      </div>
    </div>
  );
}
