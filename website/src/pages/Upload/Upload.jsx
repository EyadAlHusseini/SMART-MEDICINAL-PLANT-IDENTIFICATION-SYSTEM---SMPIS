import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Upload.module.css";

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

  const removeImage = () => {
    setFile(null);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Upload Image</h1>
      <p className={styles.subtitle}>
        Upload a clear image of the plant leaf you want to classify
      </p>

      {/* Upload Card */}
      <div className={styles.uploadCard}>
        <div
          className={styles.dropZone}
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 16V4m0 0l4 4m-4-4L8 8M4 20h16" />
          </svg>

          <p className={styles.dropTitle}>Drag and drop images here</p>
          <p className={styles.dropSubtitle}>or click to browse</p>

          <button
            className={styles.selectBtn}
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
          <div className={styles.previewWrapper}>
            <div className={styles.previewItem}>
              <img src={URL.createObjectURL(file)} alt="Preview" />
              <button className={styles.removeBtn} onClick={removeImage}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Requirements */}
      <div className={styles.requirements}>
        <p className={styles.requirementsTitle}>Requirements</p>
        <p>
          • Supported formats: JPG, PNG
          <br />
          • Maximum file size: 10MB per image
          <br />
          • Image should clearly show the plant leaf
          <br />• Avoid blurry or low-light images
        </p>
      </div>

      {/* Submit Button — ONLY when file exists */}
      {file && (
        <div className={styles.actions}>
          <button
            className={styles.continueBtn}
            onClick={() => navigate("/result")}
          >
            Submit for Classification
          </button>
        </div>
      )}

      {/* Toast */}
      {showToast && <div className={styles.toast}>1 file selected</div>}
    </div>
  );
}
