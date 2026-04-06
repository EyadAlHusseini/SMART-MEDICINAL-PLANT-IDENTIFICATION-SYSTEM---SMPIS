import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import AddEmployeeModal from "../../components/Modals/AddEmployeeModal";

export default function DataManagement() {
  const [activeTab, setActiveTab] = useState("Plants Database");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employees, records } = useData();

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors">
          Data Management
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
          Manage organization datasets and users
        </p>
      </header>

      <div className="flex bg-slate-100 dark:bg-slate-800 w-fit p-1 rounded-xl mb-6 transition-colors">
        {["Plants Database", "Dataset Upload", "Employee Management"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      <div className="space-y-6">
        {activeTab === "Employee Management" && (
          <EmployeeManagementView
            employees={employees}
            onAdd={() => setIsModalOpen(true)}
          />
        )}
        {activeTab !== "Employee Management" && (
          <div className="h-64 flex items-center justify-center bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl text-slate-400 italic text-sm">
            Component content loading...
          </div>
        )}
      </div>
    </div>
  );
}

function EmployeeManagementView({ employees, onAdd }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="flex-1 max-w-lg pl-6 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm dark:text-white outline-none focus:ring-2 focus:ring-brand-green/20"
        />
        <button
          onClick={onAdd}
          className="px-6 bg-brand-green text-white rounded-xl text-sm font-medium hover:bg-brand-accent shadow-lg shadow-brand-green/20 transition-all"
        >
          Add Employee
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden shadow-sm transition-colors">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5">
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Employee
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Role
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Status
              </th>
              <th className="p-4 px-6 text-sm font-semibold text-slate-900 dark:text-slate-200 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-white/5 text-sm">
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <td className="p-4 px-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
                    {emp.initials}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {emp.name}
                    </p>
                    <p className="text-xs text-slate-500 font-mono tracking-tighter">
                      {emp.user}
                    </p>
                  </div>
                </td>
                <td className="p-4 px-6 text-slate-600 dark:text-slate-400 font-medium">
                  {emp.role}
                </td>
                <td className="p-4 px-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${emp.online ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-400 dark:bg-slate-600"}`}
                    />
                    <span className="text-slate-600 dark:text-slate-400">
                      {emp.online ? "Online" : "Offline"}
                    </span>
                  </div>
                </td>
                <td className="p-4 px-6 text-right">
                  <button className="text-slate-900 dark:text-white font-bold hover:text-brand-green dark:hover:text-emerald-400 text-xs uppercase tracking-tight">
                    Reset Password
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
