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

  // --- LOGIC: Keyboard Shortcuts ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If we are already processing, ignore shortcuts
      if (isProcessing) return;

      // 1. ENTER to Submit (only if file exists)
      if (e.key === "Enter" && file) {
        e.preventDefault();
        handleUpload();
      }

      // 2. ESC to Discard (only if file exists)
      if (e.key === "Escape" && file) {
        e.preventDefault();
        setFile(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [file, isProcessing]); // Dependencies ensure logic uses current state

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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    setIsProcessing(true);

    // Simulate ML Model classification (2 seconds)
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
        <h1 className="text-2xl font-semibold text-slate-900">Upload</h1>
        <p className="text-slate-500 mt-1">
          Upload a clear image of the plant leaf you want to classify
        </p>
      </header>

      {/* Upload Card */}
      <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
        {!isProcessing ? (
          <div
            className="h-72 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover:border-brand-green group bg-slate-50/30"
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <svg
              className="w-16 h-16 text-slate-300 group-hover:text-brand-green transition-colors mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 16V4m0 0l4 4m-4-4L8 8M4 20h16" />
            </svg>

            <p className="text-slate-900 font-medium text-lg">
              Drag and drop images here
            </p>
            <p className="text-slate-500 text-sm mb-4">or click to browse</p>

            <button
              className="px-4 py-2 bg-slate-100 hover:bg-brand-light text-slate-700 text-sm font-medium rounded-md transition-colors"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.click();
              }}
            >
              Select Files
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </div>
        ) : (
          /* Processing State */
          <div className="h-72 flex flex-col items-center justify-center space-y-6">
            <div className="w-14 h-14 border-4 border-slate-100 border-t-brand-green rounded-full animate-spin" />
            <div className="text-center">
              <p className="text-brand-green font-bold text-lg animate-pulse">
                Running AI Classification...
              </p>
              <p className="text-slate-400 text-sm mt-1 font-medium tracking-tight">
                Analyzing leaf patterns and texture
              </p>
            </div>
          </div>
        )}

        {/* Preview */}
        {file && !isProcessing && (
          <div className="mt-6 animate-in slide-in-from-bottom-2 duration-300 border-t border-slate-50 pt-6">
            <div className="flex items-center justify-between">
              <div className="relative w-36 h-36 group">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg border border-slate-200 shadow-sm"
                />
                <button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs shadow-md hover:bg-rose-700 transition-colors font-bold"
                  onClick={() => setFile(null)}
                  title="Discard (Esc)"
                >
                  ✕
                </button>
              </div>

              {/* Submit Button - MOVED ABOVE REQUIREMENTS */}
              <div className="flex flex-col items-end gap-2">
                <button
                  className="px-8 py-3 bg-gradient-to-r from-brand-green to-brand-accent text-white font-bold rounded-xl shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5 active:scale-95"
                  onClick={handleUpload}
                >
                  Submit for Classification
                </button>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Press Enter to classify • Esc to discard
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Requirements Section - NOW AT THE BOTTOM */}
      {!isProcessing && (
        <div className="mt-6 bg-white border border-black/10 rounded-xl p-5 text-sm text-slate-500 shadow-sm animate-in fade-in duration-300">
          <p className="font-semibold text-slate-700 mb-2 tracking-tight">
            Requirements
          </p>
          <ul className="space-y-1">
            <li>
              • Supported formats:{" "}
              <span className="text-slate-900 font-medium">JPG, PNG</span>
            </li>
            <li>
              • Maximum file size:{" "}
              <span className="text-slate-900 font-medium">10MB per image</span>
            </li>
            <li>• Image should clearly show the plant leaf</li>
            <li>• Avoid blurry or low-light images</li>
          </ul>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300 z-50">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">
            1 file selected
          </span>
        </div>
      )}
    </div>
  );
}
