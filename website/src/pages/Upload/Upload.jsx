import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

export default function Upload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { addNewClassification } = useData();

  const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isProcessing) return;
      if (e.key === "Enter" && file) {
        e.preventDefault();
        handleUpload();
      }
      if (e.key === "Escape" && file) {
        e.preventDefault();
        setFile(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [file, isProcessing]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    setShowToast(true);
  };

  const handleUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const imageUrl = URL.createObjectURL(file);
      addNewClassification("Pothos Aureus", 98.2, imageUrl);
      setIsProcessing(false);
      navigate("/result");
    }, 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-[896px] mx-auto pb-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors">
          Upload
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Upload a clear image of the plant leaf you want to classify
        </p>
      </header>

      <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl p-8 shadow-sm transition-colors">
        {!isProcessing ? (
          <div
            className="h-72 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover:border-brand-green dark:hover:border-emerald-500 group bg-slate-50/30 dark:bg-white/5"
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0]);
            }}
          >
            <svg
              className="w-16 h-16 text-slate-300 dark:text-slate-700 group-hover:text-brand-green dark:group-hover:text-emerald-500 transition-colors mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 16V4m0 0l4 4m-4-4L8 8M4 20h16" />
            </svg>
            <p className="text-slate-900 dark:text-white font-medium text-lg">
              Drag and drop images here
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
              or click to browse
            </p>
            <button
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              type="button"
            >
              Select Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </div>
        ) : (
          <div className="h-72 flex flex-col items-center justify-center space-y-6">
            <div className="w-14 h-14 border-4 border-slate-100 dark:border-slate-800 border-t-brand-green dark:border-t-emerald-500 rounded-full animate-spin" />
            <div className="text-center">
              <p className="text-brand-green dark:text-emerald-400 font-bold text-lg animate-pulse">
                Running AI Classification...
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-sm mt-1 font-medium">
                Analyzing leaf patterns and texture
              </p>
            </div>
          </div>
        )}

        {file && !isProcessing && (
          <div className="mt-6 animate-in slide-in-from-bottom-2 duration-300 border-t dark:border-white/5 pt-6">
            <div className="flex items-center justify-between">
              <div className="relative w-36 h-36">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg border dark:border-white/10 shadow-sm"
                />
                <button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs shadow-md"
                  onClick={() => setFile(null)}
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={handleUpload}
                  className="px-8 py-3 bg-gradient-to-r from-brand-green to-brand-accent text-white font-bold rounded-xl shadow-lg hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5"
                >
                  Submit for Classification
                </button>
                <p className="text-[10px] text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest">
                  Press Enter to classify • Esc to discard
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {!isProcessing && (
        <div className="mt-6 bg-white dark:bg-slate-900 border border-black/10 dark:border-white/5 rounded-xl p-5 text-sm text-slate-500 dark:text-slate-400 shadow-sm transition-colors">
          <p className="font-semibold text-slate-700 dark:text-slate-200 mb-2">
            Requirements
          </p>
          <ul className="space-y-1">
            <li>
              • Supported formats:{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                JPG, PNG
              </span>
            </li>
            <li>
              • Maximum file size:{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                10MB
              </span>
            </li>
            <li>• Avoid blurry or low-light images</li>
          </ul>
        </div>
      )}
    </div>
  );
}
