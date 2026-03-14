import React, { useState } from "react";
import { useData } from "../../context/DataContext";

export default function AddEmployeeModal({ isOpen, onClose }) {
  const { addNewEmployee } = useData();
  const [showPass, setShowPass] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    user: "",
    password: "",
    role: "Plant Analyst",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate initials (e.g. "John Smith" -> "JS")
    const initials = formData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    addNewEmployee({ ...formData, initials });

    // Reset and close
    setFormData({ name: "", user: "", password: "", role: "Plant Analyst" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[440px] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">Add Employee</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              required
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Username *
            </label>
            <input
              required
              type="text"
              placeholder="jsmith"
              value={formData.user}
              onChange={(e) =>
                setFormData({ ...formData, user: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <input
                required
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-4 pr-20 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
              />
              <div className="absolute right-2 top-1.5 flex gap-1">
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="p-1.5 text-slate-400 hover:text-slate-600"
                >
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
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Role *
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20"
            >
              <option>Plant Analyst</option>
              <option>Administrator</option>
              <option>Senior Analyst</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-brand-green text-white rounded-lg text-sm font-semibold hover:bg-brand-accent transition-all shadow-md shadow-brand-green/10"
            >
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
