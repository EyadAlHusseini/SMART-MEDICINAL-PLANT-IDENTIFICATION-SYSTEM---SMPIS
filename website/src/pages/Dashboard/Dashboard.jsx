import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import ActionCard from "../../components/ActionCard/ActionCard";

function Dashboard() {
  const navigate = useNavigate();

  // New leaf icon provided earlier (used in KPI and Brand)
  const LeafIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 16.6667C7.70338 16.6711 6.29188 16.1254 5.2121 15.1378C4.13232 14.1503 3.46314 12.793 3.33728 11.3351C3.21142 9.87722 3.63808 8.4253 4.53262 7.26728C5.42717 6.10927 6.72427 5.32975 8.16667 5.08333C12.9167 4.16667 14.1667 3.73333 15.8333 1.66667C16.6667 3.33333 17.5 5.15 17.5 8.33333C17.5 12.9167 13.5167 16.6667 9.16667 16.6667Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66667 17.5C1.66667 15 3.20833 13.0333 5.9 12.5C7.91667 12.1 10 10.8333 10.8333 10"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Enterprise Control Panel</p>
      </div>

      {/* KPI Card */}
      <div className={styles.kpiCard}>
        <div>
          <span className={styles.kpiLabel}>Plants Classified Today</span>
          <div className={styles.kpiValue}>247</div>
          <span className={styles.kpiChange}>+12% from yesterday</span>
        </div>

        <div className={styles.kpiIcon}>{LeafIcon}</div>
      </div>

      {/* Quick Actions */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>

        <div className={styles.actionsGrid}>
          <ActionCard
            title="Scan / Upload"
            description="Capture or upload plant images for classification"
            shortcut="Shortcut: Ctrl + N"
            onClick={() => navigate("/scan-upload")}
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
            title="Records"
            description="View and manage classification history"
            shortcut="Shortcut: Ctrl + F"
            onClick={() => navigate("/records")}
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Recent Activity */}
      <section className={styles.recentActivity}>
        <span className={styles.recentTitle}>Recent Activity</span>

        <div className={styles.activityCard}>
          <div className={styles.activityItem}>
            <span className={styles.greenDot} />
            <div>
              <strong>John Smith</strong> Classified Monstera Deliciosa
              <div className={styles.time}>2 minutes ago</div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.activityItem}>
            <span className={styles.greenDot} />
            <div>
              <strong>Sarah Johnson</strong> Uploaded batch of 15 images
              <div className={styles.time}>8 minutes ago</div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.activityItem}>
            <span className={styles.orangeDot} />
            <div>
              <strong>David Brown</strong> Classification failed – low
              confidence
              <div className={styles.time}>2 hours ago</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
