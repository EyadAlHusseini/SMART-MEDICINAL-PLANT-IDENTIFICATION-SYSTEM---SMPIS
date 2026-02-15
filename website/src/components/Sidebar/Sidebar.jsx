import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C7 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-3-8-8-8z" />
            <path d="M12 8c2 0 3 1.5 3 3s-1 3-3 3-3-1.5-3-3 1-3 3-3z" />
          </svg>
        </div>
        <span>PlantClassify</span>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/scan-upload"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Scan / Upload
        </NavLink>

        <NavLink
          to="/records"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Records
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="/data-management"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Data Management
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
