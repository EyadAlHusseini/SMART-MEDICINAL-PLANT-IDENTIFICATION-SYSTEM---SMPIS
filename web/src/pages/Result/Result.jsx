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
            Back to Dashboard
          </button>

          <div>
            <h1 className={styles.title}>Classification Result</h1>
            <p className={styles.subtitle}>Analysis Complete</p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.actionBtn}>Export</button>
          <button className={styles.actionBtn}>Mark Incorrect</button>
          <button className={styles.saveBtn}>Save (Ctrl + S)</button>
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
              <span>{showScientific ? "Hide" : "Show"}</span>
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
              <span>{showUsage ? "Hide" : "Show"}</span>
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
              <span>{showGrowth ? "Hide" : "Show"}</span>
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

      {/* Footer Banner */}
      <div className={styles.footerBanner}>
        Review the result carefully. Save if correct, mark incorrect if further
        review is required, or export a report for documentation.
      </div>
    </div>
  );
}
