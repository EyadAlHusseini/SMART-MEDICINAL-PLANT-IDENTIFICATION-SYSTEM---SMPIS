import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import AddEmployeeModal from "../../components/Modals/AddEmployeeModal";

export default function DataManagement() {
  const [activeTab, setActiveTab] = useState("Plants Database");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employees } = useData(); // 1. Read global employees

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Data Management
        </h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Manage plant database, datasets, and users
        </p>
      </header>

      <div className="flex bg-slate-100/80 w-fit p-1 rounded-xl mb-6">
        {["Plants Database", "Dataset Upload", "Employee Management"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      <div className="space-y-6">
        {activeTab === "Plants Database" && <PlantsDatabaseView />}
        {activeTab === "Dataset Upload" && (
          <div className="p-10 text-center text-slate-400">
            Dataset Upload View...
          </div>
        )}
        {activeTab === "Employee Management" && (
          <EmployeeManagementView
            employees={employees}
            onAdd={() => setIsModalOpen(true)}
          />
        )}
      </div>
    </div>
  );
}

function PlantsDatabaseView() {
  return (
    <div className="p-8 bg-white border border-black/10 rounded-xl text-center text-slate-400">
      Plants Database View Content...
    </div>
  );
}

function EmployeeManagementView({ employees, onAdd }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-6 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-green/20"
          />
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-6 bg-brand-green text-white rounded-xl text-sm font-medium hover:bg-brand-accent shadow-lg shadow-brand-green/20 transition-all"
        >
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
            <tr className="border-b border-slate-100 bg-slate-50/50">
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
                Status
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50/50">
                <td className="p-4 px-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
                    {emp.initials}
                  </div>
                  <span className="font-medium text-slate-900">{emp.name}</span>
                </td>
                <td className="p-4 px-6 text-slate-500 font-mono text-xs">
                  {emp.user}
                </td>
                <td className="p-4 px-6 text-slate-600">{emp.role}</td>
                <td className="p-4 px-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${emp.online ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-400"}`}
                    />
                    <span className="text-slate-600">
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
                    <button className="text-slate-900 font-bold hover:text-brand-green whitespace-nowrap text-xs uppercase tracking-tight">
                      Reset Password
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
