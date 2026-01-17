import ActionCard from "../../components/ActionCard/ActionCard";
import styles from "./ScanUpload.module.css";

function ScanUpload() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Scan or Upload</h1>
      <p className={styles.pageSubtitle}>Choose a method to classify plants</p>

      <div className={styles.cards}>
        <ActionCard
          title="Scan Using Camera"
          description="Use your device camera to capture plant images in real-time"
          bullets={[
            "Live preview with scanning frame",
            "Instant capture and analysis",
            "Keyboard: Ctrl + Shift + S",
          ]}
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          }
        />

        <ActionCard
          title="Upload From Files"
          description="Select images from your computer or drag and drop"
          bullets={[
            "Single or batch upload",
            "Supports JPG, PNG formats",
            "Max size: 10MB per image",
          ]}
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          }
        />
      </div>

      <div className={styles.tip}>
        <strong>Tips:</strong> Ensure good lighting and clear focus for best
        results. Images should show the plant leaves, stems, or flowers clearly.
      </div>
    </div>
  );
}

export default ScanUpload;
