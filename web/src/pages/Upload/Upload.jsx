import { useRef, useState, useEffect } from "react";
import styles from "./Upload.module.css";

export default function Upload() {
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [showToast, setShowToast] = useState(false);

  /* ---------- Helpers ---------- */

  const handleFiles = (selectedFiles) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    // Replace previous files completely
    setFiles(selectedFiles);
    setShowToast(true);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
    e.target.value = ""; // reset input
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );
    handleFiles(droppedFiles);
  };

  const handleRemoveImage = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  /* ---------- Toast Auto Hide ---------- */

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showToast]);

  /* ---------- UI ---------- */

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Upload Images</h1>
        <p className={styles.subtitle}>Select or drag images to classify</p>
      </div>

      <div className={styles.uploadCard}>
        {/* Drop Zone (ALWAYS VISIBLE) */}
        <div
          className={styles.dropZone}
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {/* Upload Icon */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>

          <p className={styles.dropTitle}>Drag and drop images here</p>
          <p className={styles.dropSubtitle}>or click to browse</p>

          <button
            type="button"
            className={styles.selectBtn}
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
            multiple
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>

        {/* Selected Images */}
        {files.length > 0 && (
          <div className={styles.selectedSection}>
            <p className={styles.selectedTitle}>
              Selected Images ({files.length})
            </p>

            <div className={styles.imageGrid}>
              {files.map((file, index) => (
                <div key={index} className={styles.imageItem}>
                  <img src={URL.createObjectURL(file)} alt={file.name} />

                  <button
                    className={styles.removeBtn}
                    onClick={() => handleRemoveImage(index)}
                  >
                    ✕
                  </button>

                  <span className={styles.imageName}>{file.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Validation Bar */}
        {files.length > 0 && (
          <div className={styles.validationBar}>
            <div className={styles.validationLeft}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A63E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>All images validated</span>
            </div>

            <button className={styles.submitBtn}>
              Submit for Classification
            </button>
          </div>
        )}
      </div>

      {/* Files Selected Toast */}
      {showToast && (
        <div className={styles.toast}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>{files.length} file(s) selected</span>
        </div>
      )}
    </div>
  );
}
