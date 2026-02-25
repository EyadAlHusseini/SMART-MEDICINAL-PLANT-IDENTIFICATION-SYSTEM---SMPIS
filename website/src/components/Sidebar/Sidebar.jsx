import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>PlantClassify</span>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/scan-upload"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Scan / Upload
        </NavLink>

        <NavLink
          to="/records"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Records
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Reports
        </NavLink>

        <NavLink
          to="/data-management"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Data Management
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
