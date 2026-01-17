import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <header className={styles.topbar}>
      <span className={styles.title}>
        Enterprise Plant Classification System
      </span>

      <div className={styles.actions}>
        {/* Sync */}
        <button className={styles.actionButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <polyline points="21 3 21 9 15 9" />
          </svg>
          <span>Sync</span>
        </button>

        {/* Export */}
        <button className={styles.actionButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
          <span>Export</span>
        </button>

        {/* Notifications */}
        <button className={styles.iconButton}>
          <span className={styles.notificationBadge}>3</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <span className={styles.user}>Plant Analyst</span>
      </div>
    </header>
  );
}

export default Topbar;
