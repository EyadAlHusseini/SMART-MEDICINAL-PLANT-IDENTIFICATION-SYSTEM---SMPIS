import { useNavigate } from "react-router-dom";
import ActionCard from "../../components/ActionCard/ActionCard";

function Dashboard() {
  const navigate = useNavigate();

  // Your Leaf SVG for the KPI and Brand
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
      {/* Header */}
      <header>
        <h1 className="text-2xl font-normal text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Enterprise Control Panel</p>
      </header>

      {/* KPI Card */}
      <div className="w-full max-w-[440px] bg-white border border-black/10 rounded-xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
        <div>
          <span className="text-base text-slate-500">
            Plants Classified Today
          </span>
          <div className="text-2xl font-semibold text-slate-900 my-1">247</div>
          <span className="text-sm font-medium text-emerald-600">
            +12% from yesterday
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-accent flex items-center justify-center">
          {LeafIcon}
        </div>
      </div>

      {/* Quick Actions */}
      <section>
        <h2 className="text-base font-semibold text-slate-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[900px]">
          <ActionCard
            title="Scan / Upload"
            description="Capture or upload plant images for classification"
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
      <section>
        <h2 className="text-base font-semibold text-slate-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {/* Activity Item 1 */}
            <div className="flex items-start gap-3 p-4 px-6 hover:bg-slate-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div className="text-sm">
                <p className="text-slate-900 font-medium">
                  John Smith{" "}
                  <span className="font-normal text-slate-600">
                    Classified Monstera Deliciosa
                  </span>
                </p>
                <p className="text-xs text-slate-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex items-start gap-3 p-4 px-6 hover:bg-slate-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div className="text-sm">
                <p className="text-slate-900 font-medium">
                  Sarah Johnson{" "}
                  <span className="font-normal text-slate-600">
                    Uploaded batch of 15 images
                  </span>
                </p>
                <p className="text-xs text-slate-400 mt-1">8 minutes ago</p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex items-start gap-3 p-4 px-6 hover:bg-slate-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
              <div className="text-sm">
                <p className="text-slate-900 font-medium">
                  David Brown{" "}
                  <span className="font-normal text-slate-600">
                    Classification failed – low confidence
                  </span>
                </p>
                <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
