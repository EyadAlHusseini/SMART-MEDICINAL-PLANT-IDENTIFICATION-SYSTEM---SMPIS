import styles from "./Dashboard.module.css";
import ActionCard from "../../components/ActionCard/ActionCard";

function Dashboard() {
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
          <span className={styles.kpiChange}>▲ +12% from yesterday</span>
        </div>

        <div className={styles.kpiIcon}>
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
            <path d="M12 2C7 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-3-8-8-8z" />
            <path d="M12 8c2 0 3 1.5 3 3s-1 3-3 3-3-1.5-3-3 1-3 3-3z" />
          </svg>
        </div>
      </div>

      {/* Quick Actions */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>

        <div className={styles.actionsGrid}>
          <ActionCard
            title="Scan / Upload"
            description="Capture or upload plant images for classification"
            shortcut="Shortcut: Ctrl + N"
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
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            }
          />

          <ActionCard
            title="Records"
            description="View and manage classification history"
            shortcut="Shortcut: Ctrl + F"
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
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8" />
                <path d="M8 12h8" />
                <path d="M8 16h8" />
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
            <span className={styles.greenDot} />
            <div>
              <strong>Mike Chen</strong> Generated weekly report
              <div className={styles.time}>23 minutes ago</div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.activityItem}>
            <span className={styles.greenDot} />
            <div>
              <strong>Emma Wilson</strong> Updated plant database
              <div className={styles.time}>1 hour ago</div>
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
