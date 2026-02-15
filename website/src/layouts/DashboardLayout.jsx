import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
