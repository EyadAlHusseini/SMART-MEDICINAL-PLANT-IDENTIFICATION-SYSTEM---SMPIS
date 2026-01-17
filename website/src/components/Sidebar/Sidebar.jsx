import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brandHeader}>
        <div className={styles.brandContent}>
          <div className={styles.brandIcon}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L7 7a5 5 0 0 0 5 5 5 5 0 0 0 5-5z" />
              <path d="M12 12v10" />
            </svg>
          </div>
          <span className={styles.brandText}>PlantClassify</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <button className={styles.item}>Dashboard</button>
        <button className={`${styles.item} ${styles.active}`}>
          Scan / Upload
        </button>
        <button className={styles.item}>Records</button>
        <button className={styles.item}>Reports</button>
        <button className={styles.item}>Data Management</button>
        <button className={styles.item}>Settings</button>
      </nav>

      <div className={styles.footer}>
        <p>Version 2.4.1</p>
        <p>© 2025 PlantClassify Enterprise</p>
      </div>
    </aside>
  );
}

export default Sidebar;
