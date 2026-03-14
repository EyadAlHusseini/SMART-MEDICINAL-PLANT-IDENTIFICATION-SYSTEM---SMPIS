import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import ActionCard from "../../components/ActionCard/ActionCard";
import AddEmployeeModal from "../../components/Modals/AddEmployeeModal";

function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, activities, stats } = useData();

  // Calculation Logic
  const difference = stats.todayCount - stats.yesterdayCount;
  // Handle division by zero if yesterday was 0
  const percentageChange =
    stats.yesterdayCount === 0
      ? stats.todayCount * 100
      : Math.abs(((difference / stats.yesterdayCount) * 100).toFixed(1));

  const isPositive = difference >= 0;

  const LeafIcon = (
    <svg
      width="22"
      height="22"
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <header>
        <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
          Welcome, {user?.name}
        </h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Enterprise Control Panel • {user?.role}
        </p>
      </header>

      {/* KPI Card */}
      <div className="w-full max-w-[440px] bg-white border border-black/10 rounded-xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <span className="text-base text-slate-500 font-medium">
            Plants Classified Today
          </span>
          <div className="text-2xl font-bold text-slate-900 my-1">
            {stats.todayCount}
          </div>
          <div
            className={`flex items-center gap-1 text-sm font-bold ${isPositive ? "text-emerald-600" : "text-rose-600"}`}
          >
            <svg
              className={`transition-transform duration-500 ${isPositive ? "" : "rotate-180"}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            {isPositive ? "+" : "-"}
            {percentageChange}% from yesterday
          </div>
        </div>
        <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20">
          {LeafIcon}
        </div>
      </div>

      <section>
        <h2 className="text-base font-semibold text-slate-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActionCard
            title="Upload"
            description="Upload plant images for classification"
            onClick={() => navigate("/upload")}
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            }
          />

          <ActionCard
            title="Records"
            description="View classification history"
            onClick={() => navigate("/records")}
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
          />

          {/* ADMIN ONLY CARDS */}
          {user?.role === "Administrator" && (
            <>
              <ActionCard
                title="Reports"
                description="View analytics and trends"
                onClick={() => navigate("/reports")}
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                }
              />

              <ActionCard
                title="Data Management"
                description="Manage plant database"
                onClick={() => navigate("/DataManagement")}
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                }
              />

              <ActionCard
                variant="action"
                title="Add Employee"
                description="Register new system user"
                onClick={() => setIsModalOpen(true)}
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="17" y1="11" x2="23" y2="11" />
                  </svg>
                }
              />
            </>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-slate-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {activities.length > 0 ? (
              activities.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-4 px-6 hover:bg-slate-50 transition-colors group"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${item.type === "success" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"}`}
                  />
                  <div className="text-sm">
                    <p className="text-slate-900 font-medium">
                      {item.name}{" "}
                      <span className="font-normal text-slate-600">
                        {item.action}
                      </span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-medium">
                  No activity to show yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
