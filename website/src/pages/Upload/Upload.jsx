import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useState(false);

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

  return (
    <div className="animate-in fade-in duration-500 max-w-[896px] mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Upload Image</h1>
        <p className="text-slate-500 mt-1">
          Upload a clear image of the plant leaf you want to classify
        </p>
      </header>

      {/* Upload Card */}
      <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
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

          <p className="text-slate-900 font-medium">
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

        {/* Preview */}
        {file && (
          <div className="mt-6 animate-in slide-in-from-bottom-2 duration-300">
            <div className="relative w-36 h-36 group">
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg border border-slate-200 shadow-sm"
              />
              <button
                className="absolute -top-2 -right-2 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs shadow-md hover:bg-rose-700 transition-colors"
                onClick={() => setFile(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Requirements Section */}
      <div className="mt-6 bg-white border border-black/10 rounded-xl p-5 text-sm text-slate-500 shadow-sm">
        <p className="font-semibold text-slate-700 mb-2 uppercase tracking-wider text-[11px]">
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

      {/* Submit Button */}
      {file && (
        <div className="mt-8 flex justify-end animate-in fade-in zoom-in-95 duration-300">
          <button
            className="px-6 py-2.5 bg-gradient-to-r from-brand-green to-brand-accent text-white font-medium rounded-lg shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5"
            onClick={() => navigate("/result")}
          >
            Submit for Classification
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-sm font-medium">1 file selected</span>
        </div>
      )}
    </div>
  );
}
