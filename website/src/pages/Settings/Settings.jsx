import React, { useState } from "react";
import { useData } from "../../context/DataContext";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const { theme, setTheme, logout } = useData();

  const tabs = [
    {
      id: "General",
      icon: (
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
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "Appearance",
      icon: (
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
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
    },
    {
      id: "Notifications",
      icon: (
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
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      id: "Integrations",
      icon: (
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
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      id: "About",
      icon: (
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
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          System configuration and preferences
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <div className="bg-white dark:bg-slate-800 border border-black/10 dark:border-white/5 rounded-xl p-2 shadow-sm sticky top-24">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5"
              }`}
            >
              <span
                className={
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-400 dark:text-slate-500"
                }
              >
                {tab.icon}
              </span>
              {tab.id}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 border border-black/10 dark:border-white/5 rounded-xl p-8 shadow-sm min-h-[500px]">
            {activeTab === "General" && <GeneralSettings />}
            {activeTab === "Appearance" && (
              <AppearanceSettings
                currentTheme={theme}
                onThemeChange={setTheme}
              />
            )}
            {activeTab === "Notifications" && <NotificationSettings />}
            {activeTab === "Integrations" && <IntegrationSettings />}
            {activeTab === "About" && <AboutSettings />}
          </div>

          <div className="bg-red-100/80 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-red-100">
                Sign Out
              </h3>
              <p className="text-sm text-slate-600 dark:text-red-200/60">
                End your current session
              </p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, description, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="w-full flex items-center justify-between py-4 group text-left transition-colors hover:bg-slate-50/50 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg"
    >
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-brand-green transition-colors">
          {label}
        </p>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {description}
          </p>
        )}
      </div>
      <div
        className={`w-10 h-5 rounded-full relative transition-colors shrink-0 ml-4 ${checked ? "bg-brand-green" : "bg-slate-200 dark:bg-slate-700"}`}
      >
        <div
          className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${checked ? "right-1" : "left-1"}`}
        />
      </div>
    </button>
  );
}

function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b dark:border-white/10 pb-4">
        General Settings
      </h2>
      <div className="space-y-6 max-w-md">
        <div>
          <label className="text-sm font-medium text-slate-900 dark:text-slate-300 mb-2 block">
            Language
          </label>
          <select className="w-full p-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm dark:text-white focus:ring-2 focus:ring-brand-green/20 outline-none">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-900 dark:text-slate-300 mb-2 block">
            Data Retention Policy
          </label>
          <select className="w-full p-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm dark:text-white focus:ring-2 focus:ring-brand-green/20 outline-none">
            <option>90 days</option>
            <option>30 days</option>
          </select>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            How long to keep classification records
          </p>
        </div>
        <div className="pt-2">
          <Toggle
            label="Auto-save Classifications"
            description="Automatically save results after processing"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings({ currentTheme, onThemeChange }) {
  const options = [
    {
      id: "light",
      label: "Light",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      ),
    },
    {
      id: "dark",
      label: "Dark",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
    {
      id: "system",
      label: "System",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b dark:border-white/10 pb-4">
        Appearance
      </h2>
      <div>
        <p className="text-sm font-medium text-slate-900 dark:text-slate-300 mb-4">
          Theme
        </p>
        <div className="grid grid-cols-3 gap-4">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onThemeChange(opt.id)}
              className={`flex flex-col items-center gap-3 p-4 border rounded-xl transition-all ${
                currentTheme === opt.id
                  ? "border-brand-green bg-emerald-50/50 dark:bg-brand-green/10"
                  : "border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border flex items-center justify-center shadow-sm ${
                  currentTheme === opt.id
                    ? "border-brand-green text-brand-green"
                    : "border-slate-200 dark:border-slate-600 text-slate-400"
                }`}
              >
                {opt.icon}
              </div>
              <span
                className={`text-sm font-medium ${currentTheme === opt.id ? "text-brand-green" : "text-slate-600 dark:text-slate-400"}`}
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4 divide-y divide-slate-100 dark:divide-white/5">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
          Display Options
        </p>
        <Toggle label="Compact view" />
        <Toggle label="Show animations" defaultChecked={true} />
        <Toggle label="High contrast mode" />
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-white">
      <h2 className="text-lg font-semibold border-b dark:border-white/10 pb-4">
        Notifications
      </h2>
      <div className="divide-y divide-slate-100 dark:divide-white/5">
        <Toggle
          label="Classification Complete"
          description="Notify when classification is finished"
          defaultChecked={true}
        />
        <Toggle
          label="Report Generation"
          description="Notify when scheduled reports are ready"
          defaultChecked={true}
        />
        <Toggle
          label="System Updates"
          description="Notify about system maintenance and updates"
        />
        <div className="pt-6">
          <label className="text-sm font-medium mb-2 block">
            Windows Toast Notifications
          </label>
          <Toggle
            label="Enable native Windows notifications"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}

function IntegrationSettings() {
  return (
    <div className="space-y-8 text-slate-900 dark:text-white">
      <h2 className="text-lg font-semibold border-b dark:border-white/10 pb-4">
        Integrations
      </h2>
      <div>
        <p className="text-sm font-medium mb-4">Configuration Management</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Export Config
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Import Config
          </button>
        </div>
      </div>
      <div className="pt-4 space-y-4">
        <p className="text-sm font-medium">External Services</p>
        <div className="p-4 border border-slate-100 dark:border-white/5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
          <Toggle
            label="Cloud Backup"
            description="Sync data to cloud storage"
          />
        </div>
        <div className="p-4 border border-slate-100 dark:border-white/5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
          <Toggle
            label="Email Reports"
            description="Send reports via email"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}

function AboutSettings() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center gap-5 p-6 bg-gradient-to-br from-brand-green to-brand-accent rounded-xl shadow-lg shadow-brand-green/20">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white leading-tight">
            PlantClassify Enterprise
          </h2>
          <p className="text-sm text-white/80">Version 2.4.1</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          System Information
        </h3>
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-xl overflow-hidden text-sm">
          {[
            { l: "Model Version", v: "PlantNet v4.2.1" },
            { l: "Database Version", v: "2025.12.01" },
            { l: "Last Update", v: "December 5, 2025" },
            { l: "License", v: "Enterprise License" },
          ].map((row, i) => (
            <div
              key={row.l}
              className={`flex justify-between p-4 ${i !== 3 ? "border-b border-slate-200/50 dark:border-white/5" : ""}`}
            >
              <span className="text-slate-500 dark:text-slate-400">
                {row.l}
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {row.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
