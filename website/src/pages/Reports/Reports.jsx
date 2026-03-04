import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* --- MOCK DATA --- */
const DAILY_DATA = [
  { name: "Dec 1", classifications: 45 },
  { name: "Dec 2", classifications: 52 },
  { name: "Dec 3", classifications: 49 },
  { name: "Dec 4", classifications: 64 },
  { name: "Dec 5", classifications: 58 },
];

const WEEKLY_DATA = [
  { name: "Week 1", count: 230, accuracy: 96 },
  { name: "Week 2", count: 290, accuracy: 97.2 },
  { name: "Week 3", count: 315, accuracy: 97.8 },
  { name: "Week 4", count: 267, accuracy: 98.4 },
];

const DISTRIBUTION_DATA = [
  { name: "Monstera", value: 35 },
  { name: "Ficus", value: 28 },
  { name: "Pothos", value: 22 },
  { name: "Aloe", value: 15 },
];

const COLORS = ["#062d23", "#2d7260", "#88c3a9", "#cfe4d9"];

export default function Reports() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* ROW 1: Header & Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
            Analytics & Reports
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Performance insights and trends
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 outline-none focus:ring-2 focus:ring-brand-green/20 min-w-[140px]">
            <option>This Week</option>
            <option>Last Month</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
            <svg
              width="16"
              height="16"
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
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export Excel
          </button>
        </div>
      </header>

      {/* ROW 2: KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Classifications"
          value="1,247"
          trend="+18% vs last period"
          trendUp={true}
        />
        <KPICard
          title="Avg. Confidence"
          value="96.8%"
          trend="+2.3% vs last period"
          trendUp={true}
        />
        <KPICard
          title="Active Users"
          value="24"
          trend="8 active today"
          neutral={true}
        />
        <KPICard
          title="Processing Time"
          value="1.2s"
          trend="15% faster"
          trendUp={true}
        />
      </div>

      {/* ROW 3: Daily & Weekly Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartBox title="Daily Classifications">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={DAILY_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#777777" /* Darkened from #f1f5f9 for better visibility */
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="classifications"
                stroke="#062d23"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#062d23" }}
                activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartBox>

        <ChartBox title="Weekly Performance">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={WEEKLY_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#777777"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f1f5f9", radius: 4 }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="rect"
                wrapperStyle={{ paddingTop: "20px" }}
              />
              <Bar
                dataKey="count"
                fill="#062d23"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
              <Bar
                dataKey="accuracy"
                fill="#88c3a9"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>

      {/* ROW 4: Distribution & Top List */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
        <ChartBox title="Plant Distribution">
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={DISTRIBUTION_DATA}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {DISTRIBUTION_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {DISTRIBUTION_DATA.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: COLORS[i] }}
                  />
                  <span className="text-xs font-medium text-slate-500">
                    {item.name} {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ChartBox>

        <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900 mb-6">
            Top Classified Plants
          </h3>
          <div className="space-y-3">
            {[
              { name: "Monstera Deliciosa", count: 87, change: "+15%" },
              { name: "Ficus Elastica", count: 72, change: "+8%" },
              { name: "Pothos Aureus", count: 65, change: "+12%" },
              { name: "Aloe Vera", count: 54, change: "+5%" },
              { name: "Sansevieria", count: 48, change: "-3%", down: true },
            ].map((plant, i) => (
              <div
                key={plant.name}
                className="flex items-center justify-between p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl hover:bg-emerald-50 transition-all cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-md bg-brand-green flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {plant.name}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-500">
                    {plant.count} classifications
                  </span>
                  <span
                    className={`text-xs font-bold ${plant.down ? "text-rose-500" : "text-emerald-600"}`}
                  >
                    {plant.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 5: Accuracy Gauge */}
      <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
        {/* FIXED: Standard casing and weight for Header */}
        <h3 className="text-base font-semibold text-slate-900 mb-8">
          Overall System Accuracy
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Custom SVG Gauge */}
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#f1f5f9"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#062d23"
                strokeWidth="12"
                fill="none"
                strokeDasharray="552.9"
                strokeDashoffset={552.9 * (1 - 0.984)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-slate-900 tracking-tight">
                98.4%
              </span>
              {/* FIXED: Accuracy Rate casing and font consistency */}
              <span className="text-sm text-slate-500 font-medium mt-1">
                Accuracy Rate
              </span>
            </div>
          </div>

          <div className="space-y-6 min-w-[200px]">
            <div>
              {/* FIXED: Label casing and font */}
              <p className="text-sm font-medium text-slate-500 mb-1">Target</p>
              <p className="text-lg font-semibold text-slate-900">95.0%</p>
            </div>
            <div>
              {/* FIXED: Label casing and font */}
              <p className="text-sm font-medium text-slate-500 mb-1">
                Best This Month
              </p>
              <p className="text-lg font-semibold text-slate-900">99.2%</p>
            </div>
            <div>
              {/* FIXED: Label casing and font */}
              <p className="text-sm font-medium text-slate-500 mb-1">Trend</p>
              {/* FIXED: Removed font-bold from trend text */}
              <div className="flex items-center gap-1.5 text-emerald-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span className="text-sm">Above target</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL TIP BOX */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 px-6 text-sm text-slate-600 shadow-sm">
        <strong className="text-emerald-800">Note:</strong> All charts and
        reports are print-ready. Use Export PDF for formal documentation or
        Export Excel for data analysis.
      </div>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function KPICard({ title, value, trend, trendUp, neutral }) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
      <p className="text-sm font-medium text-slate-500 mb-4">{title}</p>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <div
          className={`flex items-center gap-1.5 text-sm font-medium ${neutral ? "text-slate-400" : trendUp ? "text-emerald-600" : "text-rose-500"}`}
        >
          {!neutral && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={trendUp ? "" : "rotate-180"}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          )}
          {trend}
        </div>
      </div>
    </div>
  );
}

function ChartBox({ title, children }) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900 mb-6">{title}</h3>
      {children}
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 p-3 shadow-xl rounded-lg">
        <p className="text-sm font-bold text-slate-900 mb-1">
          {label || payload[0].name}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-xs font-medium text-slate-500"
            style={{ color: entry.color }}
          >
            {entry.name} :{" "}
            <span className="font-bold text-slate-900">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}
