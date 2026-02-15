import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

export default function Result() {
  const navigate = useNavigate();

  const [showScientific, setShowScientific] = useState(true);
  const [showUsage, setShowUsage] = useState(true);
  const [showGrowth, setShowGrowth] = useState(true);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            className={styles.backBtn}
            onClick={() => navigate("/dashboard")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Dashboard
          </button>

          <div>
            <h1 className={styles.title}>Classification Result</h1>
            <p className={styles.subtitle}>Analysis Complete</p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.actionBtn}>
            <svg viewBox="0 0 24 24">
              <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
            </svg>
            Export
          </button>

          <button className={styles.actionBtn}>
            <svg viewBox="0 0 24 24">
              <path d="M12 9v4m0 4h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Mark Incorrect
          </button>

          <button className={styles.saveBtn}>
            <svg viewBox="0 0 24 24">
              <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h8l4 4v12a2 2 0 01-2 2z" />
              <path d="M7 21v-8h10v8" />
            </svg>
            Save (Ctrl + S)
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Image Preview</h3>

            <img
              src="https://images.unsplash.com/photo-1545239705-1564e58b9e4a"
              alt="Plant preview"
              className={styles.previewImage}
            />

            <div className={styles.meta}>
              <p>
                <span>Processed by:</span> Current User
              </p>
              <p>
                <span>Timestamp:</span> 1/17/2026, 8:50 AM
              </p>
              <p>
                <span>Model version:</span> PlantNet v4.2.1
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          {/* Identity Card */}
          <div className={styles.card}>
            <h2 className={styles.plantName}>Monstera Deliciosa</h2>
            <em className={styles.scientificName}>Monstera deliciosa Liebm.</em>

            <div className={styles.confidence}>
              <div className={styles.confidenceHeader}>
                <span>Confidence Level</span>
                <span className={styles.confidenceValue}>96.8%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: "96.8%" }}
                />
              </div>
            </div>

            {/* Common Names */}
            <p className={styles.commonLabel}>Common Names</p>
            <div className={styles.tags}>
              <span>Swiss Cheese Plant</span>
              <span>Split-leaf Philodendron</span>
            </div>
          </div>

          {/* Scientific Details */}
          <div className={styles.card}>
            <button
              className={styles.sectionBtn}
              onClick={() => setShowScientific(!showScientific)}
            >
              <span>Scientific Details</span>
              <span className={styles.toggleGroup}>
                {showScientific ? "Hide" : "Show"}
                <svg
                  className={showScientific ? styles.rotate : ""}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {showScientific && (
              <div className={styles.cardBody}>
                <p>
                  <strong>Family:</strong> Araceae
                </p>
                <p>
                  A flowering plant native to tropical forests of southern
                  Mexico.
                </p>
              </div>
            )}
          </div>

          {/* Usage */}
          <div className={styles.card}>
            <button
              className={styles.sectionBtn}
              onClick={() => setShowUsage(!showUsage)}
            >
              <span>Industrial Usage & Notes</span>
              <span className={styles.toggleGroup}>
                {showUsage ? "Hide" : "Show"}
                <svg
                  className={showUsage ? styles.rotate : ""}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {showUsage && (
              <div className={styles.cardBody}>
                <p>
                  Commonly cultivated as an ornamental plant and occasionally
                  for fruit production.
                </p>
              </div>
            )}
          </div>

          {/* Growth */}
          <div className={styles.card}>
            <button
              className={styles.sectionBtn}
              onClick={() => setShowGrowth(!showGrowth)}
            >
              <span>Growth Conditions</span>
              <span className={styles.toggleGroup}>
                {showGrowth ? "Hide" : "Show"}
                <svg
                  className={showGrowth ? styles.rotate : ""}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {showGrowth && (
              <div className={styles.cardBody}>
                <p>
                  Prefers indirect light, high humidity, and well-draining soil.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.footerBanner}>
        Review the result carefully. Save if correct, mark incorrect if further
        review is required, or export a report for documentation.
      </div>
    </div>
  );
}
