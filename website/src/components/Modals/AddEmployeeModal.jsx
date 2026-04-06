import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";

export default function AddEmployeeModal({ isOpen, onClose }) {
  const { addNewEmployee } = useData();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    user: "",
    password: "",
    role: "Plant Analyst",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleClose = () => {
    setFormData({ name: "", user: "", password: "", role: "Plant Analyst" });
    setShowPass(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const initials = formData.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
    addNewEmployee({ ...formData, initials });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-[440px] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden border border-black/5 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Add Employee
          </h2>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
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
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
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
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
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
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green dark:text-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
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
                className="w-full pl-4 pr-12 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green dark:text-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
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

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Role *
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green/20 dark:text-white transition-all"
            >
              <option value="Plant Analyst">Plant Analyst</option>
              <option value="Administrator">Administrator</option>
              <option value="Senior Analyst">Senior Analyst</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t dark:border-white/5">
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
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
