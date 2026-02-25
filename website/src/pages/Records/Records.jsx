import React, { useState } from "react";
import styles from "./Records.module.css";

const MOCK_RECORDS = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    confidence: 96.8,
    user: "John Smith",
    date: "2025-12-05 14:23",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
  },
  {
    id: 2,
    name: "Ficus Elastica",
    confidence: 94.2,
    user: "Sarah Johnson",
    date: "2025-12-05 13:45",
    img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400",
  },
  {
    id: 3,
    name: "Pothos Aureus",
    confidence: 98.5,
    user: "Mike Chen",
    date: "2025-12-05 12:18",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
  },
  {
    id: 4,
    name: "Aloe Vera",
    confidence: 99.1,
    user: "Emma Wilson",
    date: "2025-12-05 11:52",
    img: "https://images.unsplash.com/photo-1596547610032-d3c5825f4d9d?w=400",
  },
  {
    id: 5,
    name: "Sansevieria Trifasciata",
    confidence: 97.3,
    user: "David Brown",
    date: "2025-12-05 10:33",
    img: "https://images.unsplash.com/photo-1593433551231-144fe8475e1c?w=400",
  },
  {
    id: 6,
    name: "Spathiphyllum",
    confidence: 88.7,
    user: "John Smith",
    date: "2025-12-05 09:15",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400",
  },
  {
    id: 7,
    name: "Dracaena Marginata",
    confidence: 95.6,
    user: "Sarah Johnson",
    date: "2025-12-04 16:40",
    img: "https://images.unsplash.com/photo-1598983062491-5934ce558814?w=400",
  },
  {
    id: 8,
    name: "Philodendron Brasil",
    confidence: 92.4,
    user: "Mike Chen",
    date: "2025-12-04 15:22",
    img: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400",
  },
];

export default function Records() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className={styles.container}>
      {/* Top Header Section */}
      <div className={styles.headerArea}>
        <div>
          <h1 className={styles.mainTitle}>Classification Records</h1>
          <p className={styles.recordCount}>
            {MOCK_RECORDS.length} records found
          </p>
        </div>

        <div className={styles.topActions}>
          <button className={styles.whiteBtn}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export
          </button>

          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${viewMode === "list" ? styles.activeToggle : ""}`}
              onClick={() => setViewMode("list")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
            <button
              className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.activeToggle : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Search/Filter Bar */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <svg
            className={styles.searchIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search records... (Ctrl+F)"
            className={styles.inputField}
          />
        </div>
        <button className={styles.whiteBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Filters
        </button>
      </div>

      {/* Content Section */}
      {viewMode === "list" ? (
        <div className={styles.tableWrapper}>
          <table className={styles.recordsTable}>
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Plant Name</th>
                <th>Confidence</th>
                <th>Processed By</th>
                <th>Date/Time</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_RECORDS.map((record) => (
                <tr key={record.id}>
                  <td>
                    <div className={styles.thumbContainer}>
                      <img
                        src={record.img}
                        alt=""
                        className={styles.listThumb}
                      />
                    </div>
                  </td>
                  <td className={styles.boldText}>{record.name}</td>
                  <td
                    className={
                      record.confidence > 90 ? styles.textGreen : styles.textRed
                    }
                  >
                    {record.confidence}%
                  </td>
                  <td>{record.user}</td>
                  <td className={styles.grayText}>{record.date}</td>
                  <td>
                    <div className={styles.tableActions}>
                      <button className={styles.iconBtn}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <button className={styles.iconBtn}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className={`${styles.iconBtn} ${styles.delBtn}`}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {MOCK_RECORDS.map((record) => (
            <div key={record.id} className={styles.plantCard}>
              <div className={styles.cardImgWrapper}>
                <img
                  src={record.img}
                  alt={record.name}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{record.name}</h3>
                <div className={styles.cardData}>
                  <div className={styles.dataRow}>
                    <span>Confidence:</span>
                    <span className={styles.confBadge}>
                      {record.confidence}%
                    </span>
                  </div>
                  <div className={styles.dataRow}>
                    <span>By:</span>
                    <span>{record.user}</span>
                  </div>
                  <div className={styles.cardTime}>{record.date}</div>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.cardAction}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>{" "}
                    View
                  </button>
                  <button className={styles.cardAction}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>{" "}
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.bottomTip}>
        <strong>Tip:</strong> Use Ctrl+F to quickly search records. Click on any
        record to view details.
      </div>
    </div>
  );
}
