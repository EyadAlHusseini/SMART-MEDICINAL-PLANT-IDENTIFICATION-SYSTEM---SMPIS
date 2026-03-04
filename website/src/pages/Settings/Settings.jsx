import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");

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
    // FIXED: Download icon for Integrations
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
    // FIXED: (i) icon for About
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
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">
          System configuration and preferences
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <div className="bg-white border border-black/10 rounded-xl p-2 shadow-sm sticky top-24">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span
                className={
                  activeTab === tab.id ? "text-white" : "text-slate-400"
                }
              >
                {tab.icon}
              </span>
              {tab.id}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm min-h-[500px]">
            {activeTab === "General" && <GeneralSettings />}
            {activeTab === "Appearance" && <AppearanceSettings />}
            {activeTab === "Notifications" && <NotificationSettings />}
            {activeTab === "Integrations" && <IntegrationSettings />}
            {activeTab === "About" && <AboutSettings />}
          </div>

          {/* FIXED: Darker Red background for Sign Out */}
          <div className="bg-red-100/80 border border-red-200 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Sign Out</h3>
              <p className="text-sm text-slate-600">End your current session</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
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

/* --- Reusable Toggle Component --- */
function Toggle({ label, description, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    /* FIXED: Wrap in button so the text is also clickable */
    <button
      onClick={() => setChecked(!checked)}
      className="w-full flex items-center justify-between py-4 group text-left transition-colors hover:bg-slate-50/50 px-2 -mx-2 rounded-lg"
    >
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900 group-hover:text-brand-green transition-colors">
          {label}
        </p>
        {description && (
          <p className="text-sm text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <div
        className={`w-10 h-5 rounded-full relative transition-colors shrink-0 ml-4 ${checked ? "bg-brand-green" : "bg-slate-200"}`}
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
      <h2 className="text-lg font-semibold text-slate-900 border-b pb-4">
        General Settings
      </h2>
      <div className="space-y-6 max-w-md">
        <div>
          {/* FIXED: Normal casing, Darker color, Identity font */}
          <label className="text-sm font-medium text-slate-900 mb-2 block">
            Language
          </label>
          <select className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 outline-none hover:border-slate-300 transition-colors">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div>
          {/* FIXED: Normal casing, Darker color, Identity font */}
          <label className="text-sm font-medium text-slate-900 mb-2 block">
            Data Retention Policy
          </label>
          <select className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 outline-none hover:border-slate-300 transition-colors">
            <option>90 days</option>
            <option>30 days</option>
          </select>
          {/* FIXED: No italics */}
          <p className="text-xs text-slate-500 mt-2">
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

function AppearanceSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-900 border-b pb-4">
        Appearance
      </h2>
      <div>
        <p className="text-sm font-medium text-slate-900 mb-4">Theme</p>
        <div className="grid grid-cols-3 gap-4">
          {["Light", "Dark", "System"].map((t) => (
            <button
              key={t}
              className={`flex flex-col items-center gap-3 p-4 border rounded-xl transition-all ${t === "Light" ? "border-brand-green bg-emerald-50/50" : "border-slate-100 hover:border-slate-300"}`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-white border flex items-center justify-center shadow-sm ${t === "Light" ? "border-brand-green text-brand-green" : "border-slate-200 text-slate-400"}`}
              >
                {t === "Light" && (
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
                )}
                {t === "Dark" && (
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
                )}
                {t === "System" && (
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
                )}
              </div>
              <span
                className={`text-sm font-medium ${t === "Light" ? "text-brand-green" : "text-slate-600"}`}
              >
                {t}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4 divide-y divide-slate-100">
        <p className="text-sm font-medium text-slate-900 mb-2">
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
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-900 border-b pb-4">
        Notifications
      </h2>
      <div className="divide-y divide-slate-100">
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
          {/* FIXED: Normal casing, Darker color, Identity font */}
          <label className="text-sm font-medium text-slate-900 mb-2 block">
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
    <div className="space-y-8">
      <h2 className="text-lg font-semibold text-slate-900 border-b pb-4">
        Integrations
      </h2>
      <div>
        <p className="text-sm font-medium text-slate-900 mb-4">
          Configuration Management
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
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
            </svg>{" "}
            Export Configuration
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>{" "}
            Import Configuration
          </button>
        </div>
      </div>
      <div className="pt-4 space-y-4">
        <p className="text-sm font-medium text-slate-900">External Services</p>
        <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
          <Toggle
            label="Cloud Backup"
            description="Sync data to cloud storage"
          />
        </div>
        <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
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
      {/* FIXED: Shield icon and Identity Gradient background */}
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
          <p className="text-xs text-white/60 mt-1 max-w-sm">
            Enterprise plant classification system for industrial and research
            applications.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4">
          System Information
        </h3>
        <div className="space-y-0 text-sm bg-slate-50 border border-slate-100 rounded-xl overflow-hidden">
          {[
            { l: "Model Version", v: "PlantNet v4.2.1" },
            { l: "Database Version", v: "2025.12.01" },
            { l: "Last Update", v: "December 5, 2025" },
            { l: "License", v: "Enterprise License" },
          ].map((row, i) => (
            <div
              key={row.l}
              className={`flex justify-between p-4 ${i !== 3 ? "border-b border-slate-200/50" : ""}`}
            >
              <span className="text-slate-500">{row.l}</span>
              <span className="font-semibold text-slate-900">{row.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4">
          Support & Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["Documentation", "Contact Support", "Check for Updates"].map(
            (btn) => (
              <button
                key={btn}
                className="text-center px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:border-brand-green hover:text-brand-green transition-all shadow-sm"
              >
                {btn}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
